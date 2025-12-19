import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EntradasAlmacenView } from './entities/entradas_almacen_view.entity';

@Injectable()
export class EntradasAlmacenViewService {
  constructor(
    @InjectRepository(EntradasAlmacenView)
    private entradasViewRepo: Repository<EntradasAlmacenView>,
  ) {}

  async findAll(): Promise<EntradasAlmacenView[]> {
    return this.entradasViewRepo.find({
      order: { id_entrada_almacen: 'DESC' },
    });
  }
}
