import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { EntradasPendientesAlmacenService } from './entradas_pendientes_almacen.service';
import { CreateEntradasPendientesAlmacenDto } from './dto/create-entradas_pendientes_almacen.dto';
import { UpdateEntradasPendientesAlmacenDto } from './dto/update-entradas_pendientes_almacen.dto';
import { EntradasPendientesAlmacenViewService } from './entradas_pendientes_almacen_view.service';
import { Auth } from '../../auth/decorators/auth.decorator';
import { Role } from '../../common/enums/rol.enum';

@Auth(Role.Admin, Role.AdminAlmacen, Role.Almacenista, Role.SalidasAlmacen)
@Controller('entradas-pendientes')
export class EntradasPendientesAlmacenController {
  constructor(
    private readonly entradasPendientesService: EntradasPendientesAlmacenService,
    private readonly entradasPendientesViewService: EntradasPendientesAlmacenViewService,
  ) {}

  // Rutas estáticas
  @Auth(Role.VisualizacionAlmacen)
  @Get()
  findAll() {
    return this.entradasPendientesService.findAll();
  }

  @Post()
  create(@Body() dto: CreateEntradasPendientesAlmacenDto) {
    return this.entradasPendientesService.create(dto);
  }

  @Auth(Role.VisualizacionAlmacen)
  @Get('/estado-pendiente')
  findAllPending() {
    return this.entradasPendientesViewService.findAllPending();
  }

  // Reportes
  @Auth(Role.VisualizacionAlmacen)
  @Get('/report')
  findAllReport() {
    return this.entradasPendientesViewService.findAll();
  }

  // Rutas dinámicas
  @Get(':id')
  @Auth(Role.VisualizacionAlmacen)
  findOne(@Param('id') id: string) {
    return this.entradasPendientesService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() dto: UpdateEntradasPendientesAlmacenDto,
  ) {
    return this.entradasPendientesService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.entradasPendientesService.remove(+id);
  }
}
