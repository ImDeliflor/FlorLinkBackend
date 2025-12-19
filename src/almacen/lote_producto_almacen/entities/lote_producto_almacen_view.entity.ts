import { ViewEntity, ViewColumn, PrimaryColumn } from 'typeorm';

@ViewEntity({
  name: 'informe_lote_producto_almacen_v',
  schema: 'abastecimiento_views', // cambia si tu vista está en otro schema
})
export class LoteProductoAlmacenView {
  @PrimaryColumn({ name: 'id_lote_producto' })
  id_lote_producto: number;

  @ViewColumn({ name: 'cod_producto' })
  cod_producto: number;

  @ViewColumn({ name: 'id_categoria' })
  id_categoria: number;

  @ViewColumn({ name: 'nombre_categoria_producto' })
  nombre_categoria_producto: string;

  @ViewColumn({ name: 'descripcion_producto' })
  descripcion_producto: string;

  @ViewColumn({ name: 'unidad_medida' })
  unidad_medida: string;

  @ViewColumn({ name: 'nro_lote' })
  nro_lote: string;

  @ViewColumn({ name: 'fecha_ingreso' })
  fecha_ingreso: Date;

  @ViewColumn({ name: 'fecha_vencimiento' })
  fecha_vencimiento: Date;

  @ViewColumn({ name: 'id_laboratorio' })
  id_laboratorio: number;

  @ViewColumn({ name: 'nombre_laboratorio' })
  nombre_laboratorio: string;

  @ViewColumn({ name: 'categoria_toxicologica' })
  categoria_toxicologica: string;

  @ViewColumn({
    name: 'cantidad_disponible_lote',
    transformer: {
      to: (value: number) => value,
      from: (value: string) => parseFloat(value),
    },
  })
  cantidad_disponible_lote: number;
}
