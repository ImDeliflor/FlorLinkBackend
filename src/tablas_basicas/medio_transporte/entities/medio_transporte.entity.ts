import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'medio_transporte', schema: 'tablas_basicas' })
export class MedioTransporte {
  @PrimaryGeneratedColumn()
  id_medio_transporte: number;

  @Column({ length: 120 })
  nombre_medio_transporte: string;
}
