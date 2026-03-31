import { ViewColumn, ViewEntity } from 'typeorm';

@ViewEntity({ name: 'informe_consumo_caldera_v', schema: 'produccion_views' })
export class ConsumoCalderaView {
  @ViewColumn()
  id_consumo_caldera: number;

  @ViewColumn()
  fecha_hora_inicio: Date;

  @ViewColumn()
  fecha_hora_fin: Date;

  @ViewColumn()
  horas_consumo: number;

  @ViewColumn()
  id_area_produccion: number;

  @ViewColumn()
  nombre_area_produccion: string;

  @ViewColumn()
  id_centro_costos: number;

  @ViewColumn()
  nombre_centro_costos: string;

  @ViewColumn()
  reporte_inicial_medidor: number;

  @ViewColumn()
  reporte_final_medidor: number;

  @ViewColumn()
  total_consumo_medidor: number;

  @ViewColumn()
  cama_inicial: number;

  @ViewColumn()
  cama_final: number;

  @ViewColumn()
  camas_esterilizadas: number;

  @ViewColumn()
  fecha_creacion: Date;

  @ViewColumn()
  fecha_modificacion: Date;

  @ViewColumn()
  created_by: number;

  @ViewColumn()
  nombre_responsable: string;
}
