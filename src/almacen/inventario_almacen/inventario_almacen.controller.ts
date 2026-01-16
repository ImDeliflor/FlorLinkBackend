import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { InventarioAlmacenService } from './inventario_almacen.service';
import { CreateInventarioAlmacenDto } from './dto/create-inventario_almacen.dto';
import { UpdateInventarioAlmacenDto } from './dto/update-inventario_almacen.dto';
import { InventarioAlmacenViewService } from './inventario_almacen_view.service';
import { Auth } from '../../auth/decorators/auth.decorator';
import { Role } from '../../common/enums/rol.enum';

@Auth(Role.Admin, Role.AdminAlmacen, Role.Almacenista, Role.SalidasAlmacen)
@Controller('inventario-almacen')
export class InventarioAlmacenController {
  constructor(
    private readonly inventarioAlmacenService: InventarioAlmacenService,
    private readonly inventarioAlmacenViewService: InventarioAlmacenViewService,
  ) {}

  // Rutas estáticas
  @Post()
  create(@Body() createInventarioAlmacenDto: CreateInventarioAlmacenDto) {
    return this.inventarioAlmacenService.create(createInventarioAlmacenDto);
  }

  @Get()
  findAll() {
    return this.inventarioAlmacenService.findAll();
  }

  // Reportes
  @Get('/report')
  findAllReport() {
    return this.inventarioAlmacenViewService.findAll();
  }

  // Rutas dinámicas
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.inventarioAlmacenService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateInventarioAlmacenDto: UpdateInventarioAlmacenDto,
  ) {
    return this.inventarioAlmacenService.update(
      +id,
      updateInventarioAlmacenDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inventarioAlmacenService.remove(+id);
  }

  @Get('exists/:cod_producto')
  async productExists(@Param('cod_producto') cod_producto: number) {
    return this.inventarioAlmacenService.productExists(+cod_producto);
  }
}
