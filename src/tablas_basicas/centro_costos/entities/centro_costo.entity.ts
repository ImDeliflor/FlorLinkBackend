import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'centro_costos', schema: 'tablas_basicas' })
export class CentroCosto {
  @PrimaryGeneratedColumn()
  id_centro_costos: number;

  @Column()
  nombre_centro_costos: string;
}
