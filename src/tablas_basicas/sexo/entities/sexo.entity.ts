import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'sexo', schema: 'tablas_basicas' })
export class Sexo {
  @PrimaryGeneratedColumn()
  id_sexo: number;

  @Column({ length: 10 })
  codigo: string;

  @Column({ length: 100 })
  descripcion: string;
}
