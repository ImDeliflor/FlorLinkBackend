import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DetalleCompraService } from './detalle_compra.service';
import { DetalleCompra } from './detalle_compra.entity';
import { CreateDetalleCompraDto } from './dto/create-detalle-compra.dto';
import { DetalleCompraServiceView } from './detalle_compra_view.service';
import { DetalleCompraView } from './detalle_compra_view.entity';
import { UpdateDetalleCompraDto } from './dto/update-detalle-compra.dto';

@Controller('detalle-compra')
export class DetalleCompraController {
  constructor(
    private detalleCompraService: DetalleCompraService,
    private detalleCompraServiceView: DetalleCompraServiceView,
  ) {}

  @Get()
  findAll(): Promise<DetalleCompra[]> {
    return this.detalleCompraService.findAll();
  }

  @Post()
  create(@Body() createDto: CreateDetalleCompraDto): Promise<DetalleCompra> {
    return this.detalleCompraService.create(createDto);
  }

  @Get('/report')
  findAllReport(): Promise<DetalleCompraView[]> {
    return this.detalleCompraServiceView.findAll();
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateDto: UpdateDetalleCompraDto) {
    return this.detalleCompraService.update(id, updateDto);
  }

  @Delete(':id')
  async deleteProducto(@Param('id') id_detalle_compra: number) {
    return await this.detalleCompraService.delete(id_detalle_compra);
  }
}
