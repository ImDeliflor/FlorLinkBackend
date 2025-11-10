import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({ schema: 'gestion_humana_views', name: 'informe_empleados_view' })
export class EmpleadoView {
  @ViewColumn()
  id_empleado: number;

  @ViewColumn()
  tipo_documento: string;

  @ViewColumn()
  nro_documento: string;

  @ViewColumn()
  ciudad_expedicion: string;

  @ViewColumn()
  nombre: string;

  @ViewColumn()
  apellidos: string;

  @ViewColumn()
  nickname: string;

  @ViewColumn()
  ciudad_residencia: string;

  @ViewColumn()
  celular: string;

  @ViewColumn()
  correo: string;

  @ViewColumn()
  cargo: string;

  @ViewColumn()
  grupo: string;

  @ViewColumn()
  area: string;

  @ViewColumn()
  fecha_ingreso: Date;

  @ViewColumn()
  salario: number;

  @ViewColumn()
  salario_letras: string;

  @ViewColumn()
  auxilio_transporte: number;

  @ViewColumn()
  auxilio_transporte_letras: string;

  @ViewColumn()
  codigo_sexo: string;

  @ViewColumn()
  sexo: string;

  @ViewColumn()
  tratamiento: string;

  @ViewColumn()
  eps: string;

  @ViewColumn()
  fondo_pension: string;

  @ViewColumn()
  fondo_cesantias: string;

  @ViewColumn()
  dias_vacaciones: number;

  @ViewColumn()
  fecha_nacimiento: Date;

  @ViewColumn()
  estado_civil: string;

  @ViewColumn()
  cantidad_hijos: number;

  @ViewColumn()
  hijos: string;

  @ViewColumn()
  medio_transporte: string;

  @ViewColumn()
  cedula_jefe: number;

  @ViewColumn()
  nombre_jefe: string;

  @ViewColumn()
  correo_jefe: string;

  @ViewColumn()
  es_jefe: boolean;

  @ViewColumn()
  id_usuario: number | null;

  @ViewColumn()
  id_rol: number | null;

  @ViewColumn()
  nombre_rol: string | null;

  @ViewColumn()
  id_jefe_grupo_colaborativo: number | null;

  @ViewColumn()
  jefe_grupo_colaborativo: string | null;

  @ViewColumn()
  id_grupo_colaborativo: number | null;

  @ViewColumn()
  nombre_grupo_colaborativo: string | null;

  @ViewColumn()
  tipo_contrato: string;

  @ViewColumn()
  estado_empleado: string;
}
