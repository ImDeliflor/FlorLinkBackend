import { Module } from '@nestjs/common';
import { AreaProduccionService } from './area_produccion.service';
import { AreaProduccionController } from './area_produccion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AreaProduccion } from './entities/area_produccion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AreaProduccion])],
  controllers: [AreaProduccionController],
  providers: [AreaProduccionService],
})
export class AreaProduccionModule {}
