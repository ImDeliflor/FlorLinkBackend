import { IsString, MaxLength } from 'class-validator';

export class CreateFondoPensionesDto {
  @IsString()
  @MaxLength(150)
  nombre_fondo_pensiones: string;
}
