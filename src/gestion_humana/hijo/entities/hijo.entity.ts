import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'hijo', schema: 'gestion_humana' })
export class Hijo {
  @PrimaryGeneratedColumn({ name: 'id_hijo' })
  id_hijo: number;

  @Column({ name: 'nombre_hijo', length: 150 })
  nombre_hijo: string;

  @Column({ name: 'fecha_nacimiento', type: 'date' })
  fecha_nacimiento: Date;
}
