import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEpsDto } from './dto/create-eps.dto';
import { Eps } from './entities/eps.entity';
import { UpdateEpsDto } from './dto/update-eps.dto';

@Injectable()
export class EpsService {
  constructor(
    @InjectRepository(Eps)
    private readonly repo: Repository<Eps>,
  ) {}

  create(dto: CreateEpsDto) {
    const entity = this.repo.create(dto);
    return this.repo.save(entity);
  }

  findAll() {
    return this.repo.find({ order: { nombre_eps: 'ASC' } });
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id_eps: id });
  }

  async update(id: number, dto: UpdateEpsDto) {
    await this.repo.update(id, dto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
