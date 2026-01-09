import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'abastecimiento_views',
  name: 'informe_entradas_almacen_v',
})
export class EntradasAlmacenView {
  @ViewColumn()
  id_entrada_almacen: number;

  @ViewColumn()
  tipo_documento: string;

  @ViewColumn()
  nro_factura: string;

  @ViewColumn()
  fecha_entrada: Date;

  @ViewColumn()
  fecha_factura: Date;

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
  cantidad: number; // numeric(7,1) → number

  @ViewColumn()
  precio_unidad: number; // numeric(8,2) → number

  @ViewColumn()
  observacion: string;

  @ViewColumn()
  created_by: number;

  @ViewColumn()
  registrado_por: string; // viene desde un join usuario.nombre
}
