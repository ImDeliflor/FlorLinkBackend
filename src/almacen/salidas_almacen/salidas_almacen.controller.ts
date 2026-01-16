import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { SalidasAlmacenService } from './salidas_almacen.service';
import { CreateSalidaAlmacenDto } from './dto/create-salidas_almacen.dto';
import { UpdateSalidasAlmacenDto } from './dto/update-salidas_almacen.dto';
import { SalidasAlmacenViewService } from './salidas_almacen_view.service';
import { Auth } from '../../auth/decorators/auth.decorator';
import { Role } from '../../common/enums/rol.enum';

@Auth(Role.Admin, Role.AdminAlmacen, Role.Almacenista, Role.SalidasAlmacen)
@Controller('salidas-almacen')
export class SalidasAlmacenController {
  constructor(
    private readonly service: SalidasAlmacenService,
    private readonly serviceView: SalidasAlmacenViewService,
  ) {}

  // rutas estáticas
  @Post()
  create(@Body() dto: CreateSalidaAlmacenDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  //End Points transaccionales

  // Para los productos con lote
  @Post('sin-lote')
  createSalida(@Body() dto: CreateSalidaAlmacenDto) {
    return this.service.createSalida(dto);
  }

  // Para los productos con lote
  @Post('con-lote')
  createSalidaConLote(@Body() dto: CreateSalidaAlmacenDto) {
    return this.service.createSalidaConLote(dto);
  }

  // reportes
  @Get('/report')
  findAllReport() {
    return this.serviceView.findAll();
  }

  // rutas dinámicas
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: UpdateSalidasAlmacenDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(id);
  }
}
