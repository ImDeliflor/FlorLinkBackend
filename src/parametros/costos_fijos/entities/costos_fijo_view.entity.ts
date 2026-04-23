import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({ name: 'informe_costos_fijos_v', schema: 'parametros_views' })
export class CostosFijosView {
  @ViewColumn()
  id_costo!: number;

  @ViewColumn()
  id_concepto_costo!: number;

  @ViewColumn()
  nombre_concepto_costo!: string;

  @ViewColumn()
  fecha_periodo!: Date;

  @ViewColumn()
  valor_total_costo!: number;

  @ViewColumn()
  id_centro_costos!: number;

  @ViewColumn()
  nombre_centro_costos!: string;

  @ViewColumn()
  porc_impacto!: number;

  @ViewColumn()
  fecha_registro!: Date;

  @ViewColumn()
  created_by!: number;

  @ViewColumn()
  nombre_usuario!: string;
}
