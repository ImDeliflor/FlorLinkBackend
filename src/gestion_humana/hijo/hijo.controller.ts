import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { HijoService } from './hijo.service';
import { CreateHijoDto } from './dto/create-hijo.dto';
import { UpdateHijoDto } from './dto/update-hijo.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/common/enums/rol.enum';
import { ProcessHijoDto } from './dto/process-hijo.dto';

@Auth(Role.Admin, Role.AdminGH, Role.UsuarioGH)
@Controller('hijo')
export class HijoController {
  constructor(private readonly hijo_service: HijoService) {}

  @Post()
  create(@Body() create_dto: CreateHijoDto) {
    return this.hijo_service.create(create_dto);
  }

  @Get()
  findAll() {
    return this.hijo_service.findAll();
  }

  // Proceso transaccional para crear un hijo y asignarlo al pariente
  @Post('/process-hijo')
  async processHijo(@Body() dto: ProcessHijoDto) {
    return await this.hijo_service.processHijo(dto);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.hijo_service.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() update_dto: UpdateHijoDto,
  ) {
    return this.hijo_service.update(id, update_dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.hijo_service.remove(id);
  }
}
