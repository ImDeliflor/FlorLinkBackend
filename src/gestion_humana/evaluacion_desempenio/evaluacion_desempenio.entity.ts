import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'evaluacion_desempenio', schema: 'gestion_humana' })
export class EvaluacionDesempenio {
  @PrimaryGeneratedColumn({ name: 'id_evaluacion_desempenio' })
  id_evaluacion_desempenio: number;

  @Column({ type: 'int' })
  id_grupo_evaluacion: number;

  @Column({ type: 'int' })
  id_evaluador: number;

  @Column({ type: 'int' })
  id_evaluado: number;

  @Column({ type: 'int' })
  id_enfoque_evaluacion: number;

  @Column({ type: 'text', nullable: true })
  observaciones: string;
}
