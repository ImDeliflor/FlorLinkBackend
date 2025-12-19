import { PrimaryColumn, ViewColumn, ViewEntity } from 'typeorm';

@ViewEntity({
  name: 'informe_inventario_almacen_v',
  schema: 'abastecimiento_views',
})
export class InventarioAlmacenView {
  @PrimaryColumn({ name: 'id_inventario' })
  id_inventario: number;

  @ViewColumn({ name: 'cod_producto' })
  cod_producto: number;

  @ViewColumn({ name: 'id_categoria' })
  id_categoria_producto: number;

  @ViewColumn({ name: 'nombre_categoria_producto' })
  nombre_categoria_producto: string;

  @ViewColumn({ name: 'descripcion' })
  descripcion: string;

  @ViewColumn({ name: 'unidad_medida' })
  unidad_medida: string;

  @ViewColumn({
    name: 'inventario_actual',
    transformer: {
      to: (value: number) => value,
      from: (value: string) => parseFloat(value),
    },
  })
  inventario_actual: number;

  @ViewColumn({ name: 'tiene_lote_disponible' })
  tiene_lote_disponible: boolean;
}
