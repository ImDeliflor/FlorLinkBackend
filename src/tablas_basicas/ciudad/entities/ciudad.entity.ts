import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'ciudad', schema: 'tablas_basicas' })
export class Ciudad {
  @PrimaryGeneratedColumn()
  id_ciudad: number;

  @Column({ length: 100 })
  nombre_ciudad: string;

  @Column()
  id_departamento: number;
}
