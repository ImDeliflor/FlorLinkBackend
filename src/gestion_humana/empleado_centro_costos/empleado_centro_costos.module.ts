import { Module } from '@nestjs/common';
import { EmpleadoCentroCostosService } from './empleado_centro_costos.service';
import { EmpleadoCentroCostosController } from './empleado_centro_costos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpleadoCentroCostos } from './entities/empleado_centro_costo.entity';
import { EmpleadoCentroCostoView } from './entities/empleado_centro_costo_view.entity';
import { EmpleadoCentroCostosViewService } from './empleado_centro_costos_view.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([EmpleadoCentroCostos, EmpleadoCentroCostoView]),
  ],
  controllers: [EmpleadoCentroCostosController],
  providers: [EmpleadoCentroCostosService, EmpleadoCentroCostosViewService],
})
export class EmpleadoCentroCostosModule {}
