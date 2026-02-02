import { Module } from '@nestjs/common';
import { CompromisoEmpleadoController } from './compromisos_empleado.controller';
import { CompromisoEmpleadoService } from './compromisos_empleado.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompromisoEmpleado } from './entities/compromisos_empleado.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CompromisoEmpleado])],
  controllers: [CompromisoEmpleadoController],
  providers: [CompromisoEmpleadoService],
})
export class CompromisosEmpleadoModule {}
