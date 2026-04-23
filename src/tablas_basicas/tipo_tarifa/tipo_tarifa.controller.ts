import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { TipoTarifaService } from './tipo_tarifa.service';
import { CreateTipoTarifaDto } from './dto/create-tipo_tarifa.dto';
import { UpdateTipoTarifaDto } from './dto/update-tipo_tarifa.dto';

@Controller('tipo-tarifa')
export class TipoTarifaController {
  constructor(private readonly service: TipoTarifaService) {}

  @Post()
  create(@Body() dto: CreateTipoTarifaDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateTipoTarifaDto,
  ) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
