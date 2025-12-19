import { Module } from '@nestjs/common';
import { EntradasAlmacenService } from './entradas_almacen.service';
import { EntradasAlmacenController } from './entradas_almacen.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntradasAlmacen } from './entities/entradas_almacen.entity';
import { EntradasAlmacenView } from './entities/entradas_almacen_view.entity';
import { EntradasAlmacenViewService } from './entradas_almacen_view.service';

@Module({
  imports: [TypeOrmModule.forFeature([EntradasAlmacen, EntradasAlmacenView])],
  controllers: [EntradasAlmacenController],
  providers: [EntradasAlmacenService, EntradasAlmacenViewService],
})
export class EntradasAlmacenModule {}
