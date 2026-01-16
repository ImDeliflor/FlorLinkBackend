import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'cargo', schema: 'tablas_basicas' })
export class Cargo {
  @PrimaryGeneratedColumn()
  id_cargo: number;

  @Column({ length: 100 })
  nombre_cargo: string;

  @Column()
  id_grupo: number;
}
