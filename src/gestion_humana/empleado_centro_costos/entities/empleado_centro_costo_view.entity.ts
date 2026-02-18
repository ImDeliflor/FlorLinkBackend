import { ViewColumn, ViewEntity } from 'typeorm';

@ViewEntity({
  name: 'informe_porc_impacto_empleado_centro_costos_v',
  schema: 'tablas_basicas_views',
})
export class EmpleadoCentroCostoView {
  @ViewColumn()
  id_empleado: number;

  @ViewColumn()
  nombre_empleado: string;

  @ViewColumn()
  id_centro_costos: number;

  @ViewColumn()
  nombre_centro_costos: string;

  @ViewColumn()
  porc_impacto: number;
}
