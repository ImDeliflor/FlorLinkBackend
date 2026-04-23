import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CostosFijosView } from './entities/costos_fijo_view.entity';

@Injectable()
export class CostosFijosServiceView {
  constructor(
    @InjectRepository(CostosFijosView)
    private readonly repo: Repository<CostosFijosView>,
  ) {}

  // READ ALL
  async findAll(): Promise<CostosFijosView[]> {
    return await this.repo.find({ order: { fecha_periodo: 'DESC' } });
  }
}
