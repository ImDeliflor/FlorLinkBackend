import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoteProductoAlmacenView } from './entities/lote_producto_almacen_view.entity';

@Injectable()
export class LoteProductoAlmacenViewService {
  constructor(
    @InjectRepository(LoteProductoAlmacenView)
    private readonly loteProductoViewRepository: Repository<LoteProductoAlmacenView>,
  ) {}

  async findAll() {
    return await this.loteProductoViewRepository.find();
  }
}
