import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmpleadoHijoView } from './entities/empleado_hijo_view.entity';

@Injectable()
export class EmpleadoHijoServiceView {
  constructor(
    @InjectRepository(EmpleadoHijoView)
    private readonly view: Repository<EmpleadoHijoView>,
  ) {}

  async findAll(): Promise<EmpleadoHijoView[]> {
    return await this.view.find();
  }

  async findHijos(id_empleado: number): Promise<EmpleadoHijoView[]> {
    const empleado_hijo = await this.view.find({
      where: { id_empleado: id_empleado },
    });

    if (!empleado_hijo) {
      throw new NotFoundException(
        `empleado_hijo con id ${id_empleado} no encontrado`,
      );
    }

    return empleado_hijo;
  }
}
