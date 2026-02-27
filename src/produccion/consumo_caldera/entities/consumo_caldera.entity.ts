import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ schema: 'produccion', name: 'consumo_caldera' })
export class ConsumoCaldera {
  @PrimaryGeneratedColumn({ name: 'id_consumo_caldera' })
  id_consumo_caldera: number;

  @Column({ name: 'fecha_hora_inicio', type: 'timestamp' })
  fecha_hora_inicio: Date;

  @Column({ name: 'fecha_hora_fin', type: 'timestamp', nullable: true })
  fecha_hora_fin: Date;

  @Column({ name: 'id_area_produccion', type: 'int' })
  id_area_produccion: number;

  @Column({
    name: 'reporte_inicial_medidor',
    type: 'numeric',
    precision: 10,
    scale: 2,
  })
  reporte_inicial_medidor: number;

  @Column({
    name: 'reporte_final_medidor',
    type: 'numeric',
    precision: 10,
    scale: 2,
    nullable: true,
  })
  reporte_final_medidor: number;

  @Column({
    name: 'fecha_creacion',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  fecha_creacion: Date;

  @Column({ name: 'fecha_modificacion', type: 'timestamp', nullable: true })
  fecha_modificacion: Date;

  @Column({ name: 'created_by', type: 'int' })
  created_by: number;
}
