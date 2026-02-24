// area-produccion.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { AreaProduccionService } from './area_produccion.service';
import { CreateAreaProduccionDto } from './dto/create-area_produccion.dto';
import { UpdateAreaProduccionDto } from './dto/update-area_produccion.dto';

@Controller('area-produccion')
export class AreaProduccionController {
  constructor(private readonly service: AreaProduccionService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateAreaProduccionDto) {
    return this.service.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: UpdateAreaProduccionDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(id);
  }
}
