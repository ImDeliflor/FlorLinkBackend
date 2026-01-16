import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateTipoDocumentoDto } from './dto/create-tipo_documento.dto';
import { TipoDocumentoService } from './tipo_documento.service';
import { UpdateTipoDocumentoDto } from './dto/update-tipo_documento.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/common/enums/rol.enum';

@Auth(Role.Admin, Role.AdminGH, Role.UsuarioGH)
@Controller('tipo-documento')
export class TipoDocumentoController {
  constructor(private readonly service: TipoDocumentoService) {}

  @Post()
  create(@Body() dto: CreateTipoDocumentoDto) {
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
  update(@Param('id') id: number, @Body() dto: UpdateTipoDocumentoDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(+id);
  }
}
