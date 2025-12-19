import { PrimaryColumn, ViewColumn, ViewEntity } from 'typeorm';

@ViewEntity({
  name: 'informe_entradas_pendientes_almacen_v',
  schema: 'abastecimiento_views',
})
export class EntradasPendientesAlmacenView {
  @PrimaryColumn({ name: 'id_entrada_pendiente' })
  id_entrada_pendiente: number;

  @ViewColumn({ name: 'cod_producto' })
  cod_producto: number;

  @ViewColumn({ name: 'id_categoria' })
  id_categoria: number;

  @ViewColumn({
    name: 'nombre_categoria_producto',
  })
  nombre_categoria_producto: string;

  @ViewColumn({
    name: 'descripcion',
  })
  descripcion: string;

  @ViewColumn({
    name: 'unidad_medida',
  })
  unidad_medida: string;

  @ViewColumn({
    name: 'cantidad_a_registrar',
    transformer: {
      to: (value: number) => value,
      from: (value: string) => parseFloat(value),
    },
  })
  cantidad_a_registrar: number;

  @ViewColumn({ name: 'fecha_registro' })
  fecha_registro: Date;

  @ViewColumn({ name: 'estado_entrada' })
  estado_entrada: string;
}
