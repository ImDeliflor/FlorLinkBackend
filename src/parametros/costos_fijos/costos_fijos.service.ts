import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CostosFijos } from './entities/costos_fijo.entity';
import { CreateCostosFijosDto } from './dto/create-costos_fijo.dto';
import { UpdateCostosFijosDto } from './dto/update-costos_fijo.dto';

@Injectable()
export class CostosFijosService {
  constructor(
    @InjectRepository(CostosFijos)
    private readonly repo: Repository<CostosFijos>,
  ) {}

  // CREATE
  async create(dto: CreateCostosFijosDto): Promise<CostosFijos> {
    const entity = this.repo.create(dto);
    return await this.repo.save(entity);
  }

  // READ ALL
  async findAll(): Promise<CostosFijos[]> {
    return await this.repo.find();
  }

  // READ ONE
  async findOne(id: number): Promise<CostosFijos> {
    const entity = await this.repo.findOne({
      where: { id_costo: id },
    });

    if (!entity) {
      throw new NotFoundException('Costo fijo no encontrado');
    }

    return entity;
  }

  // UPDATE
  async update(id: number, dto: UpdateCostosFijosDto): Promise<CostosFijos> {
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
