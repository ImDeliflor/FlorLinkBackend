import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateEmpleadoHijoDto {
  @IsInt()
  @IsNotEmpty()
  id_rol_familiar: number;

  @IsInt()
  @IsNotEmpty()
  id_empleado: number;

  @IsInt()
  @IsNotEmpty()
  id_hijo: number;
}
