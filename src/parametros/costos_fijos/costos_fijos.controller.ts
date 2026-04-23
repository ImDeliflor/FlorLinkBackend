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
import { CostosFijosService } from './costos_fijos.service';
import { CreateCostosFijosDto } from './dto/create-costos_fijo.dto';
import { UpdateCostosFijosDto } from './dto/update-costos_fijo.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/common/enums/rol.enum';
import { CostosFijosServiceView } from './costos_fijos_view.service';

@Auth(Role.Admin, Role.AdminCostoFijo)
@Controller('costos-fijos')
export class CostosFijosController {
  constructor(
    private readonly service: CostosFijosService,
    private readonly serviceView: CostosFijosServiceView,
  ) {}

  @Post()
  create(@Body() dto: CreateCostosFijosDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get('/report')
  findAllReport() {
    return this.serviceView.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateCostosFijosDto,
  ) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
