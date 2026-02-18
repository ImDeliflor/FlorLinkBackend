import { Module } from '@nestjs/common';
import { EmpleadoHijoService } from './empleado_hijo.service';
import { EmpleadoHijoController } from './empleado_hijo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpleadoHijo } from './entities/empleado_hijo.entity';
import { EmpleadoHijoView } from './entities/empleado_hijo_view.entity';
import { EmpleadoHijoServiceView } from './empleado_hijo_view.service';

@Module({
  imports: [TypeOrmModule.forFeature([EmpleadoHijo, EmpleadoHijoView])],
  controllers: [EmpleadoHijoController],
  providers: [EmpleadoHijoService, EmpleadoHijoServiceView],
})
export class EmpleadoHijoModule {}
