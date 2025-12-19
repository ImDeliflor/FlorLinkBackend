import { Module } from '@nestjs/common';
import { EntradasPendientesAlmacenService } from './entradas_pendientes_almacen.service';
import { EntradasPendientesAlmacenController } from './entradas_pendientes_almacen.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntradasPendientesAlmacen } from './entities/entradas_pendientes_almacen.entity';
import { EntradasPendientesAlmacenView } from './entities/entradas_pendientes_almacen_view.entity';
import { EntradasPendientesAlmacenViewService } from './entradas_pendientes_almacen_view.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      EntradasPendientesAlmacen,
      EntradasPendientesAlmacenView,
    ]),
  ],
  controllers: [EntradasPendientesAlmacenController],
  providers: [
    EntradasPendientesAlmacenService,
    EntradasPendientesAlmacenViewService,
  ],
})
export class EntradasPendientesAlmacenModule {}
