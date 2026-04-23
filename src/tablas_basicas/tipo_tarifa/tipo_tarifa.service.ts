import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoTarifa } from './entities/tipo_tarifa.entity';
import { CreateTipoTarifaDto } from './dto/create-tipo_tarifa.dto';
import { UpdateTipoTarifaDto } from './dto/update-tipo_tarifa.dto';

@Injectable()
export class TipoTarifaService {
  constructor(
    @InjectRepository(TipoTarifa)
    private readonly repo: Repository<TipoTarifa>,
  ) {}

  // CREATE
  async create(dto: CreateTipoTarifaDto): Promise<TipoTarifa> {
    const entity = this.repo.create(dto);
    return await this.repo.save(entity);
  }

  // READ ALL
  async findAll(): Promise<TipoTarifa[]> {
    return await this.repo.find();
  }

  // READ ONE
  async findOne(id: number): Promise<TipoTarifa> {
    const entity = await this.repo.findOne({
      where: { id_tipo_tarifa: id },
    });

    if (!entity) {
      throw new NotFoundException('Tipo de tarifa no encontrado');
    }

    return entity;
  }

  // UPDATE
  async update(id: number, dto: UpdateTipoTarifaDto): Promise<TipoTarifa> {
    const entity = await this.findOne(id);

    Object.assign(entity, dto);

    return await this.repo.save(entity);
  }

  // DELETE
  async remove(id: number): Promise<void> {
    const entity = await this.findOne(id);
    await this.repo.remove(entity);
  }
}
