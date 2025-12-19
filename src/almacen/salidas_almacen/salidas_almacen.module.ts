import { Module } from '@nestjs/common';
import { SalidasAlmacenService } from './salidas_almacen.service';
import { SalidasAlmacenController } from './salidas_almacen.controller';
import { SalidasAlmacen } from './entities/salidas_almacen.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalidasAlmacenView } from './entities/salidas_almacen_view.entity';
import { SalidasAlmacenViewService } from './salidas_almacen_view.service';

@Module({
  imports: [TypeOrmModule.forFeature([SalidasAlmacen, SalidasAlmacenView])],
  controllers: [SalidasAlmacenController],
  providers: [SalidasAlmacenService, SalidasAlmacenViewService],
})
export class SalidasAlmacenModule {}
