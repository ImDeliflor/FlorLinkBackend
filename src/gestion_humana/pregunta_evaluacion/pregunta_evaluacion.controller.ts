import { Controller, Post, Body } from '@nestjs/common';
import { PreguntaEvaluacionService } from './pregunta_evaluacion.service';
import { CreatePreguntaDto } from './dto/create-pregunta-evaluacion.dto';
import { PreguntaEvaluacion } from './pregunta_evaluacion.entity';
import { Role } from 'src/common/enums/rol.enum';
import { Auth } from 'src/auth/decorators/auth.decorator';

@Auth(Role.Admin, Role.AdminGH)
@Controller('preguntas')
export class PreguntaEvaluacionController {
  constructor(private readonly service: PreguntaEvaluacionService) {}

  @Post()
  create(@Body() createDto: CreatePreguntaDto): Promise<PreguntaEvaluacion> {
    return this.service.create(createDto);
  }
}
