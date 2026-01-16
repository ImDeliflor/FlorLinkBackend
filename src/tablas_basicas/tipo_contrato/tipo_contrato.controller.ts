import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { TipoContratoService } from './tipo_contrato.service';
import { CreateTipoContratoDto } from './dto/create-tipo_contrato.dto';
import { UpdateTipoContratoDto } from './dto/update-tipo_contrato.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/common/enums/rol.enum';

@Auth(Role.Admin, Role.AdminGH, Role.UsuarioGH)
@Controller('tipo-contrato')
export class TipoContratoController {
  constructor(private readonly service: TipoContratoService) {}

  @Post()
  create(@Body() dto: CreateTipoContratoDto) {
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
  update(@Param('id') id: number, @Body() dto: UpdateTipoContratoDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(+id);
  }
}
