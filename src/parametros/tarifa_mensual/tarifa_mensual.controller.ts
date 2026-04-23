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
import { TarifaMensualService } from './tarifa_mensual.service';
import { CreateTarifaMensualDto } from './dto/create-tarifa_mensual.dto';
import { UpdateTarifaMensualDto } from './dto/update-tarifa_mensual.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/common/enums/rol.enum';
import { TarifaMensualServiceView } from './tarifa_mensual_view.service';

@Auth(Role.Admin, Role.AdminTarifaMensual)
@Controller('tarifa-mensual')
export class TarifaMensualController {
  constructor(
    private readonly service: TarifaMensualService,
    private readonly serviceView: TarifaMensualServiceView,
  ) {}

  @Post()
  create(@Body() dto: CreateTarifaMensualDto) {
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
  findOne(@Param('id') id: number) {
    return this.service.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateTarifaMensualDto,
  ) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(id);
  }
}
