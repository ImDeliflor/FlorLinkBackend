import { Module } from '@nestjs/common';
import { EvaluacionDesempenioController } from './evaluacion_desempenio.controller';
import { EvaluacionDesempenioService } from './evaluacion_desempenio.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EvaluacionDesempenio } from './evaluacion_desempenio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EvaluacionDesempenio])],
  controllers: [EvaluacionDesempenioController],
  providers: [EvaluacionDesempenioService],
})
export class EvaluacionDesempenioModule {}
