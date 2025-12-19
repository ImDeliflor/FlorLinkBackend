import { Module } from '@nestjs/common';
import { ProductoAlmacenService } from './producto_almacen.service';
import { ProductoAlmacenController } from './producto_almacen.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductoAlmacen } from './entities/producto_almacen.entity';
import { ProductoAlmacenView } from './entities/producto_almacen_view.entity';
import { ProductoAlmacenViewService } from './producto_almacen_view.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProductoAlmacen, ProductoAlmacenView])],
  controllers: [ProductoAlmacenController],
  providers: [ProductoAlmacenService, ProductoAlmacenViewService],
})
export class ProductoAlmacenModule {}
