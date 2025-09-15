import { Module } from '@nestjs/common';
import { PreguntaEvaluacionController } from './pregunta_evaluacion.controller';
import { PreguntaEvaluacionService } from './pregunta_evaluacion.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PreguntaEvaluacion } from './pregunta_evaluacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PreguntaEvaluacion])],
  controllers: [PreguntaEvaluacionController],
  providers: [PreguntaEvaluacionService],
})
export class PreguntaEvaluacionModule {}
