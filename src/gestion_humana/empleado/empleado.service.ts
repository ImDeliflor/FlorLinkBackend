import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Empleado } from './empleado.entity';

@Injectable()
export class EmpleadoService {
  constructor(
    @InjectRepository(Empleado)
    private readonly empleadoRepository: Repository<Empleado>,
  ) {}

  // Obtener todos los empleados
  findAll(): Promise<Empleado[]> {
    return this.empleadoRepository.find();
  }

  // Obtener un empleado por ID
  findOne(id: number): Promise<Empleado | null> {
    return this.empleadoRepository.findOne({ where: { id_empleado: id } });
  }
}
