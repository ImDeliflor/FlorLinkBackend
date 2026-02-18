import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'rol_familiar', schema: 'tablas_basicas' })
export class RolFamiliar {
  @PrimaryGeneratedColumn({ name: 'id_rol_familiar' })
  id_rol_familiar: number;

  @Column({ name: 'nombre_rol_familiar', type: 'varchar', length: 100 })
  nombre_rol_familiar: string;
}
