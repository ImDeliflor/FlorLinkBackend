import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ciudad } from './entities/ciudad.entity';
import { CreateCiudadDto } from './dto/create-ciudad.dto';
import { UpdateCiudadDto } from './dto/update-ciudad.dto';

@Injectable()
export class CiudadService {
  constructor(
    @InjectRepository(Ciudad)
    private readonly repo: Repository<Ciudad>,
  ) {}

  create(dto: CreateCiudadDto) {
    const entity = this.repo.create(dto);
    return this.repo.save(entity);
  }

  findAll() {
    return this.repo.find({ order: { nombre_ciudad: 'ASC' } });
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id_ciudad: id });
  }

  async update(id: number, dto: UpdateCiudadDto) {
    await this.repo.update(id, dto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
