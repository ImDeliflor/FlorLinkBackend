import { IsString, MaxLength } from 'class-validator';

export class CreateSexoDto {
  @IsString()
  @MaxLength(10)
  codigo: string;

  @IsString()
  @MaxLength(100)
  descripcion: string;
}
