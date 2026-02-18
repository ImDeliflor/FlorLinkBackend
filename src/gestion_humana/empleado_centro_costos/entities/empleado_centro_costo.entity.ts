import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'empleado_centro_costos', schema: 'gestion_humana' })
export class EmpleadoCentroCostos {
  @PrimaryColumn({ name: 'id_empleado', type: 'int' })
  id_empleado: number;

  @PrimaryColumn({ name: 'id_centro_costos', type: 'int' })
  id_centro_costos: number;

  @Column({ name: 'porc_impacto', type: 'int' })
  porc_impacto: number;
}
