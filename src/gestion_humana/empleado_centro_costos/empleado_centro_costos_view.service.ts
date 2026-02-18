import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmpleadoCentroCostoView } from './entities/empleado_centro_costo_view.entity';

@Injectable()
export class EmpleadoCentroCostosViewService {
  constructor(
    @InjectRepository(EmpleadoCentroCostoView)
    private readonly repository: Repository<EmpleadoCentroCostoView>,
  ) {}

  async findAll() {
    return await this.repository.find();
  }

  async findByEmpleado(id_empleado: number) {
    const data = await this.repository.find({
      where: { id_empleado },
    });

    if (!data) {
      throw new NotFoundException('Centro de costos no encontrado');
    }

    return data;
  }
}
