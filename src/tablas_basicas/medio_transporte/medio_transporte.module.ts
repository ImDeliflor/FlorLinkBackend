import { Module } from '@nestjs/common';
import { MedioTransporteService } from './medio_transporte.service';
import { MedioTransporteController } from './medio_transporte.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedioTransporte } from './entities/medio_transporte.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MedioTransporte])],
  controllers: [MedioTransporteController],
  providers: [MedioTransporteService],
})
export class MedioTransporteModule {}
