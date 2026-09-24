import { Modelo } from "./modelo.js";

const esquemaPlan = {
  nombre: { tipo: "string", requerido: true },
  duracion_semanas: { tipo: "number", requerido: true, min: 1 },
  metas_fisicas: { tipo: "string", requerido: false },
  nivel: {
    tipo: "string",
    requerido: true,
    valores: ["principiante", "intermedio", "avanzado"],
  },
  precio: { tipo: "number", requerido: true, min: 0 },
};

export class Plan extends Modelo {
  constructor(datos) {
    super(datos, esquemaPlan);
  }
}