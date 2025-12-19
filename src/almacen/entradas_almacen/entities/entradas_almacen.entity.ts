import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'entradas_almacen', schema: 'abastecimiento' })
export class EntradasAlmacen {
  @PrimaryGeneratedColumn({ name: 'id_entrada_almacen' })
  id_entrada_almacen: number;

  @Column({ name: 'nro_factura', type: 'varchar', length: 50 })
  nro_factura: string;

  @Column({ name: 'fecha_entrada', type: 'timestamp' })
  fecha_entrada: Date;

  @Column({ name: 'cod_producto', type: 'int' })
  cod_producto: number;

  @Column({
    name: 'cantidad',
    type: 'numeric',
    precision: 7,
    scale: 1,
    transformer: {
      to: (value: number) => value,
      from: (value: string) => parseFloat(value),
    },
  })
  cantidad: number;

  @Column({
    name: 'precio_unidad',
    type: 'numeric',
    precision: 8,
    scale: 2,
    transformer: {
      to: (value: number) => value,
      from: (value: string) => parseFloat(value),
    },
  })
  precio_unidad: number;

  @Column({ name: 'observacion', type: 'varchar', length: 400 })
  observacion: string;

  @Column({ name: 'created_by', type: 'int' })
  created_by: number;

  @Column({ name: 'fecha_factura', type: 'timestamp' })
  fecha_factura: Date;
}
