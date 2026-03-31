export class ProcessEntradasPendientesAlmacenDto {
  entrada_pendiente: {
    id_entrada_pendiente: number;
    cantidad_a_registrar: number;
    fecha_registro: Date;
  };
  lote_producto: {
    nro_lote: string;
    fecha_ingreso: string;
    fecha_vencimiento: string;
    id_laboratorio: number;
    categoria_toxicologica: 'I' | 'II' | 'III' | 'IV' | 'No aplica';
    cantidad_disponible_lote: number;
  }[];
}
