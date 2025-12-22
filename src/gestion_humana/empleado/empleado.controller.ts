import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { EmpleadoViewService } from './views/empleado_view.service';
import { EmpleadoView } from './views/empleado_view.entity';
import { Empleado } from './empleado.entity';
import { EmpleadoService } from './empleado.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/common/enums/rol.enum';

@Controller('empleado')
export class EmpleadoController {
  constructor(
    private readonly empleadoService: EmpleadoViewService,
    private readonly empleadoService1: EmpleadoService,
  ) {}

  // Rutas estáticas
  @Auth(Role.Admin, Role.User)
  @Get()
  findAll(): Promise<Empleado[]> {
    return this.empleadoService1.findAll();
  }

  @Auth(Role.Admin, Role.HolaAmigo)
  @Get('empleado-view/employees')
  async findAllEmployees(): Promise<EmpleadoView[]> {
    return await this.empleadoService.findAllEmployees();
  }

  // Rutas dinámicas
  @Auth(Role.Admin, Role.HolaAmigo)
  @Get('empleado-view/:celular')
  async getByCelular(
    @Param('celular') celular: string,
  ): Promise<EmpleadoView | null> {
    return await this.empleadoService.findByCelular(celular);
  }

  @Auth(Role.Admin, Role.User)
  @Get('empleado-view/correo/:correo')
  async getEmpleadoByCorreo(
    @Param('correo') correo: string,
  ): Promise<EmpleadoView | null> {
    return await this.empleadoService.findEmpleadoByCorreo(correo);
  }

  @Auth(Role.Admin, Role.User)
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Empleado | null> {
    return this.empleadoService1.findOne(id);
  }
}
