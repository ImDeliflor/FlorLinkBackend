import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TarifaMensualView } from './entities/tarifa_mensual_view.entity';

@Injectable()
export class TarifaMensualServiceView {
  constructor(
    @InjectRepository(TarifaMensualView)
    private readonly repo: Repository<TarifaMensualView>,
  ) {}

  // READ ALL
  async findAll(): Promise<TarifaMensualView[]> {
    return await this.repo.find({ order: { fecha_periodo: 'DESC' } });
  }
}
