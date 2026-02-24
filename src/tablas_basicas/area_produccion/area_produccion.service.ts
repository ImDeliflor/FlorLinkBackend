import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AreaProduccion } from './entities/area_produccion.entity';
import { CreateAreaProduccionDto } from './dto/create-area_produccion.dto';
import { UpdateAreaProduccionDto } from './dto/update-area_produccion.dto';

@Injectable()
export class AreaProduccionService {
  constructor(
    @InjectRepository(AreaProduccion)
    private readonly repo: Repository<AreaProduccion>,
  ) {}

  async findAll(): Promise<AreaProduccion[]> {
    return this.repo.find({ order: { id_area_produccion: 'ASC' } });
  }

  async findOne(id: number): Promise<AreaProduccion> {
    const area = await this.repo.findOneBy({ id_area_produccion: id });

    if (!area) {
      throw new NotFoundException('Área de producción no encontrada');
    }

    return area;
  }

  async create(dto: CreateAreaProduccionDto): Promise<AreaProduccion> {
    const area = this.repo.create(dto);
    return this.repo.save(area);
  }

  async update(
    id: number,
    dto: UpdateAreaProduccionDto,
  ): Promise<AreaProduccion> {
    const area = await this.findOne(id);

    Object.assign(area, dto);
    return this.repo.save(area);
  }

  async remove(id: number): Promise<void> {
    const area = await this.findOne(id);
    await this.repo.remove(area);
  }
}
