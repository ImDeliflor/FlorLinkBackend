import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { EmpleadoViewService } from './views/empleado_view.service';
import { EmpleadoView } from './views/empleado_view.entity';
import { Empleado } from './empleado.entity';
import { EmpleadoService } from './empleado.service';

@Controller('empleado')
export class EmpleadoController {
  constructor(
    private readonly empleadoService: EmpleadoViewService,
    private empleadoService1: EmpleadoService,
  ) {}

  @Get('empleado-view/:celular')
  async getByCelular(
    @Param('celular') celular: string,
  ): Promise<EmpleadoView | null> {
    return await this.empleadoService.findByCelular(celular);
  }

  @Get()
  findAll(): Promise<Empleado[]> {
    return this.empleadoService1.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Empleado | null> {
    return this.empleadoService1.findOne(id);
  }
}
