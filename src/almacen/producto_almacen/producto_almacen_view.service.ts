import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductoAlmacenView } from './entities/producto_almacen_view.entity';

@Injectable()
export class ProductoAlmacenViewService {
  constructor(
    @InjectRepository(ProductoAlmacenView)
    private readonly productoViewRepo: Repository<ProductoAlmacenView>,
  ) {}

  // READ ALL
  async findAll() {
    return await this.productoViewRepo.find();
  }
}
