import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'lote_producto_almacen', schema: 'abastecimiento' })
export class LoteProductoAlmacen {
  @PrimaryGeneratedColumn({ name: 'id_lote_producto', type: 'int' })
  id_lote_producto: number;

  @Column({ name: 'cod_producto', type: 'int' })
  cod_producto: number;

  @Column({ name: 'nro_lote', type: 'varchar', length: 100, nullable: true })
  nro_lote: string;

  @Column({
    name: 'fecha_ingreso',
    type: 'timestamp',
    nullable: true,
  })
  fecha_ingreso: Date;

  @Column({
    name: 'fecha_vencimiento',
    type: 'date',
    nullable: true,
  })
  fecha_vencimiento: Date;

  @Column({ name: 'id_laboratorio', type: 'int', nullable: true })
  id_laboratorio: number;

  @Column({
    name: 'categoria_toxicologica',
    type: 'varchar',
    length: 10,
    nullable: true,
  })
  categoria_toxicologica: string;

  @Column({
    name: 'cantidad_disponible_lote',
    type: 'numeric',
    precision: 7,
    scale: 1,
    transformer: {
      to: (value: number) => value,
      from: (value: string) => parseFloat(value),
    },
  })
  cantidad_disponible_lote: number;
}
