import { Module } from '@nestjs/common';
import { PreguntaEvaluacionController } from './pregunta_evaluacion.controller';
import { PreguntaEvaluacionService } from './pregunta_evaluacion.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PreguntaEvaluacion } from './pregunta_evaluacion.entity';
import { EvaluacionesDesempenioReport } from './pregunta_evaluacion_view.entity';
import { EvaluacionesDesempenioServiceView } from './pregunta_evaluacion_view.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      PreguntaEvaluacion,
      EvaluacionesDesempenioReport,
    ]),
  ],
  controllers: [PreguntaEvaluacionController],
  providers: [PreguntaEvaluacionService, EvaluacionesDesempenioServiceView],
})
export class PreguntaEvaluacionModule {}
