import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'salidas_almacen', schema: 'abastecimiento' })
export class SalidasAlmacen {
  @PrimaryGeneratedColumn({ name: 'id_salida_almacen' })
  id_salida_almacen: number;

  @Column({ name: 'fecha_salida', type: 'timestamp' })
  fecha_salida: Date;

  @Column({ name: 'cod_producto', type: 'int' })
  cod_producto: number;

  @Column({
    name: 'cantidad',
    type: 'numeric',
    precision: 8,
    scale: 2,
    transformer: {
      to: (value: number) => value,
      from: (value: string) => parseFloat(value),
    },
  })
  cantidad: number;

  @Column({ name: 'id_centro_costos', type: 'int' })
  id_centro_costos: number;

  @Column({ name: 'observacion', type: 'varchar', length: 400 })
  observacion: string;

  @Column({ name: 'created_by', type: 'int' })
  created_by: number;

  @Column({ name: 'id_lote_producto', type: 'int', nullable: true })
  id_lote_producto: number;

  @Column({ name: 'fecha_aplicacion', type: 'timestamp' })
  fecha_aplicacion: Date;
}
