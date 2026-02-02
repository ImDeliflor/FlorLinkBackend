import { IsInt, IsString, IsDateString, MaxLength } from 'class-validator';

export class CreateCompromisoEmpleadoDto {
  @IsInt()
  id_evaluador: number;

  @IsInt()
  id_empleado: number;

  @IsString()
  @MaxLength(300)
  descripcion_compromiso: string;

  @IsInt()
  porc_cumplimiento: number;

  @IsString()
  @MaxLength(1)
  semestre_compromiso: string;

  @IsString()
  @MaxLength(4)
  anio_compromiso: string;

  @IsDateString()
  fecha: string;

  @IsString()
  observaciones: string;
}
