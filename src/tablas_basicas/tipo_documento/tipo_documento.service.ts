import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoDocumento } from './entities/tipo_documento.entity';
import { CreateTipoDocumentoDto } from './dto/create-tipo_documento.dto';
import { UpdateTipoDocumentoDto } from './dto/update-tipo_documento.dto';

@Injectable()
export class TipoDocumentoService {
  constructor(
    @InjectRepository(TipoDocumento)
    private readonly repo: Repository<TipoDocumento>,
  ) {}

  create(dto: CreateTipoDocumentoDto) {
    const entity = this.repo.create(dto);
    return this.repo.save(entity);
  }

  findAll() {
    return this.repo.find({ order: { nombre_tipo_documento: 'ASC' } });
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id_tipo_documento: id });
  }

  async update(id: number, dto: UpdateTipoDocumentoDto) {
    await this.repo.update(id, dto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
