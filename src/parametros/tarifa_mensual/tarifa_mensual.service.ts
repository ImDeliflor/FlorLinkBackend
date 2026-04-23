import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TarifaMensual } from './entities/tarifa_mensual.entity';
import { CreateTarifaMensualDto } from './dto/create-tarifa_mensual.dto';
import { UpdateTarifaMensualDto } from './dto/update-tarifa_mensual.dto';

@Injectable()
export class TarifaMensualService {
  constructor(
    @InjectRepository(TarifaMensual)
    private readonly repo: Repository<TarifaMensual>,
  ) {}

  // CREATE
  async create(dto: CreateTarifaMensualDto): Promise<TarifaMensual> {
    const entity = this.repo.create(dto);
    return await this.repo.save(entity);
  }

  // READ ALL
  async findAll(): Promise<TarifaMensual[]> {
    return await this.repo.find();
  }

  // READ ONE
  async findOne(id: number): Promise<TarifaMensual> {
    const entity = await this.repo.findOne({
      where: { id_tarifa_mensual: id },
    });

    if (!entity) {
      throw new NotFoundException('Tarifa mensual no encontrada');
    }

    return entity;
  }

  // UPDATE
  async update(
    id: number,
    dto: UpdateTarifaMensualDto,
  ): Promise<TarifaMensual> {
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
