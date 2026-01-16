import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { FondoCesantiasService } from './fondo_cesantias.service';
import { CreateFondoCesantiasDto } from './dto/create-fondo_cesantia.dto';
import { UpdateFondoCesantiasDto } from './dto/update-fondo_cesantia.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/common/enums/rol.enum';

@Auth(Role.Admin, Role.AdminGH, Role.UsuarioGH)
@Controller('fondo-cesantias')
export class FondoCesantiasController {
  constructor(private readonly service: FondoCesantiasService) {}

  @Post()
  create(@Body() dto: CreateFondoCesantiasDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: UpdateFondoCesantiasDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(+id);
  }
}
