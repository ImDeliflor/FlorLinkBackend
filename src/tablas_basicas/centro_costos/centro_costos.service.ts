import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CentroCosto } from './entities/centro_costo.entity';
import { CreateCentroCostoDto } from './dto/create-centro_costo.dto';
import { UpdateCentroCostoDto } from './dto/update-centro_costo.dto';

@Injectable()
export class CentroCostosService {
  constructor(
    @InjectRepository(CentroCosto)
    private readonly centroCostoRepo: Repository<CentroCosto>,
  ) {}

  async create(dto: CreateCentroCostoDto): Promise<CentroCosto> {
    const nuevo = this.centroCostoRepo.create(dto);
    return this.centroCostoRepo.save(nuevo);
  }

  async findAll(): Promise<CentroCosto[]> {
    return this.centroCostoRepo.find({
      order: { id_centro_costos: 'ASC' },
    });
  }

  async findOne(id: number): Promise<CentroCosto> {
    const centro = await this.centroCostoRepo.findOne({
      where: { id_centro_costos: id },
    });
    if (!centro) {
      throw new NotFoundException(`Centro de costos ${id} no encontrado`);
    }
    return centro;
  }

  async update(id: number, dto: UpdateCentroCostoDto): Promise<CentroCosto> {
    const centro = await this.findOne(id);
    const actualizado = Object.assign(centro, dto);
    return this.centroCostoRepo.save(actualizado);
  }

  async remove(id: number): Promise<void> {
    const result = await this.centroCostoRepo.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(
        `Centro de costos con id ${id} no encontrado`,
      );
    }
  }
}
