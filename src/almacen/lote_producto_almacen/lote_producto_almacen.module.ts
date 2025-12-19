import { Module } from '@nestjs/common';
import { LoteProductoAlmacenService } from './lote_producto_almacen.service';
import { LoteProductoAlmacenController } from './lote_producto_almacen.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoteProductoAlmacen } from './entities/lote_producto_almacen.entity';
import { LoteProductoAlmacenView } from './entities/lote_producto_almacen_view.entity';
import { LoteProductoAlmacenViewService } from './lote_producto_almacen_view.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([LoteProductoAlmacen, LoteProductoAlmacenView]),
  ],
  controllers: [LoteProductoAlmacenController],
  providers: [LoteProductoAlmacenService, LoteProductoAlmacenViewService],
})
export class LoteProductoAlmacenModule {}
