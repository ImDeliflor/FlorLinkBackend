import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { PreguntaEvaluacion } from './pregunta_evaluacion.entity';
import { CreatePreguntaDto } from './dto/create-pregunta-evaluacion.dto';
import { UpdatePreguntaDto } from './dto/update-pregunta-evaluacion.dto';
@Injectable()
export class PreguntaEvaluacionService {
  constructor(
    @InjectRepository(PreguntaEvaluacion)
    private readonly preguntaRepo: Repository<PreguntaEvaluacion>,
  ) {}

  // CREATE
  async create(createDto: CreatePreguntaDto): Promise<PreguntaEvaluacion> {
    const nuevaPregunta = this.preguntaRepo.create(createDto);
    return this.preguntaRepo.save(nuevaPregunta);
  }

  // READ - ALL
  async findAll(): Promise<PreguntaEvaluacion[]> {
    return this.preguntaRepo.find();
  }

  // READ - ONE
  async findOne(id: number): Promise<PreguntaEvaluacion> {
    const pregunta = await this.preguntaRepo.findOne({
      where: { id_pregunta: id },
    });

    if (!pregunta) {
      throw new NotFoundException(`Pregunta con id ${id} no encontrada`);
    }

    return pregunta;
  }

  // UPDATE
  async update(
    id: number,
    updateDto: UpdatePreguntaDto,
  ): Promise<PreguntaEvaluacion> {
    const pregunta = await this.findOne(id);

    Object.assign(pregunta, updateDto);

    return this.preguntaRepo.save(pregunta);
  }

  // DELETE
  async remove(id: number): Promise<void> {
    const pregunta = await this.findOne(id);
    await this.preguntaRepo.remove(pregunta);
  }
}
