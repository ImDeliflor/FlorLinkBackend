import { Controller, Post, Body } from '@nestjs/common';
import { PreguntaEvaluacionService } from './pregunta_evaluacion.service';
import { CreatePreguntaDto } from './dto/create-pregunta-evaluacion.dto';
import { PreguntaEvaluacion } from './pregunta_evaluacion.entity';

@Controller('preguntas')
export class PreguntaEvaluacionController {
  constructor(private readonly service: PreguntaEvaluacionService) {}

  @Post()
  create(@Body() createDto: CreatePreguntaDto): Promise<PreguntaEvaluacion> {
    return this.service.create(createDto);
  }
}
