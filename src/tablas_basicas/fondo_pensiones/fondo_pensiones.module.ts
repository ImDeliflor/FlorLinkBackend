import { Module } from '@nestjs/common';
import { FondoPensionesService } from './fondo_pensiones.service';
import { FondoPensionesController } from './fondo_pensiones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FondoPensiones } from './entities/fondo_pensiones.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FondoPensiones])],
  controllers: [FondoPensionesController],
  providers: [FondoPensionesService],
})
export class FondoPensionesModule {}
