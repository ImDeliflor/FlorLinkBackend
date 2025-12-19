import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { InventarioAlmacenView } from './entities/inventario_almacen_view.entity';

@Injectable()
export class InventarioAlmacenViewService {
  constructor(
    @InjectRepository(InventarioAlmacenView)
    private readonly inventarioViewRepo: Repository<InventarioAlmacenView>,
  ) {}

  async findAll(): Promise<InventarioAlmacenView[]> {
    return this.inventarioViewRepo.find({
      order: {
        cod_producto: 'ASC',
      },
    });
  }
}
