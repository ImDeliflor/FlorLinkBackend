import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PreguntaEvaluacion } from './pregunta_evaluacion.entity';
import { CreatePreguntaDto } from './dto/create-pregunta-evaluacion.dto';

@Injectable()
export class PreguntaEvaluacionService {
  constructor(
    @InjectRepository(PreguntaEvaluacion)
    private readonly preguntaRepo: Repository<PreguntaEvaluacion>,
  ) {}

  async create(createDto: CreatePreguntaDto): Promise<PreguntaEvaluacion> {
    const nuevaPregunta = this.preguntaRepo.create(createDto);
    return await this.preguntaRepo.save(nuevaPregunta);
  }
}
