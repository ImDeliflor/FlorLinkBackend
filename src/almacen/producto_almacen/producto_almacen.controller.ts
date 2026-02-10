import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductoAlmacenService } from './producto_almacen.service';
import { CreateProductoAlmacenDto } from './dto/create-producto_almacen.dto';
import { UpdateProductoAlmacenDto } from './dto/update-producto_almacen.dto';
import { ProductoAlmacenViewService } from './producto_almacen_view.service';
import { Auth } from '../../auth/decorators/auth.decorator';
import { Role } from '../../common/enums/rol.enum';

@Auth(
  Role.Admin,
  Role.AdminAlmacen,
  Role.Almacenista,
  Role.SalidasAlmacen,
  Role.VisualizacionAlmacen,
)
@Controller('producto-almacen')
export class ProductoAlmacenController {
  constructor(
    private readonly productoService: ProductoAlmacenService,
    private readonly productoViewService: ProductoAlmacenViewService,
  ) {}

  // Rutas estáticas
  @Post()
  create(@Body() dto: CreateProductoAlmacenDto) {
    return this.productoService.create(dto);
  }

  @Get()
  findAll() {
    return this.productoService.findAll();
  }

  // Reportes
  @Get('/report')
  findAllReport() {
    return this.productoViewService.findAll();
  }

  // Rutas dinámicas
  @Get(':id')
  findOne(@Param('id') cod_producto: number) {
    return this.productoService.findOne(cod_producto);
  }

  @Patch(':id')
  update(
    @Param('id') cod_producto: number,
    @Body() dto: UpdateProductoAlmacenDto,
  ) {
    return this.productoService.update(cod_producto, dto);
  }

  @Delete(':id')
  remove(@Param('id') cod_producto: number) {
    return this.productoService.remove(cod_producto);
  }
}
