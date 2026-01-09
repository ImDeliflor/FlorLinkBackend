import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'abastecimiento_views',
  name: 'informe_salidas_almacen_v',
})
export class SalidasAlmacenView {
  @ViewColumn()
  id_salida_almacen: number;

  @ViewColumn()
  tipo_documento: string;

  @ViewColumn()
  fecha_salida: Date;

  @ViewColumn()
  fecha_aplicacion: Date;

  @ViewColumn()
  cod_producto: number;

  @ViewColumn()
  id_categoria: number;

  @ViewColumn()
  nombre_categoria_producto: string;

  @ViewColumn()
  descripcion: string;

  @ViewColumn()
  unidad_medida: string;

  @ViewColumn()
  cantidad: number;

  @ViewColumn()
  id_centro_costos: number;

  @ViewColumn()
  nombre_centro_costos: string;

  @ViewColumn()
  observacion: string;

  @ViewColumn()
  id_lote_producto: number;

  @ViewColumn()
  nro_lote: string;

  @ViewColumn()
  fecha_ingreso_lote: Date;

  @ViewColumn()
  fecha_vencimiento_lote: Date;

  @ViewColumn()
  id_laboratorio_lote: number;

  @ViewColumn()
  categoria_toxicologica_lote: string;

  @ViewColumn()
  created_by: number;

  @ViewColumn()
  registrado_por: string;
}
