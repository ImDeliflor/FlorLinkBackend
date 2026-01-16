import { IsString, MaxLength } from 'class-validator';

export class CreateFondoCesantiasDto {
  @IsString()
  @MaxLength(150)
  nombre_fondo_cesantias: string;
}
