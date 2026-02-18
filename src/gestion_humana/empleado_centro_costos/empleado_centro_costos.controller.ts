import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { EmpleadoCentroCostosService } from './empleado_centro_costos.service';
import { CreateEmpleadoCentroCostosDto } from './dto/create-empleado_centro_costo.dto';
import { UpdateEmpleadoCentroCostosDto } from './dto/update-empleado_centro_costo.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/common/enums/rol.enum';
import { EmpleadoCentroCostosViewService } from './empleado_centro_costos_view.service';

@Auth(Role.Admin, Role.AdminGH, Role.UsuarioGH)
@Controller('empleado-centro-costos')
export class EmpleadoCentroCostosController {
  constructor(
    private readonly service: EmpleadoCentroCostosService,
    private readonly serviceView: EmpleadoCentroCostosViewService,
  ) {}

  @Post()
  create(@Body() dto: CreateEmpleadoCentroCostosDto) {
    return this.service.create(dto);
  }

  // @Get()
  // findAll() {
  //   return this.service.findAll();
  // }

  @Get('/report-empleado/:id_empleado')
  findByEmpleado(@Param('id_empleado', ParseIntPipe) id_empleado: number) {
    return this.serviceView.findByEmpleado(id_empleado);
  }

  @Get(':id_empleado/:id_centro_costos')
  findOne(
    @Param('id_empleado', ParseIntPipe) id_empleado: number,
    @Param('id_centro_costos', ParseIntPipe) id_centro_costos: number,
  ) {
    return this.service.findOne(id_empleado, id_centro_costos);
  }

  @Put(':id_empleado/:id_centro_costos')
  update(
    @Param('id_empleado', ParseIntPipe) id_empleado: number,
    @Param('id_centro_costos', ParseIntPipe) id_centro_costos: number,
    @Body() dto: UpdateEmpleadoCentroCostosDto,
  ) {
    return this.service.update(id_empleado, id_centro_costos, dto);
  }

  @Delete(':id_empleado/:id_centro_costos')
  remove(
    @Param('id_empleado', ParseIntPipe) id_empleado: number,
    @Param('id_centro_costos', ParseIntPipe) id_centro_costos: number,
  ) {
    return this.service.remove(id_empleado, id_centro_costos);
  }
}
