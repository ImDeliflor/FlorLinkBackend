import { IsString, MaxLength } from 'class-validator';

export class CreateEstadoCivilDto {
  @IsString()
  @MaxLength(100)
  nombre_estado_civil: string;
}
