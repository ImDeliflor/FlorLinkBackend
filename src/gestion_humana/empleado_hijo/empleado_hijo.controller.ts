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
import { EmpleadoHijoService } from './empleado_hijo.service';
import { CreateEmpleadoHijoDto } from './dto/create-empleado_hijo.dto';
import { UpdateEmpleadoHijoDto } from './dto/update-empleado_hijo.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/common/enums/rol.enum';
import { EmpleadoHijoServiceView } from './empleado_hijo_view.service';

@Auth(Role.Admin, Role.AdminGH, Role.UsuarioGH)
@Controller('empleado-hijo')
export class EmpleadoHijoController {
  constructor(
    private readonly empleado_hijo_service: EmpleadoHijoService,
    private readonly empleado_hijo_service_view: EmpleadoHijoServiceView,
  ) {}

  @Post()
  create(@Body() create_dto: CreateEmpleadoHijoDto) {
    return this.empleado_hijo_service.create(create_dto);
  }

  @Get()
  findAll() {
    return this.empleado_hijo_service.findAll();
  }

  @Get(':id')
  findHijos(@Param('id', ParseIntPipe) id_empleado: number) {
    return this.empleado_hijo_service_view.findHijos(id_empleado);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() update_dto: UpdateEmpleadoHijoDto,
  ) {
    return this.empleado_hijo_service.update(id, update_dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.empleado_hijo_service.remove(id);
  }
}
