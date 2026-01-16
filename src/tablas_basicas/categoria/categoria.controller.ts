import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { Categoria } from './categoria.entity';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/common/enums/rol.enum';

@Auth(
  Role.Admin,
  Role.AdminCompras,
  Role.AprobadorCompras,
  Role.UsuarioCompras,
  Role.AdminAlmacen,
  Role.Almacenista,
  Role.SalidasAlmacen,
)
@Controller('categoria')
export class CategoriaController {
  constructor(private categoriaService: CategoriaService) {}

  // End point para traer todas las categorías
  @Get()
  findAll(): Promise<Categoria[]> {
    return this.categoriaService.findAll();
  }

  // End point para crear una categoría
  @Post()
  create(@Body() createDto: CreateCategoriaDto): Promise<Categoria> {
    return this.categoriaService.create(createDto);
  }
}
