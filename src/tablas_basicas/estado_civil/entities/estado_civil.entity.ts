import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'estado_civil', schema: 'tablas_basicas' })
export class EstadoCivil {
  @PrimaryGeneratedColumn()
  id_estado_civil: number;

  @Column({ length: 100 })
  nombre_estado_civil: string;
}
