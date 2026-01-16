import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { MedioTransporteService } from './medio_transporte.service';
import { CreateMedioTransporteDto } from './dto/create-medio_transporte.dto';
import { UpdateMedioTransporteDto } from './dto/update-medio_transporte.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/common/enums/rol.enum';

@Auth(Role.Admin, Role.AdminGH, Role.UsuarioGH)
@Controller('medio-transporte')
export class MedioTransporteController {
  constructor(private readonly service: MedioTransporteService) {}

  @Post()
  create(@Body() dto: CreateMedioTransporteDto) {
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
  update(@Param('id') id: number, @Body() dto: UpdateMedioTransporteDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(+id);
  }
}
