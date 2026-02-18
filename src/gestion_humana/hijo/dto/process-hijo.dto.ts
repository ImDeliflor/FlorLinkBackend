import { IsDateString, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class ProcessHijoDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  nombre_hijo: string;

  @IsDateString()
  @IsNotEmpty()
  fecha_nacimiento: Date;

  @IsNotEmpty()
  id_empleado: number;

  @IsNotEmpty()
  rol_familiar: number;
}
