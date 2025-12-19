import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'informe_productos_almacen_v', schema: 'abastecimiento_views' })
export class ProductoAlmacenView {
  @PrimaryColumn({ name: 'cod_producto', type: 'varchar' })
  cod_producto: string;

  @Column({ name: 'id_categoria', type: 'int' })
  id_categoria: number;

  @Column({
    name: 'nombre_categoria_producto',
    type: 'varchar',
  })
  nombre_categoria_producto: string;

  @Column({ name: 'descripcion', type: 'varchar' })
  descripcion: string;

  @Column({
    name: 'unidad_medida',
    type: 'varchar',
    length: 50,
  })
  unidad_medida: string;

  @Column({ name: 'fecha_registro', type: 'timestamp' })
  fecha_registro: Date;
}
