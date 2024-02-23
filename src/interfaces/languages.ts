export interface Language {
  inicial: Inicial;
  nivelIngles: NivelIngles;
  proyectos: Proyectos;
  formulario: Formulario;
}

export interface Proyectos {
  titulo: string;
  descripcion: string;
  inicio: string;
  chatpdf: ProyectoInfo;
  spotifyClone: ProyectoInfo;
  todoapp: ProyectoInfo;
  nextauth: ProyectoInfo;
}

export interface ProyectoInfo {
  titulo: string;
  descripcion: string;
}

export interface Formulario {
  titulo: string;
  description: string;
  button: string;
  errorNombre: string;
  errorEmail: string;
  placeholder: string;
}

export interface Inicial {
  saludo: string;
  nombre: string;
  descripcion: string;
  primerDato: string;
  segundoDato: string;
}

export interface NivelIngles {
  titulo: string;
  nivel: string;
}
