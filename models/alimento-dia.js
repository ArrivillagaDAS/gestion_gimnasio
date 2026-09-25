import { Modelo } from "./modelo.js";

const esquemaAlimentoDia = {
  plan_alimentacion_id: { tipo: "number", requerido: true },
  fecha: { tipo: "string", requerido: true },
  comida: { tipo: "string", requerido: true },
  alimento: { tipo: "string", requerido: true },
  calorias: { tipo: "number", requerido: true, min: 0 },
};

export class AlimentoDia extends Modelo {
  constructor(datos) {
    super(datos, esquemaAlimentoDia);
  }
}