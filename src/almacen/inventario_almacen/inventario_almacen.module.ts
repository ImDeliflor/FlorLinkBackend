import { Module } from '@nestjs/common';
import { InventarioAlmacenService } from './inventario_almacen.service';
import { InventarioAlmacenController } from './inventario_almacen.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventarioAlmacen } from './entities/inventario_almacen.entity';
import { InventarioAlmacenView } from './entities/inventario_almacen_view.entity';
import { InventarioAlmacenViewService } from './inventario_almacen_view.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([InventarioAlmacen, InventarioAlmacenView]),
  ],
  controllers: [InventarioAlmacenController],
  providers: [InventarioAlmacenService, InventarioAlmacenViewService],
})
export class InventarioAlmacenModule {}
