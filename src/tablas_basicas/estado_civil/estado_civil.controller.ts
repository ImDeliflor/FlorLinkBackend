import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { EstadoCivilService } from './estado_civil.service';
import { CreateEstadoCivilDto } from './dto/create-estado_civil.dto';
import { UpdateEstadoCivilDto } from './dto/update-estado_civil.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/common/enums/rol.enum';

@Auth(Role.Admin, Role.AdminGH, Role.UsuarioGH)
@Controller('estado-civil')
export class EstadoCivilController {
  constructor(private readonly service: EstadoCivilService) {}

  @Post()
  create(@Body() dto: CreateEstadoCivilDto) {
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
  update(@Param('id') id: number, @Body() dto: UpdateEstadoCivilDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(+id);
  }
}
