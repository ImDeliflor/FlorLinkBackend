import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { InventarioAlmacen } from './entities/inventario_almacen.entity';
import { CreateInventarioAlmacenDto } from './dto/create-inventario_almacen.dto';
import { UpdateInventarioAlmacenDto } from './dto/update-inventario_almacen.dto';

@Injectable()
export class InventarioAlmacenService {
  constructor(
    @InjectRepository(InventarioAlmacen)
    private readonly inventarioRepo: Repository<InventarioAlmacen>,
  ) {}

  // CRUD
  async create(dto: CreateInventarioAlmacenDto): Promise<InventarioAlmacen> {
    const nuevo = this.inventarioRepo.create({
      cod_producto: dto.cod_producto,
      inventario_actual: dto.inventario_actual,
    });
    return this.inventarioRepo.save(nuevo);
  }

  async findAll(): Promise<InventarioAlmacen[]> {
    return this.inventarioRepo.find({
      order: {
        cod_producto: 'ASC',
      },
    });
  }

  async findOne(id: number): Promise<InventarioAlmacen> {
    const inv = await this.inventarioRepo.findOne({
      where: { id_inventario: id },
    });
    if (!inv) {
      throw new NotFoundException(`Inventario con id ${id} no encontrado`);
    }
    return inv;
  }

  async update(
    id: number,
    dto: UpdateInventarioAlmacenDto,
  ): Promise<InventarioAlmacen> {
    const inv = await this.findOne(id);
    Object.assign(inv, dto);
    return this.inventarioRepo.save(inv);
  }

  async remove(id: number): Promise<void> {
    await this.inventarioRepo.delete(id);
  }

  // Funciones utilitarias
  async productExists(cod_producto: number): Promise<{
    exists: boolean;
    data?: { id_inventario: number; inventario_actual: number };
  }> {
    const item = await this.inventarioRepo.findOne({
      where: { cod_producto },
      select: ['id_inventario', 'inventario_actual'],
    });

    if (!item) {
      return { exists: false };
    }

    return {
      exists: true,
      data: {
        id_inventario: item.id_inventario,
        inventario_actual: item.inventario_actual,
      },
    };
  }
}
