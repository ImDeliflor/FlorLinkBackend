import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Empleado } from './empleado.entity';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';

@Injectable()
export class EmpleadoService {
  constructor(
    @InjectRepository(Empleado)
    private readonly empleadoRepository: Repository<Empleado>,
  ) {}

  // Obtener todos los empleados
  findAll(): Promise<Empleado[]> {
    return this.empleadoRepository.find({ order: { nombre: 'ASC' } });
  }

  // Guardar un empleado
  create(dto: CreateEmpleadoDto) {
    const empleado = this.empleadoRepository.create(dto);
    return this.empleadoRepository.save(empleado);
  }

  // Modificar un empleado
  async update(id: number, dto: UpdateEmpleadoDto): Promise<Empleado> {
    const empleado = await this.empleadoRepository.findOne({
      where: { id_empleado: id },
    });

    if (!empleado) {
      throw new NotFoundException(`Empleado con id ${id} no encontrado`);
    }

    Object.assign(empleado, dto);

    return this.empleadoRepository.save(empleado);
  }

  // Borrar un empleado (físicamente)
  async remove(id: number): Promise<{ message: string }> {
    const empleado = await this.empleadoRepository.findOne({
      where: { id_empleado: id },
    });

    if (!empleado) {
      throw new NotFoundException(`Empleado con id ${id} no encontrado`);
    }

    await this.empleadoRepository.remove(empleado);

    return {
      message: 'Empleado eliminado correctamente',
    };
  }

  // Retirar un empleado
  async takeOutEmployee(id: number) {
    const empleado = await this.empleadoRepository.findOne({
      where: { id_empleado: id },
    });

    if (!empleado) {
      throw new NotFoundException(`Empleado con id ${id} no encontrado`);
    }

    empleado.estado_empleado = 'Retirado';

    await this.empleadoRepository.save(empleado);

    return {
      message: 'Empleado retirado correctamente',
    };
  }

  // Obtener un empleado por ID
  findOne(id: number): Promise<Empleado | null> {
    return this.empleadoRepository.findOne({ where: { id_empleado: id } });
  }
}
