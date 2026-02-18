import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { RolFamiliarService } from './rol_familiar.service';
import { CreateRolFamiliarDto } from './dto/create-rol_familiar.dto';
import { UpdateRolFamiliarDto } from './dto/update-rol_familiar.dto';

@Controller('rol-familiar')
export class RolFamiliarController {
  constructor(private readonly rolFamiliarService: RolFamiliarService) {}

  @Post()
  create(@Body() createRolFamiliarDto: CreateRolFamiliarDto) {
    return this.rolFamiliarService.create(createRolFamiliarDto);
  }

  @Get()
  findAll() {
    return this.rolFamiliarService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rolFamiliarService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateRolFamiliarDto: UpdateRolFamiliarDto,
  ) {
    return this.rolFamiliarService.update(+id, updateRolFamiliarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolFamiliarService.remove(+id);
  }
}
