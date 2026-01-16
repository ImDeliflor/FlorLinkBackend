import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/common/enums/rol.enum';

@Auth(
  Role.Superadmin,
  Role.Admin,
  Role.User,
  Role.Superadmin,
  Role.HolaAmigo,
  Role.Almacenista,
  Role.AdminCompras,
  Role.AprobadorCompras,
  Role.UsuarioCompras,
  Role.AdminAlmacen,
  Role.SalidasAlmacen,
  Role.AdminGH,
  Role.UsuarioGH,
)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Auth(Role.Superadmin)
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Auth(Role.Superadmin)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Auth(Role.Superadmin)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
