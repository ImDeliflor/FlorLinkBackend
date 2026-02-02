import { CreatePreguntaDto } from 'src/gestion_humana/pregunta_evaluacion/dto/create-pregunta-evaluacion.dto';

export class ProcesarEvaluacionDto {
  // Evaluación de desempeño
  id_grupo_evaluacion: number;
  id_evaluador: number;
  id_evaluado: number;
  id_enfoque_evaluacion: number;
  observaciones?: string;

  // Preguntas de la evaluación
  preguntas: CreatePreguntaDto[];
}
