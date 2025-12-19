import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CentroCostosService } from './centro_costos.service';
import { CreateCentroCostoDto } from './dto/create-centro_costo.dto';
import { UpdateCentroCostoDto } from './dto/update-centro_costo.dto';
import { Auth } from '../../auth/decorators/auth.decorator';
import { Role } from '../../common/enums/rol.enum';

@Auth(Role.Admin, Role.User)
@Controller('centro-costos')
export class CentroCostosController {
  constructor(private readonly centroCostosService: CentroCostosService) {}

  @Post()
  create(@Body() createCentroCostoDto: CreateCentroCostoDto) {
    return this.centroCostosService.create(createCentroCostoDto);
  }

  @Get()
  findAll() {
    return this.centroCostosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.centroCostosService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCentroCostoDto: UpdateCentroCostoDto,
  ) {
    return this.centroCostosService.update(+id, updateCentroCostoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.centroCostosService.remove(+id);
  }
}
