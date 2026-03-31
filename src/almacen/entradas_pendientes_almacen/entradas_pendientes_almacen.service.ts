import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { EntradasPendientesAlmacen } from './entities/entradas_pendientes_almacen.entity';
import { CreateEntradasPendientesAlmacenDto } from './dto/create-entradas_pendientes_almacen.dto';
import { UpdateEntradasPendientesAlmacenDto } from './dto/update-entradas_pendientes_almacen.dto';
import { ProcessEntradasPendientesAlmacenDto } from './dto/process-entradas_pendientes.dto';
import { LoteProductoAlmacen } from '../lote_producto_almacen/entities/lote_producto_almacen.entity';
import { InventarioAlmacen } from '../inventario_almacen/entities/inventario_almacen.entity';

@Injectable()
export class EntradasPendientesAlmacenService {
  constructor(
    @InjectRepository(EntradasPendientesAlmacen)
    private readonly entradasPendientesRepo: Repository<EntradasPendientesAlmacen>,
    private readonly dataSource: DataSource,
  ) {}

  async findAll(): Promise<EntradasPendientesAlmacen[]> {
    return this.entradasPendientesRepo.find();
  }

  // Función para traer solo las entradas con estado pendiente
  async findAllPending(): Promise<EntradasPendientesAlmacen[]> {
    return this.entradasPendientesRepo.find({
      where: { estado_entrada: 'Pendiente' },
    });
  }

  async findOne(id: number): Promise<EntradasPendientesAlmacen> {
    const entrada = await this.entradasPendientesRepo.findOne({
      where: { id_entrada_pendiente: id },
    });

    if (!entrada) {
      throw new NotFoundException(
        `Entrada pendiente con id ${id} no encontrada`,
      );
    }

    return entrada;
  }

  async create(
    dto: CreateEntradasPendientesAlmacenDto,
  ): Promise<EntradasPendientesAlmacen> {
    const newEntrada = this.entradasPendientesRepo.create(dto);
    return this.entradasPendientesRepo.save(newEntrada);
  }

  async update(
    id: number,
    dto: UpdateEntradasPendientesAlmacenDto,
  ): Promise<EntradasPendientesAlmacen> {
    const entrada = await this.findOne(id);

    const updated = Object.assign(entrada, dto);
    return this.entradasPendientesRepo.save(updated);
  }

  async remove(id: number): Promise<void> {
    const result = await this.entradasPendientesRepo.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(
        `Entrada pendiente con id ${id} no encontrada`,
      );
    }
  }

  // PROCESOS TRANSACCIONALES
  async processEntradaPendiente(
    id_producto: number,
    dto: ProcessEntradasPendientesAlmacenDto,
  ) {
    // Validar que haya una entrada pendiente seleccionada
    if (!dto.entrada_pendiente?.id_entrada_pendiente) {
      throw new BadRequestException(
        '¡Se debe seleccionar una entrada pendiente para realizar el proceso!',
      );
    }

    // Validar que haya almenos un lote ingresado
    if (!dto.lote_producto?.length) {
      throw new BadRequestException('¡Debe haber almenos un lote ingresado!');
    }

    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      // Guardar todos los lotes
      await queryRunner.manager.save(
        dto.lote_producto.map((c) =>
          queryRunner.manager.create(LoteProductoAlmacen, {
            ...c,
            cod_producto: id_producto,
          }),
        ),
      );

      // Buscar el producto en el inventario
      const exists_inventory = await queryRunner.manager.findOne(
        InventarioAlmacen,
        {
          where: { cod_producto: id_producto },
          lock: { mode: 'pessimistic_write' },
        },
      );

      // En caso de que el código exista en el inventario
      if (exists_inventory) {
        // Guardar la nueva cantidad del inventario
        exists_inventory.inventario_actual +=
          dto.entrada_pendiente.cantidad_a_registrar;

        // Guardar el nuevo inventario
        await queryRunner.manager.save(exists_inventory);
      } else {
        // En caso de que no exista el producto en el inventario
        // Crear el objeto
        const new_inventory = queryRunner.manager.create(InventarioAlmacen, {
          cod_producto: id_producto,
          inventario_actual: dto.entrada_pendiente.cantidad_a_registrar,
        });
        // Guardar el objeto en la base de datos
        await queryRunner.manager.save(new_inventory);
      }

      // Modificar los datos de la entrada pendiente
      const result_update = await queryRunner.manager.update(
        EntradasPendientesAlmacen,
        { id_entrada_pendiente: dto.entrada_pendiente.id_entrada_pendiente },
        {
          fecha_registro: dto.entrada_pendiente.fecha_registro,
          estado_entrada: 'Ingresado',
        },
      );

      if (result_update.affected === 0) {
        throw new InternalServerErrorException(
          'No se pudo actualizar la entrada pendiente',
        );
      }

      // Commit
      await queryRunner.commitTransaction();

      return {
        success: true,
        message:
          '¡Proceso de entradas pendientes de almacén completado exitosamente!',
      };
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }
}
