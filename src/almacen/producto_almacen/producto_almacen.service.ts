import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductoAlmacen } from './entities/producto_almacen.entity';
import { UpdateProductoAlmacenDto } from './dto/update-producto_almacen.dto';
import { CreateProductoAlmacenDto } from './dto/create-producto_almacen.dto';

@Injectable()
export class ProductoAlmacenService {
  constructor(
    @InjectRepository(ProductoAlmacen)
    private readonly productoRepo: Repository<ProductoAlmacen>,
  ) {}

  // CREATE
  async create(dto: CreateProductoAlmacenDto) {
    const producto = this.productoRepo.create(dto);
    return await this.productoRepo.save(producto);
  }

  // READ ALL
  async findAll() {
    return await this.productoRepo.find({
      order: {
        cod_producto: 'ASC',
      },
    });
  }

  // READ ONE
  async findOne(cod_producto: number) {
    const producto = await this.productoRepo.findOne({
      where: { cod_producto },
    });

    if (!producto) {
      throw new NotFoundException('Producto no encontrado');
    }

    return producto;
  }

  // UPDATE
  async update(cod_producto: number, dto: UpdateProductoAlmacenDto) {
    const producto = await this.findOne(cod_producto);
    const updated = Object.assign(producto, dto);
    return await this.productoRepo.save(updated);
  }

  // DELETE
  async remove(cod_producto: number) {
    const producto = await this.findOne(cod_producto);
    return await this.productoRepo.remove(producto);
  }
}
