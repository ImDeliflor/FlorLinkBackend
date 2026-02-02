import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete,
  ParseIntPipe,
  Put,
} from '@nestjs/common';

import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/common/enums/rol.enum';
import { CompromisoEmpleadoService } from './compromisos_empleado.service';
import { CreateCompromisoEmpleadoDto } from './dto/create-compromisos_empleado.dto';
import { CompromisoEmpleado } from './entities/compromisos_empleado.entity';
import { UpdateCompromisosEmpleadoDto } from './dto/update-compromisos_empleado.dto';

@Auth(Role.Admin, Role.AdminGH)
@Controller('compromisos-empleado')
export class CompromisoEmpleadoController {
  constructor(private readonly service: CompromisoEmpleadoService) {}

  // CREATE
  @Post()
  create(
    @Body() dto: CreateCompromisoEmpleadoDto,
  ): Promise<CompromisoEmpleado> {
    return this.service.create(dto);
  }

  // READ ALL
  @Get()
  findAll(): Promise<CompromisoEmpleado[]> {
    return this.service.findAll();
  }

  // PROCESAR LOS COMPROMISOS (PROCESO TRANSACCIONAL)
  @Post('/procesar')
  processCompromisos(@Body() dto: CreateCompromisoEmpleadoDto[]) {
    return this.service.processEvaluacion(dto);
  }

  // READ ONE
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<CompromisoEmpleado> {
    return this.service.findOne(id);
  }

  // READ BY EMPLEADO
  @Get('evaluacion/:idEmpleado')
  findByEmpleado(
    @Param('idEmpleado', ParseIntPipe) idEmpleado: number,
  ): Promise<CompromisoEmpleado[]> {
    return this.service.findByEmpleado(idEmpleado);
  }

  // UPDATE
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateCompromisosEmpleadoDto,
  ): Promise<CompromisoEmpleado> {
    return this.service.update(id, dto);
  }

  // DELETE
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.service.remove(id);
  }
}
