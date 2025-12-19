import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { SalidasAlmacen } from './entities/salidas_almacen.entity';
import { CreateSalidaAlmacenDto } from './dto/create-salidas_almacen.dto';
import { UpdateSalidasAlmacenDto } from './dto/update-salidas_almacen.dto';
import { LoteProductoAlmacen } from '../lote_producto_almacen/entities/lote_producto_almacen.entity';
import { InventarioAlmacen } from '../inventario_almacen/entities/inventario_almacen.entity';

@Injectable()
export class SalidasAlmacenService {
  constructor(
    @InjectRepository(SalidasAlmacen)
    private readonly salidasRepo: Repository<SalidasAlmacen>,
    private readonly dataSource: DataSource,
  ) {}

  async create(dto: CreateSalidaAlmacenDto): Promise<SalidasAlmacen> {
    const salida = this.salidasRepo.create(dto);
    return this.salidasRepo.save(salida);
  }

  async findAll(): Promise<SalidasAlmacen[]> {
    return this.salidasRepo.find({
      order: { id_salida_almacen: 'DESC' },
    });
  }

  async findOne(id: number): Promise<SalidasAlmacen> {
    const salida = await this.salidasRepo.findOne({
      where: { id_salida_almacen: id },
    });
    if (!salida) throw new NotFoundException('Salida no encontrada');
    return salida;
  }

  async update(
    id: number,
    dto: UpdateSalidasAlmacenDto,
  ): Promise<SalidasAlmacen> {
    const salida = await this.findOne(id);
    const updated = Object.assign(salida, dto);
    return this.salidasRepo.save(updated);
  }

  async remove(id: number): Promise<string> {
    const salida = await this.findOne(id);
    await this.salidasRepo.remove(salida);
    return `Salida ${id} eliminada correctamente`;
  }

  // END POINTS TRANSACCIONALES

  // End point transaccional para los productos sin lote
  async createSalida(dto: CreateSalidaAlmacenDto) {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      // Obtener el inventario
      const inventario = await queryRunner.manager.findOne(InventarioAlmacen, {
        where: { cod_producto: dto.cod_producto },
      });

      // Validar que el código exista en el inventario
      if (!inventario) {
        throw new Error('Inventario no encontrado');
      }

      // Restar la cantidad al inventario actual
      inventario.inventario_actual -= dto.cantidad;
      await queryRunner.manager.save(inventario);

      // Crear la salida
      const salida = queryRunner.manager.create(SalidasAlmacen, {
        ...dto,
      });

      // Guardar la salida
      await queryRunner.manager.save(salida);

      // Commit de toda la transaccion
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

  // End Point transaccional para los productos con lote
  async createSalidaConLote(dto: CreateSalidaAlmacenDto) {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      // Obtener el lote
      const lote = await queryRunner.manager.findOne(LoteProductoAlmacen, {
        where: { id_lote_producto: dto.id_lote_producto },
      });

      if (!lote || lote.cantidad_disponible_lote < dto.cantidad) {
        throw new Error('Stock insuficiente en el lote');
      }

      // Restar la cantidad al lote
      lote.cantidad_disponible_lote -= dto.cantidad;
      await queryRunner.manager.save(lote);

      // Obtener el inventario
      const inventario = await queryRunner.manager.findOne(InventarioAlmacen, {
        where: { cod_producto: dto.cod_producto },
      });

      // Validar que el código esté en el inventario
      if (!inventario) {
        throw new Error('Inventario no encontrado');
      }

      // Restar el valor al inventario real
      inventario.inventario_actual -= dto.cantidad;
      await queryRunner.manager.save(inventario);

      // Crear la salida
      const salida = queryRunner.manager.create(SalidasAlmacen, {
        ...dto,
      });

      // Guardar la salida
      await queryRunner.manager.save(salida);

      // Commit
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
