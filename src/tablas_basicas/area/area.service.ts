import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';
import { Area } from './entities/area.entity';

@Injectable()
export class AreaService {
  constructor(
    @InjectRepository(Area)
    private readonly repo: Repository<Area>,
  ) {}

  create(dto: CreateAreaDto) {
    const entity = this.repo.create(dto);
    return this.repo.save(entity);
  }

  findAll() {
    return this.repo.find({ order: { nombre_area: 'ASC' } });
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id_area: id });
  }

  async update(id: number, dto: UpdateAreaDto) {
    await this.repo.update(id, dto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
