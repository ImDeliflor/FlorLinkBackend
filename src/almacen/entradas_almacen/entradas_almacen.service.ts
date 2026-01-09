import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { EntradasAlmacen } from './entities/entradas_almacen.entity';
import { CreateEntradasAlmacenDto } from './dto/create-entradas_almacen.dto';
import { UpdateEntradasAlmacenDto } from './dto/update-entradas_almacen.dto';
import { InventarioAlmacen } from '../inventario_almacen/entities/inventario_almacen.entity';
import { EntradasPendientesAlmacen } from '../entradas_pendientes_almacen/entities/entradas_pendientes_almacen.entity';
import {
  HasLoteEnum,
  ProcesarEntradasAlmacenDto,
} from './dto/procesar-entradas_almacen.dto';
import { LoteProductoAlmacen } from '../lote_producto_almacen/entities/lote_producto_almacen.entity';

@Injectable()
export class EntradasAlmacenService {
  constructor(
    @InjectRepository(EntradasAlmacen)
    private entradasRepo: Repository<EntradasAlmacen>,
    private readonly dataSource: DataSource,
  ) {}

  async create(dto: CreateEntradasAlmacenDto): Promise<EntradasAlmacen> {
    const entrada = this.entradasRepo.create(dto);
    return this.entradasRepo.save(entrada);
  }

  async findAll(): Promise<EntradasAlmacen[]> {
    return this.entradasRepo.find({
      order: { id_entrada_almacen: 'DESC' },
    });
  }

  async findOne(id: number): Promise<EntradasAlmacen> {
    const entrada = await this.entradasRepo.findOne({
      where: { id_entrada_almacen: id },
    });

    if (!entrada) {
      throw new NotFoundException(`Entrada almacen con ID ${id} no existe`);
    }

    return entrada;
  }

  async update(
    id: number,
    dto: UpdateEntradasAlmacenDto,
  ): Promise<EntradasAlmacen> {
    const entrada = await this.findOne(id); // lanza NotFound si no existe

    // Asignar sólo las propiedades que vienen en dto
    Object.assign(entrada, dto);

    return this.entradasRepo.save(entrada);
  }

  async remove(id: number): Promise<void> {
    const result = await this.entradasRepo.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Entrada almacen con ID ${id} no existe`);
    }
  }

  // PROCESOS TRANSACCIONALES
  async createEntrada(dto: ProcesarEntradasAlmacenDto) {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      // PRODUCTO SIN LOTE
      if (dto.has_lote === HasLoteEnum.NO) {
        const data_inventory = await queryRunner.manager.findOne(
          InventarioAlmacen,
          {
            where: { cod_producto: dto.cod_producto },
            lock: { mode: 'pessimistic_write' },
          },
        );

        if (!data_inventory) {
          const inventario = queryRunner.manager.create(InventarioAlmacen, {
            cod_producto: dto.cod_producto,
            inventario_actual: dto.cantidad,
          });

          await queryRunner.manager.save(inventario);
        } else {
          data_inventory.inventario_actual += dto.cantidad;
          await queryRunner.manager.save(data_inventory);
        }
      }

      // PRODUCTO CON LOTE
      if (dto.has_lote === HasLoteEnum.SI) {
        const entradaPendiente = queryRunner.manager.create(
          EntradasPendientesAlmacen,
          {
            cod_producto: dto.cod_producto,
            cantidad_a_registrar: dto.cantidad,
            estado_entrada: 'Pendiente',
          },
        );

        await queryRunner.manager.save(entradaPendiente);
      }

      // EVALUAR SI HAY UN ID DE LOTE
      if (dto.id_lote && dto.tipo_documento !== 'Factura') {
        // Buscar el id de lote ingresado
        const data_lote = await queryRunner.manager.findOne(
          LoteProductoAlmacen,
          {
            where: { id_lote_producto: dto.id_lote },
            lock: { mode: 'pessimistic_write' },
          },
        );

        // En caso de que el lote no exista
        if (!data_lote) {
          throw new BadRequestException('Lote no encontrado');
        }

        // En caso de no coincidir el código de producto
        if (data_lote.cod_producto !== dto.cod_producto) {
          throw new BadRequestException(
            'El lote no pertenece al producto seleccionado',
          );
        }

        // Calcular la nueva cantidad
        const nuevaCantidad = data_lote.cantidad_disponible_lote + dto.cantidad;

        // En caso de que la cantidad sea negativa
        if (nuevaCantidad < 0) {
          throw new BadRequestException(
            'La cantidad del lote no puede quedar negativa',
          );
        }

        // Asignar la nueva cantidad al lote
        data_lote.cantidad_disponible_lote = nuevaCantidad;
        // Guardar la data nueva del lote
        await queryRunner.manager.save(data_lote);
      }

      // REGISTRO DE LA ENTRADA
      const entrada = queryRunner.manager.create(EntradasAlmacen, {
        tipo_documento: dto.tipo_documento,
        nro_factura: dto.nro_factura,
        fecha_entrada: new Date(dto.fecha_entrada),
        cod_producto: dto.cod_producto,
        cantidad: dto.cantidad,
        precio_unidad: dto.precio_unidad,
        observacion: dto.observacion,
        created_by: dto.created_by,
        fecha_factura: new Date(dto.fecha_factura),
      });

      await queryRunner.manager.save(entrada);

      await queryRunner.commitTransaction();

      return {
        success: true,
        message: '¡Proceso completado exitosamente!',
      };
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }
}
