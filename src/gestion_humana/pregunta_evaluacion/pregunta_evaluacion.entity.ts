import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'preguntas', schema: 'gestion_humana' })
export class PreguntaEvaluacion {
  @PrimaryGeneratedColumn({ name: 'id_pregunta' })
  id_pregunta: number;

  @Column({ type: 'int' })
  id_evaluacion_desempeno: number;

  @Column({ length: 300 })
  pregunta: string;

  @Column({ length: 20 })
  calificacion: string;

  @Column({ type: 'timestamp' })
  fecha: Date;

  @Column({ type: 'int' })
  id_adn: number;
}
