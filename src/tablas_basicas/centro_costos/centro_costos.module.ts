import { Module } from '@nestjs/common';
import { CentroCostosService } from './centro_costos.service';
import { CentroCostosController } from './centro_costos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CentroCosto } from './entities/centro_costo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CentroCosto])],
  controllers: [CentroCostosController],
  providers: [CentroCostosService],
})
export class CentroCostosModule {}
