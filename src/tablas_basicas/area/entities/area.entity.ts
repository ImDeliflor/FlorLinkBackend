import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'area', schema: 'tablas_basicas' })
export class Area {
  @PrimaryGeneratedColumn()
  id_area: number;

  @Column({ length: 100 })
  nombre_area: string;
}
