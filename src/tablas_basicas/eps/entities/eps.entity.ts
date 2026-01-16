import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'eps', schema: 'tablas_basicas' })
export class Eps {
  @PrimaryGeneratedColumn()
  id_eps: number;

  @Column({ length: 150 })
  nombre_eps: string;

  @Column({ type: 'boolean', default: true })
  estado_eps: boolean;
}
