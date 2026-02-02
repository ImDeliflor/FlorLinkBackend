import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';

import { EvaluacionDesempenio } from './evaluacion_desempenio.entity';
import { CreateEvaluacionDesempenioDto } from './dto/create-evaluacion-desempenio.dto';
import { UpdateEvaluacionDesempenioDto } from './dto/update-evaluacion-desempenio.dto';
import { ProcesarEvaluacionDto } from './dto/procesar-evaluacion.dto';
import { PreguntaEvaluacion } from '../pregunta_evaluacion/pregunta_evaluacion.entity';

@Injectable()
export class EvaluacionDesempenioService {
  constructor(
    @InjectRepository(EvaluacionDesempenio)
    private readonly evaluacionRepository: Repository<EvaluacionDesempenio>,
    private readonly dataSource: DataSource,
  ) {}

  // CREATE
  async create(
    createDto: CreateEvaluacionDesempenioDto,
  ): Promise<EvaluacionDesempenio> {
    const nuevaEvaluacion = this.evaluacionRepository.create(createDto);
    return this.evaluacionRepository.save(nuevaEvaluacion);
  }

  // READ - ALL
  async findAll(): Promise<EvaluacionDesempenio[]> {
    return this.evaluacionRepository.find();
  }

  // READ - ONE
  async findOne(id: number): Promise<EvaluacionDesempenio> {
    const evaluacion = await this.evaluacionRepository.findOne({
      where: { id_evaluacion_desempenio: id },
    });

    if (!evaluacion) {
      throw new NotFoundException(
        `Evaluación de desempeño con id ${id} no encontrada`,
      );
    }

    return evaluacion;
  }

  // UPDATE
  async update(
    id: number,
    updateDto: UpdateEvaluacionDesempenioDto,
  ): Promise<EvaluacionDesempenio> {
    const evaluacion = await this.findOne(id);

    Object.assign(evaluacion, updateDto);

    return this.evaluacionRepository.save(evaluacion);
  }

  // DELETE
  async remove(id: number): Promise<void> {
    const evaluacion = await this.findOne(id);
    await this.evaluacionRepository.remove(evaluacion);
  }

  // PROCESOS TRANSACCIONALES
  // Función para procesar la creación de evaluaciones (evaluación, preguntas y compromisos)
  async processEvaluacion(dto: ProcesarEvaluacionDto) {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      // Crear la evaluación de desempeño
      const evaluacion_desempenio = queryRunner.manager.create(
        EvaluacionDesempenio,
        {
          id_grupo_evaluacion: dto.id_grupo_evaluacion,
          id_evaluador: dto.id_evaluador,
          id_evaluado: dto.id_evaluado,
          id_enfoque_evaluacion: dto.id_enfoque_evaluacion,
          observaciones: dto.observaciones,
        },
      );

      // Guardar la evaluación de desempeño
      const evaluacion = await queryRunner.manager.save(evaluacion_desempenio);

      // Sacar el id de la evaluación creada
      const id_evaluacion = evaluacion.id_evaluacion_desempenio;

      // Usar el id para las preguntas
      await queryRunner.manager.save(
        dto.preguntas.map((p) =>
          queryRunner.manager.create(PreguntaEvaluacion, {
            ...p,
            id_evaluacion_desempeno: id_evaluacion,
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
