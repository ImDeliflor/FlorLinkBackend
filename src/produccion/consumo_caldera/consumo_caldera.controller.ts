import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ConsumoCalderaService } from './consumo_caldera.service';
import { CreateConsumoCalderaDto } from './dto/create-consumo_caldera.dto';
import { UpdateConsumoCalderaDto } from './dto/update-consumo_caldera.dto';
import { ConsumoCalderaServiceView } from './consumo_caldera_view.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/common/enums/rol.enum';

@Auth(Role.Admin, Role.UsuarioConsumoCaldera, Role.VisualizacionConsumoCaldera)
@Controller('consumo-caldera')
export class ConsumoCalderaController {
  constructor(
    private readonly service: ConsumoCalderaService,
    private readonly serviceView: ConsumoCalderaServiceView,
  ) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get('/report')
  findAllReport() {
    return this.serviceView.findAll();
  }

  @Get('/pending-register/:id_usuario')
  findPendingToRegister(@Param('id_usuario') id_usuario: number) {
    return this.serviceView.findPendingToRegister(id_usuario);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateConsumoCalderaDto) {
    return this.service.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: UpdateConsumoCalderaDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(id);
  }
}
