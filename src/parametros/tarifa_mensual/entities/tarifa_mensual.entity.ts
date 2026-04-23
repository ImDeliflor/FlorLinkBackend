import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'tarifa_mensual', schema: 'parametros' })
export class TarifaMensual {
  @PrimaryGeneratedColumn({ name: 'id_tarifa_mensual' })
  id_tarifa_mensual!: number;

  @Column({ name: 'id_tipo_tarifa', type: 'int' })
  id_tipo_tarifa!: number;

  @Column({ name: 'fecha_periodo', type: 'date' })
  fecha_periodo!: string;

  @Column({
    name: 'valor_total_factura',
    type: 'numeric',
    precision: 14,
    scale: 2,
    transformer: {
      to: (value: number) => value,
      from: (value: string) => parseFloat(value),
    },
  })
  valor_total_factura!: number;

  @Column({
    name: 'valor_unidad_medida',
    type: 'numeric',
    precision: 14,
    scale: 2,
    transformer: {
      to: (value: number) => value,
      from: (value: string) => parseFloat(value),
    },
  })
  valor_unidad_medida!: number;

  @Column({
    name: 'fecha_registro',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  fecha_registro!: Date;

  @Column({ name: 'created_by', type: 'int' })
  created_by!: number;

  @Column({
    name: 'valor_porcentual',
    type: 'numeric',
    precision: 5,
    scale: 2,
    transformer: {
      to: (value: number) => value,
      from: (value: string) => parseFloat(value),
    },
    nullable: true,
  })
  valor_porcentual?: number;

  @Column({ name: 'id_centro_costos', type: 'int', nullable: true })
  id_centro_costos?: number;
}
