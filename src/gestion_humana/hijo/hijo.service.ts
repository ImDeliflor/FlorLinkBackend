import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Hijo } from './entities/hijo.entity';
import { CreateHijoDto } from './dto/create-hijo.dto';
import { UpdateHijoDto } from './dto/update-hijo.dto';
import { EmpleadoHijo } from '../empleado_hijo/entities/empleado_hijo.entity';
import { ProcessHijoDto } from './dto/process-hijo.dto';

@Injectable()
export class HijoService {
  constructor(
    @InjectRepository(Hijo)
    private readonly hijo_repository: Repository<Hijo>,
    private readonly dataSource: DataSource,
  ) {}

  async create(create_dto: CreateHijoDto): Promise<Hijo> {
    const hijo = this.hijo_repository.create(create_dto);
    return await this.hijo_repository.save(hijo);
  }

  async findAll(): Promise<Hijo[]> {
    return await this.hijo_repository.find();
  }

  async findOne(id: number): Promise<Hijo> {
    const hijo = await this.hijo_repository.findOne({
      where: { id_hijo: id },
    });

    if (!hijo) {
      throw new NotFoundException(`hijo con id ${id} no encontrado`);
    }

    return hijo;
  }

  async update(id: number, update_dto: UpdateHijoDto): Promise<Hijo> {
    const hijo = await this.findOne(id);

    Object.assign(hijo, update_dto);

    return await this.hijo_repository.save(hijo);
  }

  async remove(id: number): Promise<void> {
    const result = await this.hijo_repository.delete({
      id_hijo: id,
    });

    if (result.affected === 0) {
      throw new NotFoundException(`hijo con id ${id} no encontrado`);
    }
  }

  // PROCESOS TRANSACCIONALES
  async processHijo(dto: ProcessHijoDto) {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      // Crear el hijo
      const hijo = queryRunner.manager.create(Hijo, {
        nombre_hijo: dto.nombre_hijo,
        fecha_nacimiento: dto.fecha_nacimiento,
      });

      // Guardar los datos del nuevo hijo
      const new_hijo = await queryRunner.manager.save(hijo);

      // Sacar el id del nuevo hijo
      const id_new_hijo = new_hijo.id_hijo;

      // Asignar el hijo al pariente
      // Crear el registro
      const assign_hijo = queryRunner.manager.create(EmpleadoHijo, {
        id_empleado: dto.id_empleado,
        id_hijo: id_new_hijo,
        id_rol_familiar: dto.rol_familiar,
      });

      // Guardar los datos del nuevo hijo
      await queryRunner.manager.save(assign_hijo);

      // Commit de toda la transaccion
      await queryRunner.commitTransaction();

      return {
        success: true,
        message: '¡Proceso completado exitosamente!',
      };
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }
}
