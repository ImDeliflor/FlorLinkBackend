import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConsumoCalderaView } from './entities/consumo_caldera_view.entity';

@Injectable()
export class ConsumoCalderaServiceView {
  constructor(
    @InjectRepository(ConsumoCalderaView)
    private readonly view: Repository<ConsumoCalderaView>,
  ) {}

  async findAll(): Promise<ConsumoCalderaView[]> {
    return this.view.find({ order: { fecha_creacion: 'DESC' } });
  }
}
