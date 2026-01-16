import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  ParseIntPipe,
} from '@nestjs/common';
import { EntradasAlmacenService } from './entradas_almacen.service';
import { CreateEntradasAlmacenDto } from './dto/create-entradas_almacen.dto';
import { UpdateEntradasAlmacenDto } from './dto/update-entradas_almacen.dto';
import { EntradasAlmacenViewService } from './entradas_almacen_view.service';
import { Auth } from '../../auth/decorators/auth.decorator';
import { Role } from '../../common/enums/rol.enum';
import { ProcesarEntradasAlmacenDto } from './dto/procesar-entradas_almacen.dto';

@Auth(Role.Admin, Role.AdminAlmacen, Role.Almacenista)
@Controller('entradas-almacen')
export class EntradasAlmacenController {
  constructor(
    private readonly entradasService: EntradasAlmacenService,
    private readonly entradasViewService: EntradasAlmacenViewService,
  ) {}

  // Rutas estáticas
  @Post()
  create(@Body() dto: CreateEntradasAlmacenDto) {
    return this.entradasService.create(dto);
  }

  @Get()
  findAll() {
    return this.entradasService.findAll();
  }

  //End Points transaccionales

  // Para la entrada de productos
  @Post('procesar')
  createEntrada(@Body() dto: ProcesarEntradasAlmacenDto) {
    return this.entradasService.createEntrada(dto);
  }

  // Reportes
  @Get('/report')
  findAllReport() {
    return this.entradasViewService.findAll();
  }

  // Rutas dinámicas
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.entradasService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateEntradasAlmacenDto,
  ) {
    return this.entradasService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.entradasService.remove(id);
  }
}
