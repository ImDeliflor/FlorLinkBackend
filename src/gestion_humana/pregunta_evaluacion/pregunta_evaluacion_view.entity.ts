import { ViewEntity, ViewColumn, PrimaryColumn } from 'typeorm';

@ViewEntity({
  name: 'informe_evaluaciones_desempenio_v',
  schema: 'gestion_humana_views',
})
export class EvaluacionesDesempenioReport {
  @PrimaryColumn()
  id_pregunta: number;

  @ViewColumn()
  grupo: string;

  @ViewColumn()
  id_evaluador: number;

  @ViewColumn()
  evaluador: string;

  @ViewColumn()
  id_evaluado: number;

  @ViewColumn()
  evaluado: string;

  @ViewColumn()
  enfoque: string;

  @ViewColumn()
  adn: string;

  @ViewColumn()
  pregunta: string;

  @ViewColumn()
  calificacion: number;

  @ViewColumn()
  observaciones: string;

  @ViewColumn()
  fecha: Date;
}
