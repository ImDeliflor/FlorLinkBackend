import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { OrdenCompraService } from './orden_compra.service';
import { CreateOrdenCompraDto } from './dto/create-orden-compra.dto';
import { OrdenCompra } from './orden_compra.entity';
import { UpdateOrdenCompraDto } from './dto/update-orden-compra.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/common/enums/rol.enum';

@Auth(Role.Admin, Role.AdminCompras, Role.UsuarioCompras, Role.AprobadorCompras)
@Controller('orden-compra')
export class OrdenCompraController {
  constructor(private ordenCompraService: OrdenCompraService) {}

  @Get()
  findAll(): Promise<OrdenCompra[]> {
    return this.ordenCompraService.findAll();
  }

  @Post()
  create(@Body() createDto: CreateOrdenCompraDto): Promise<OrdenCompra> {
    return this.ordenCompraService.create(createDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateDto: UpdateOrdenCompraDto) {
    return this.ordenCompraService.update(id, updateDto);
  }
}
