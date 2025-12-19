import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoteProductoAlmacen } from './entities/lote_producto_almacen.entity';
import { CreateLoteProductoAlmacenDto } from './dto/create-lote_producto_almacen.dto';
import { UpdateLoteProductoAlmacenDto } from './dto/update-lote_producto_almacen.dto';

@Injectable()
export class LoteProductoAlmacenService {
  constructor(
    @InjectRepository(LoteProductoAlmacen)
    private readonly loteProductoRepository: Repository<LoteProductoAlmacen>,
  ) {}

  async findAll() {
    return await this.loteProductoRepository.find();
  }

  async findOne(id: number) {
    const lote = await this.loteProductoRepository.findOne({
      where: { id_lote_producto: id },
    });

    if (!lote) {
      throw new NotFoundException(`Lote con id ${id} no encontrado`);
    }

    return lote;
  }

  async create(dto: CreateLoteProductoAlmacenDto) {
    const lote = this.loteProductoRepository.create(dto);
    return await this.loteProductoRepository.save(lote);
  }

  async update(id: number, dto: UpdateLoteProductoAlmacenDto) {
    const lote = await this.findOne(id); // valida existencia

    const updated = this.loteProductoRepository.merge(lote, dto);
    return await this.loteProductoRepository.save(updated);
  }

  async remove(id: number) {
    const lote = await this.findOne(id); // valida existencia
    return await this.loteProductoRepository.remove(lote);
  }
}
