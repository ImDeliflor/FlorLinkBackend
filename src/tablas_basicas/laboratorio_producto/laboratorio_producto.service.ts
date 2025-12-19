import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LaboratorioProducto } from './entities/laboratorio_producto.entity';
import { CreateLaboratorioProductoDto } from './dto/create-laboratorio_producto.dto';
import { UpdateLaboratorioProductoDto } from './dto/update-laboratorio_producto.dto';

@Injectable()
export class LaboratorioProductoService {
  constructor(
    @InjectRepository(LaboratorioProducto)
    private readonly laboratorioRepository: Repository<LaboratorioProducto>,
  ) {}

  async findAll(): Promise<LaboratorioProducto[]> {
    return this.laboratorioRepository.find();
  }

  async findOne(id: number): Promise<LaboratorioProducto> {
    const lab = await this.laboratorioRepository.findOne({
      where: { id_laboratorio: id },
    });

    if (!lab) {
      throw new NotFoundException(`Laboratorio con id ${id} no encontrado`);
    }

    return lab;
  }

  async create(
    dto: CreateLaboratorioProductoDto,
  ): Promise<LaboratorioProducto> {
    const newLab = this.laboratorioRepository.create(dto);
    return this.laboratorioRepository.save(newLab);
  }

  async update(
    id: number,
    dto: UpdateLaboratorioProductoDto,
  ): Promise<LaboratorioProducto> {
    const lab = await this.findOne(id);

    const updated = Object.assign(lab, dto);
    return this.laboratorioRepository.save(updated);
  }

  async remove(id: number): Promise<void> {
    const result = await this.laboratorioRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Laboratorio con id ${id} no encontrado`);
    }
  }
}
