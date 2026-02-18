import { IsInt, Min, Max } from 'class-validator';

export class CreateEmpleadoCentroCostosDto {
  @IsInt()
  id_empleado: number;

  @IsInt()
  id_centro_costos: number;

  @IsInt()
  @Min(0)
  @Max(100)
  porc_impacto: number;
}
