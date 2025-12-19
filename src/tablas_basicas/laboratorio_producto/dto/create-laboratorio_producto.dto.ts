import { IsNotEmpty, IsString } from 'class-validator';

export class CreateLaboratorioProductoDto {
  @IsString()
  @IsNotEmpty()
  nombre_laboratorio: string;
}
