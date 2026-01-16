import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSexoDto } from './dto/create-sexo.dto';
import { UpdateSexoDto } from './dto/update-sexo.dto';
import { Sexo } from './entities/sexo.entity';

@Injectable()
export class SexoService {
  constructor(
    @InjectRepository(Sexo)
    private readonly repo: Repository<Sexo>,
  ) {}

  create(dto: CreateSexoDto) {
    const entity = this.repo.create(dto);
    return this.repo.save(entity);
  }

  findAll() {
    return this.repo.find({ order: { descripcion: 'ASC' } });
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id_sexo: id });
  }

  async update(id: number, dto: UpdateSexoDto) {
    await this.repo.update(id, dto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
