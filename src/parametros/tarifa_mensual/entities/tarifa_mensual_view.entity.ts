import { ViewColumn, ViewEntity } from 'typeorm';

@ViewEntity({ name: 'informe_tarifas_mensuales_v', schema: 'parametros_views' })
export class TarifaMensualView {
  @ViewColumn()
  id_tarifa_mensual!: number;

  @ViewColumn()
  id_tipo_tarifa!: number;

  @ViewColumn()
  nombre_tipo_tarifa!: string;

  @ViewColumn()
  fecha_periodo!: string;

  @ViewColumn()
  valor_total_factura!: number;

  @ViewColumn()
  valor_unidad_medida!: number;

  @ViewColumn()
  valor_porcentual!: number;

  @ViewColumn()
  id_centro_costos!: number;

  @ViewColumn()
  nombre_centro_costos!: string;

  @ViewColumn()
  fecha_registro!: Date;

  @ViewColumn()
  created_by!: number;

  @ViewColumn()
  nombre_usuario!: string;
}
