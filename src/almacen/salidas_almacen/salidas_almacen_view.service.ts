import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SalidasAlmacenView } from './entities/salidas_almacen_view.entity';

@Injectable()
export class SalidasAlmacenViewService {
  constructor(
    @InjectRepository(SalidasAlmacenView)
    private readonly salidasRepo: Repository<SalidasAlmacenView>,
  ) {}

  async findAll(): Promise<SalidasAlmacenView[]> {
    return this.salidasRepo.find({
      order: { id_salida_almacen: 'DESC' },
    });
  }
}
