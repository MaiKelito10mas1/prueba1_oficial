export type Sigla = 'A' | 'B';

export interface Clase {
  sigla: Sigla;
  id: number;
}

export interface Alumno {
  nombre: string;
  apellido: string;
  rut: number;
  edad: number;
}
