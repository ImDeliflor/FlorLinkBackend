import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LaboratorioProductoService } from './laboratorio_producto.service';
import { CreateLaboratorioProductoDto } from './dto/create-laboratorio_producto.dto';
import { UpdateLaboratorioProductoDto } from './dto/update-laboratorio_producto.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/common/enums/rol.enum';

@Auth(Role.Admin, Role.AdminAlmacen, Role.Almacenista, Role.SalidasAlmacen)
@Controller('laboratorio')
export class LaboratorioProductoController {
  constructor(
    private readonly laboratorioService: LaboratorioProductoService,
  ) {}

  @Get()
  findAll() {
    return this.laboratorioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.laboratorioService.findOne(+id);
  }

  @Post()
  create(@Body() dto: CreateLaboratorioProductoDto) {
    return this.laboratorioService.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateLaboratorioProductoDto) {
    return this.laboratorioService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.laboratorioService.remove(+id);
  }
}
