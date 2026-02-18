import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'gestion_humana_views',
  name: 'informe_hijos_v',
})
export class EmpleadoHijoView {
  @ViewColumn()
  id_empleado_hijo: number;

  @ViewColumn()
  id_rol_familiar: number;

  @ViewColumn()
  nombre_rol_familiar: string;

  @ViewColumn()
  id_empleado: number;

  @ViewColumn()
  nombre_pariente: string;

  @ViewColumn()
  id_hijo: number;

  @ViewColumn()
  nombre_hijo: string;

  @ViewColumn()
  fecha_nacimiento_hijo: Date;
}
