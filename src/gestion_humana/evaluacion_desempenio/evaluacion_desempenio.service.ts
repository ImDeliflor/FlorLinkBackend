import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { EvaluacionDesempenio } from './evaluacion_desempenio.entity';
import { CreateEvaluacionDesempenioDto } from './dto/create-evaluacion-desempenio.dto';

@Injectable()
export class EvaluacionDesempenioService {
  constructor(
    @InjectRepository(EvaluacionDesempenio)
    private readonly evaluacionRepository: Repository<EvaluacionDesempenio>,
  ) {}

  async create(
    createDto: CreateEvaluacionDesempenioDto,
  ): Promise<EvaluacionDesempenio> {
    const nuevaEvaluacion = this.evaluacionRepository.create(createDto);
    return await this.evaluacionRepository.save(nuevaEvaluacion);
  }
}
