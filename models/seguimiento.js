import { Modelo } from "./modelo.js";

const esquemaSeguimiento = {
  contrato_id: { tipo: "number", requerido: true },
  fecha: { tipo: "string", requerido: true },
  peso: { tipo: "number", requerido: false, min: 0 },
  grasa_corporal: { tipo: "number", requerido: false, min: 0, max: 100 },
  medidas: { tipo: "string", requerido: false },
  foto: { tipo: "string", requerido: false },
  comentarios: { tipo: "string", requerido: false },
};

export class Seguimiento extends Modelo {
  constructor(datos) {
    super(datos, esquemaSeguimiento);
  }
}