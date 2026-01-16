import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { FondoPensionesService } from './fondo_pensiones.service';
import { CreateFondoPensionesDto } from './dto/create-fondo_pensiones.dto';
import { UpdateFondoPensionesDto } from './dto/update-fondo_pensiones.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/common/enums/rol.enum';

@Auth(Role.Admin, Role.AdminGH, Role.UsuarioGH)
@Controller('fondo-pensiones')
export class FondoPensionesController {
  constructor(private readonly service: FondoPensionesService) {}

  @Post()
  create(@Body() dto: CreateFondoPensionesDto) {
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
  update(@Param('id') id: number, @Body() dto: UpdateFondoPensionesDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(+id);
  }
}
