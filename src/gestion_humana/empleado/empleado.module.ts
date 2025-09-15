import { Module } from '@nestjs/common';
import { EmpleadoController } from './empleado.controller';
import { EmpleadoService } from './empleado.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpleadoView } from './views/empleado_view.entity';
import { EmpleadoViewService } from './views/empleado_view.service';
import { Empleado } from './empleado.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EmpleadoView, Empleado])],
  controllers: [EmpleadoController],
  providers: [EmpleadoService, EmpleadoViewService],
})
export class EmpleadoModule {}
