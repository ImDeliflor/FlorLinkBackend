import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { EmpleadoViewService } from './views/empleado_view.service';
import { EmpleadoView } from './views/empleado_view.entity';
import { Empleado } from './empleado.entity';
import { EmpleadoService } from './empleado.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/common/enums/rol.enum';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';

@Controller('empleado')
export class EmpleadoController {
  constructor(
    private readonly empleadoService: EmpleadoViewService,
    private readonly empleadoService1: EmpleadoService,
  ) {}

  // Rutas estáticas
  @Auth(Role.Admin, Role.AdminGH, Role.UsuarioGH)
  @Get()
  findAll(): Promise<Empleado[]> {
    return this.empleadoService1.findAll();
  }

  @Auth(Role.Admin, Role.AdminGH, Role.UsuarioGH)
  @Post()
  create(@Body() dto: CreateEmpleadoDto) {
    return this.empleadoService1.create(dto);
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

  @Auth(
    Role.Superadmin,
    Role.Admin,
    Role.User,
    Role.Superadmin,
    Role.HolaAmigo,
    Role.Almacenista,
    Role.AdminCompras,
    Role.AprobadorCompras,
    Role.UsuarioCompras,
    Role.AdminAlmacen,
    Role.SalidasAlmacen,
    Role.AdminGH,
    Role.UsuarioGH,
  )
  @Get('empleado-view/correo/:correo')
  async getEmpleadoByCorreo(
    @Param('correo') correo: string,
  ): Promise<EmpleadoView | null> {
    return await this.empleadoService.findEmpleadoByCorreo(correo);
  }

  @Auth(Role.Admin, Role.AdminGH, Role.UsuarioGH)
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Empleado | null> {
    return this.empleadoService1.findOne(id);
  }

  // UPDATE
  @Auth(Role.Admin, Role.AdminGH, Role.UsuarioGH)
  @Auth(Role.Admin, Role.User)
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateEmpleadoDto,
  ) {
    return this.empleadoService1.update(id, dto);
  }

  // DELETE (CONCEPTUAL)
  @Auth(Role.Admin, Role.AdminGH, Role.UsuarioGH)
  @Auth(Role.Admin, Role.User)
  @Put('take-out-employee/:id')
  takeOutEmployee(@Param('id', ParseIntPipe) id: number) {
    return this.empleadoService1.takeOutEmployee(id);
  }

  // DELETE (FÍSICO)
  @Auth(Role.Superadmin)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.empleadoService1.remove(id);
  }
}
