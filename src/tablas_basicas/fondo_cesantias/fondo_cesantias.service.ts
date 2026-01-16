import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FondoCesantias } from './entities/fondo_cesantia.entity';
import { CreateFondoCesantiasDto } from './dto/create-fondo_cesantia.dto';
import { UpdateFondoCesantiasDto } from './dto/update-fondo_cesantia.dto';

@Injectable()
export class FondoCesantiasService {
  constructor(
    @InjectRepository(FondoCesantias)
    private readonly repo: Repository<FondoCesantias>,
  ) {}

  create(dto: CreateFondoCesantiasDto) {
    const entity = this.repo.create(dto);
    return this.repo.save(entity);
  }

  findAll() {
    return this.repo.find({
      order: { nombre_fondo_cesantias: 'ASC' },
    });
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id_fondo_cesantias: id });
  }

  async update(id: number, dto: UpdateFondoCesantiasDto) {
    await this.repo.update(id, dto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
