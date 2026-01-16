import {
  IsBoolean,
  IsDateString,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';

export class CreateEmpleadoDto {
  // Documento
  @IsInt()
  id_tipo_documento: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  nro_documento: string;

  // Datos personales
  @IsInt()
  id_ciudad_expedicion: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  nombre: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  apellidos: string;

  @IsString()
  @IsOptional()
  @MaxLength(50)
  nickname?: string;

  @IsInt()
  id_ciudad_residencia: number;

  @IsString()
  @MaxLength(20)
  celular: string;

  @IsEmail()
  correo: string;

  // Organización
  @IsInt()
  id_cargo: number;

  @IsInt()
  id_area: number;

  @IsDateString()
  fecha_ingreso: string;

  @IsDateString()
  fecha_nacimiento: string;

  // Información salarial
  @IsNumber()
  @Min(0)
  salario: number;

  @IsString()
  @IsNotEmpty()
  salario_letras: string;

  @IsNumber()
  @Min(0)
  auxilio_transporte: number;

  @IsString()
  @IsNotEmpty()
  auxilio_transporte_letras: string;

  // Seguridad social
  @IsInt()
  id_sexo: number;

  @IsInt()
  id_eps: number;

  @IsInt()
  id_fondo_pension: number;

  @IsInt()
  id_fondo_cesantias: number;

  // Otros
  @IsInt()
  @Min(0)
  dias_vacaciones: number;

  @IsInt()
  id_estado_civil: number;

  @IsInt()
  id_medio_transporte: number;

  @IsString()
  estado_empleado: string;

  @IsBoolean()
  es_jefe: boolean;

  @IsInt()
  id_tipo_contrato: number;

  @IsInt()
  @IsOptional()
  id_jefe?: number;
}
