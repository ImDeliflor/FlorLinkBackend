import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCargoDto } from './dto/create-cargo.dto';
import { UpdateCargoDto } from './dto/update-cargo.dto';
import { Cargo } from './entities/cargo.entity';

@Injectable()
export class CargoService {
  constructor(
    @InjectRepository(Cargo)
    private readonly repo: Repository<Cargo>,
  ) {}

  create(dto: CreateCargoDto) {
    const entity = this.repo.create(dto);
    return this.repo.save(entity);
  }

  findAll() {
    return this.repo.find({ order: { nombre_cargo: 'ASC' } });
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id_cargo: id });
  }

  async update(id: number, dto: UpdateCargoDto) {
    await this.repo.update(id, dto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
