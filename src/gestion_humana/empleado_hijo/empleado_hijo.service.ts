import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmpleadoHijo } from './entities/empleado_hijo.entity';
import { CreateEmpleadoHijoDto } from './dto/create-empleado_hijo.dto';
import { UpdateEmpleadoHijoDto } from './dto/update-empleado_hijo.dto';

@Injectable()
export class EmpleadoHijoService {
  constructor(
    @InjectRepository(EmpleadoHijo)
    private readonly empleado_hijo_repository: Repository<EmpleadoHijo>,
  ) {}

  async create(create_dto: CreateEmpleadoHijoDto): Promise<EmpleadoHijo> {
    const empleado_hijo = this.empleado_hijo_repository.create(create_dto);
    return await this.empleado_hijo_repository.save(empleado_hijo);
  }

  async findAll(): Promise<EmpleadoHijo[]> {
    return await this.empleado_hijo_repository.find();
  }

  async findOne(id: number): Promise<EmpleadoHijo> {
    const empleado_hijo = await this.empleado_hijo_repository.findOne({
      where: { id_empleado_hijo: id },
    });

    if (!empleado_hijo) {
      throw new NotFoundException(`empleado_hijo con id ${id} no encontrado`);
    }

    return empleado_hijo;
  }

  async update(
    id: number,
    update_dto: UpdateEmpleadoHijoDto,
  ): Promise<EmpleadoHijo> {
    const empleado_hijo = await this.findOne(id);

    Object.assign(empleado_hijo, update_dto);

    return await this.empleado_hijo_repository.save(empleado_hijo);
  }

  async remove(id: number): Promise<void> {
    const result = await this.empleado_hijo_repository.delete({
      id_empleado_hijo: id,
    });

    if (result.affected === 0) {
      throw new NotFoundException(`empleado_hijo con id ${id} no encontrado`);
    }
  }
}
