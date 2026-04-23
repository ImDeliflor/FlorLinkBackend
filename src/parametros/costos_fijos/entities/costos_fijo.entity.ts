import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'costos_fijos', schema: 'parametros' })
export class CostosFijos {
  @PrimaryGeneratedColumn({ name: 'id_costo' })
  id_costo!: number;

  @Column({ name: 'id_concepto_costo', type: 'int' })
  id_concepto_costo!: number;

  @Column({
    name: 'fecha_periodo',
    type: 'date',
  })
  fecha_periodo!: Date;

  @Column({
    name: 'valor_total_costo',
    type: 'numeric',
    precision: 14,
    scale: 2,
    transformer: {
      to: (value: number) => value,
      from: (value: string) => parseFloat(value),
    },
  })
  valor_total_costo!: number;

  @Column({ name: 'id_centro_costos', type: 'int' })
  id_centro_costos!: number;

  @Column({
    name: 'porc_impacto',
    type: 'numeric',
    precision: 14,
    scale: 2,
    transformer: {
      to: (value: number) => value,
      from: (value: string) => parseFloat(value),
    },
  })
  porc_impacto!: number;

  @Column({
    name: 'fecha_registro',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  fecha_registro!: Date;

  @Column({ name: 'created_by', type: 'int' })
  created_by!: number;
}
