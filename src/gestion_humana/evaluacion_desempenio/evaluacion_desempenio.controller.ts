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

import { CreateEvaluacionDesempenioDto } from './dto/create-evaluacion-desempenio.dto';
import { UpdateEvaluacionDesempenioDto } from './dto/update-evaluacion-desempenio.dto';
import { EvaluacionDesempenioService } from './evaluacion_desempenio.service';
import { EvaluacionDesempenio } from './evaluacion_desempenio.entity';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/common/enums/rol.enum';
import { ProcesarEvaluacionDto } from './dto/procesar-evaluacion.dto';

@Auth(Role.Admin, Role.AdminGH, Role.UsuarioEvalDesempenio)
@Controller('evaluacion-desempenio')
export class EvaluacionDesempenioController {
  constructor(private readonly service: EvaluacionDesempenioService) {}

  // CREATE
  @Post()
  create(
    @Body() createDto: CreateEvaluacionDesempenioDto,
  ): Promise<EvaluacionDesempenio> {
    return this.service.create(createDto);
  }

  // READ ALL
  @Get()
  findAll(): Promise<EvaluacionDesempenio[]> {
    return this.service.findAll();
  }

  // Procesar evaluación de desempeño (Proceso transaccional)
  @Post('/procesar')
  processEvaluacion(@Body() dto: ProcesarEvaluacionDto) {
    return this.service.processEvaluacion(dto);
  }

  // READ ONE
  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<EvaluacionDesempenio> {
    return this.service.findOne(id);
  }

  // UPDATE
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdateEvaluacionDesempenioDto,
  ): Promise<EvaluacionDesempenio> {
    return this.service.update(id, updateDto);
  }

  // DELETE
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.service.remove(id);
  }
}
