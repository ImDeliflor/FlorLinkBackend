import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmpleadoCentroCostos } from './entities/empleado_centro_costo.entity';
import { CreateEmpleadoCentroCostosDto } from './dto/create-empleado_centro_costo.dto';
import { UpdateEmpleadoCentroCostosDto } from './dto/update-empleado_centro_costo.dto';

@Injectable()
export class EmpleadoCentroCostosService {
  constructor(
    @InjectRepository(EmpleadoCentroCostos)
    private readonly repository: Repository<EmpleadoCentroCostos>,
  ) {}

  async create(dto: CreateEmpleadoCentroCostosDto) {
    const data = this.repository.create(dto);
    return await this.repository.save(data);
  }

  async findAll() {
    return await this.repository.find();
  }

  async findOne(id_empleado: number, id_centro_costos: number) {
    const data = await this.repository.findOne({
      where: { id_empleado, id_centro_costos },
    });

    if (!data) {
      throw new NotFoundException('Relación no encontrada');
    }

    return data;
  }

  async update(
    id_empleado: number,
    id_centro_costos: number,
    dto: UpdateEmpleadoCentroCostosDto,
  ) {
    const data = await this.findOne(id_empleado, id_centro_costos);

    Object.assign(data, dto);

    return await this.repository.save(data);
  }

  async remove(id_empleado: number, id_centro_costos: number) {
    const result = await this.repository.delete({
      id_empleado,
      id_centro_costos,
    });

    if (result.affected === 0) {
      throw new NotFoundException('Relación no encontrada');
    }
  }
}
