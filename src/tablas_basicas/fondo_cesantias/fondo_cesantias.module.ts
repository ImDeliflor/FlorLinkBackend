import { Module } from '@nestjs/common';
import { FondoCesantiasService } from './fondo_cesantias.service';
import { FondoCesantiasController } from './fondo_cesantias.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FondoCesantias } from './entities/fondo_cesantia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FondoCesantias])],
  controllers: [FondoCesantiasController],
  providers: [FondoCesantiasService],
})
export class FondoCesantiasModule {}
