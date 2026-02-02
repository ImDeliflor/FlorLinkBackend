import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { CompromisoEmpleado } from './entities/compromisos_empleado.entity';
import { CreateCompromisoEmpleadoDto } from './dto/create-compromisos_empleado.dto';
import { UpdateCompromisosEmpleadoDto } from './dto/update-compromisos_empleado.dto';

@Injectable()
export class CompromisoEmpleadoService {
  constructor(
    @InjectRepository(CompromisoEmpleado)
    private readonly compromisoRepo: Repository<CompromisoEmpleado>,
    private readonly dataSource: DataSource,
  ) {}

  // CREATE
  async create(dto: CreateCompromisoEmpleadoDto): Promise<CompromisoEmpleado> {
    const compromiso = this.compromisoRepo.create(dto);
    return this.compromisoRepo.save(compromiso);
  }

  // READ ALL
  async findAll(): Promise<CompromisoEmpleado[]> {
    return this.compromisoRepo.find();
  }

  // READ ONE
  async findOne(id: number): Promise<CompromisoEmpleado> {
    const compromiso = await this.compromisoRepo.findOne({
      where: { id_compromiso: id },
    });

    if (!compromiso) {
      throw new NotFoundException(`Compromiso con id ${id} no encontrado`);
    }

    return compromiso;
  }

  // UPDATE
  async update(
    id: number,
    dto: UpdateCompromisosEmpleadoDto,
  ): Promise<CompromisoEmpleado> {
    const compromiso = await this.findOne(id);
    Object.assign(compromiso, dto);
    return this.compromisoRepo.save(compromiso);
  }

  // DELETE
  async remove(id: number): Promise<void> {
    const compromiso = await this.findOne(id);
    await this.compromisoRepo.remove(compromiso);
  }

  // EXTRA: compromisos por empleado
  async findByEmpleado(id_empleado: number): Promise<CompromisoEmpleado[]> {
    return this.compromisoRepo.find({
      where: { id_empleado: id_empleado },
    });
  }

  // PROCESOS TRANSACCIONALES
  // Función para procesar la creación de los compromisos
  async processEvaluacion(dto: CreateCompromisoEmpleadoDto[]) {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      // Guardar todos los compromisos
      await queryRunner.manager.save(
        dto.map((c) =>
          queryRunner.manager.create(CompromisoEmpleado, {
            ...c,
          }),
        ),
      );

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
