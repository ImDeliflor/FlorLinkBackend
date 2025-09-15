export class CreateEvaluacionDesempenioDto {
  id_grupo_evaluacion: number;
  id_evaluador: number;
  id_evaluado: number;
  id_enfoque_evaluacion: number;
  observaciones?: string;
}
