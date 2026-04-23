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
import { ConceptoCostoService } from './concepto_costo.service';
import { CreateConceptoCostoDto } from './dto/create-concepto_costo.dto';
import { UpdateConceptoCostoDto } from './dto/update-concepto_costo.dto';

@Controller('concepto-costo')
export class ConceptoCostoController {
  constructor(private readonly service: ConceptoCostoService) {}

  @Post()
  create(@Body() dto: CreateConceptoCostoDto) {
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
    @Body() dto: UpdateConceptoCostoDto,
  ) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
