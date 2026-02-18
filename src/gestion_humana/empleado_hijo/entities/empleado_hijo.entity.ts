import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'empleado_hijo', schema: 'gestion_humana' })
export class EmpleadoHijo {
  @PrimaryGeneratedColumn({ name: 'id_empleado_hijo' })
  id_empleado_hijo: number;

  @Column({ name: 'id_rol_familiar', type: 'int' })
  id_rol_familiar: number;

  @Column({ name: 'id_empleado', type: 'int' })
  id_empleado: number;

  @Column({ name: 'id_hijo', type: 'int' })
  id_hijo: number;
}
