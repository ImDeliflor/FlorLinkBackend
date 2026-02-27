// consumo-caldera.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConsumoCaldera } from './entities/consumo_caldera.entity';
import { CreateConsumoCalderaDto } from './dto/create-consumo_caldera.dto';
import { UpdateConsumoCalderaDto } from './dto/update-consumo_caldera.dto';

@Injectable()
export class ConsumoCalderaService {
  constructor(
    @InjectRepository(ConsumoCaldera)
    private readonly repo: Repository<ConsumoCaldera>,
  ) {}

  async findAll(): Promise<ConsumoCaldera[]> {
    return this.repo.find({ order: { id_consumo_caldera: 'DESC' } });
  }

  async findOne(id: number): Promise<ConsumoCaldera> {
    const data = await this.repo.findOneBy({ id_consumo_caldera: id });

    if (!data) {
      throw new NotFoundException('Consumo caldera no encontrado');
    }

    return data;
  }

  async create(dto: CreateConsumoCalderaDto): Promise<ConsumoCaldera> {
    const entity = this.repo.create(dto);
    return this.repo.save(entity);
  }

  async update(
    id: number,
    dto: UpdateConsumoCalderaDto,
  ): Promise<ConsumoCaldera> {
    const entity = await this.findOne(id);

    Object.assign(entity, dto);
    entity.fecha_modificacion = new Date();

    return this.repo.save(entity);
  }

  async remove(id: number): Promise<void> {
    const entity = await this.findOne(id);
    await this.repo.remove(entity);
  }
}
