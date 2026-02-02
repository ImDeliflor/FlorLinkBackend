import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete,
  ParseIntPipe,
  Put,
} from '@nestjs/common';

import { PreguntaEvaluacionService } from './pregunta_evaluacion.service';
import { CreatePreguntaDto } from './dto/create-pregunta-evaluacion.dto';
import { UpdatePreguntaDto } from './dto/update-pregunta-evaluacion.dto';
import { PreguntaEvaluacion } from './pregunta_evaluacion.entity';
import { Role } from 'src/common/enums/rol.enum';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { EvaluacionesDesempenioServiceView } from './pregunta_evaluacion_view.service';
import { EvaluacionesDesempenioReport } from './pregunta_evaluacion_view.entity';

@Auth(Role.Admin, Role.AdminGH)
@Controller('preguntas')
export class PreguntaEvaluacionController {
  constructor(
    private readonly service: PreguntaEvaluacionService,
    private readonly serviceView: EvaluacionesDesempenioServiceView,
  ) {}

  // CREATE
  @Post()
  create(@Body() createDto: CreatePreguntaDto): Promise<PreguntaEvaluacion> {
    return this.service.create(createDto);
  }

  // READ ALL
  @Get()
  findAll(): Promise<PreguntaEvaluacion[]> {
    return this.service.findAll();
  }

  // CONSULTAS DE LA VISTA DE LAS EVALUACIONES DE DESEMPEÑO
  // READ ALL - Vista de las evaluaciones
  @Get('/report')
  findAllReport(): Promise<EvaluacionesDesempenioReport[]> {
    return this.serviceView.findAll();
  }

  // Filtrar por evaluador
  @Get('/report/by-evaluator/:id_evaluador')
  findByEvaluador(
    @Param('id_evaluador', ParseIntPipe) id_evaluador: number,
  ): Promise<EvaluacionesDesempenioReport[]> {
    return this.serviceView.findByEvaluador(id_evaluador);
  }

  // Filtrar por evaluado
  @Get('/report/by-evaluated/:id_evaluado')
  findByEvaluado(
    @Param('id_evaluado', ParseIntPipe) id_evaluado: number,
  ): Promise<EvaluacionesDesempenioReport[]> {
    return this.serviceView.findByEvaluador(id_evaluado);
  }

  // READ ONE
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<PreguntaEvaluacion> {
    return this.service.findOne(id);
  }

  // UPDATE
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdatePreguntaDto,
  ): Promise<PreguntaEvaluacion> {
    return this.service.update(id, updateDto);
  }

  // DELETE
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.service.remove(id);
  }
}
