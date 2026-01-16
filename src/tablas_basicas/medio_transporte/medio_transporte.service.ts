import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MedioTransporte } from './entities/medio_transporte.entity';
import { CreateMedioTransporteDto } from './dto/create-medio_transporte.dto';
import { UpdateMedioTransporteDto } from './dto/update-medio_transporte.dto';

@Injectable()
export class MedioTransporteService {
  constructor(
    @InjectRepository(MedioTransporte)
    private readonly repo: Repository<MedioTransporte>,
  ) {}

  create(dto: CreateMedioTransporteDto) {
    const entity = this.repo.create(dto);
    return this.repo.save(entity);
  }

  findAll() {
    return this.repo.find({
      order: { nombre_medio_transporte: 'ASC' },
    });
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id_medio_transporte: id });
  }

  async update(id: number, dto: UpdateMedioTransporteDto) {
    await this.repo.update(id, dto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
