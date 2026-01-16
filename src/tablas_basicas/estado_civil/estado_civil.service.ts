import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EstadoCivil } from './entities/estado_civil.entity';
import { CreateEstadoCivilDto } from './dto/create-estado_civil.dto';
import { UpdateEstadoCivilDto } from './dto/update-estado_civil.dto';

@Injectable()
export class EstadoCivilService {
  constructor(
    @InjectRepository(EstadoCivil)
    private readonly repo: Repository<EstadoCivil>,
  ) {}

  create(dto: CreateEstadoCivilDto) {
    const entity = this.repo.create(dto);
    return this.repo.save(entity);
  }

  findAll() {
    return this.repo.find({
      order: { nombre_estado_civil: 'ASC' },
    });
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id_estado_civil: id });
  }

  async update(id: number, dto: UpdateEstadoCivilDto) {
    await this.repo.update(id, dto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
