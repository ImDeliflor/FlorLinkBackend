import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FondoPensiones } from './entities/fondo_pensiones.entity';
import { CreateFondoPensionesDto } from './dto/create-fondo_pensiones.dto';
import { UpdateFondoPensionesDto } from './dto/update-fondo_pensiones.dto';

@Injectable()
export class FondoPensionesService {
  constructor(
    @InjectRepository(FondoPensiones)
    private readonly repo: Repository<FondoPensiones>,
  ) {}

  create(dto: CreateFondoPensionesDto) {
    const entity = this.repo.create(dto);
    return this.repo.save(entity);
  }

  findAll() {
    return this.repo.find({
      order: { nombre_fondo_pensiones: 'ASC' },
    });
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id_fondo_pension: id });
  }

  async update(id: number, dto: UpdateFondoPensionesDto) {
    await this.repo.update(id, dto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
