import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoContrato } from './entities/tipo_contrato.entity';
import { CreateTipoContratoDto } from './dto/create-tipo_contrato.dto';
import { UpdateTipoContratoDto } from './dto/update-tipo_contrato.dto';

@Injectable()
export class TipoContratoService {
  constructor(
    @InjectRepository(TipoContrato)
    private readonly repo: Repository<TipoContrato>,
  ) {}

  create(dto: CreateTipoContratoDto) {
    const entity = this.repo.create(dto);
    return this.repo.save(entity);
  }

  findAll() {
    return this.repo.find({
      order: { nombre_tipo_contrato: 'ASC' },
    });
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id_tipo_contrato: id });
  }

  async update(id: number, dto: UpdateTipoContratoDto) {
    await this.repo.update(id, dto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
