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
import { LoteProductoAlmacenService } from './lote_producto_almacen.service';
import { CreateLoteProductoAlmacenDto } from './dto/create-lote_producto_almacen.dto';
import { UpdateLoteProductoAlmacenDto } from './dto/update-lote_producto_almacen.dto';
import { LoteProductoAlmacenViewService } from './lote_producto_almacen_view.service';
import { Auth } from '../../auth/decorators/auth.decorator';
import { Role } from '../../common/enums/rol.enum';

@Auth(
  Role.Admin,
  Role.AdminAlmacen,
  Role.Almacenista,
  Role.SalidasAlmacen,
  Role.VisualizacionAlmacen,
)
@Controller('lote-producto')
export class LoteProductoAlmacenController {
  constructor(
    private readonly loteProductoAlmacenService: LoteProductoAlmacenService,
    private readonly loteProductoAlmacenViewService: LoteProductoAlmacenViewService,
  ) {}

  // Rutas estáticas
  @Get()
  findAll() {
    return this.loteProductoAlmacenService.findAll();
  }

  @Post()
  create(@Body() dto: CreateLoteProductoAlmacenDto) {
    return this.loteProductoAlmacenService.create(dto);
  }

  // Reportes
  @Get('/report')
  findAllReport() {
    return this.loteProductoAlmacenViewService.findAll();
  }

  // Rutas dinámicas
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.loteProductoAlmacenService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateLoteProductoAlmacenDto,
  ) {
    return this.loteProductoAlmacenService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.loteProductoAlmacenService.remove(id);
  }
}
