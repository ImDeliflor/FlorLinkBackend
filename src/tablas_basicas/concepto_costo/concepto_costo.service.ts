import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConceptoCosto } from './entities/concepto_costo.entity';
import { CreateConceptoCostoDto } from './dto/create-concepto_costo.dto';
import { UpdateConceptoCostoDto } from './dto/update-concepto_costo.dto';

@Injectable()
export class ConceptoCostoService {
  constructor(
    @InjectRepository(ConceptoCosto)
    private readonly repo: Repository<ConceptoCosto>,
  ) {}

  // CREATE
  async create(dto: CreateConceptoCostoDto): Promise<ConceptoCosto> {
    const entity = this.repo.create(dto);
    return await this.repo.save(entity);
  }

  // READ ALL
  async findAll(): Promise<ConceptoCosto[]> {
    return await this.repo.find();
  }

  // READ ONE
  async findOne(id: number): Promise<ConceptoCosto> {
    const entity = await this.repo.findOne({
      where: { id_concepto_costo: id },
    });

    if (!entity) {
      throw new NotFoundException('Concepto de costo no encontrado');
    }

    return entity;
  }

  // UPDATE
  async update(
    id: number,
    dto: UpdateConceptoCostoDto,
  ): Promise<ConceptoCosto> {
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
