import { Modelo } from "./modelo.js";

const esquemaPlanAlimentacion = {
  contrato_id: { tipo: "number", requerido: true },
  nombre: { tipo: "string", requerido: true },
  fecha_inicio: { tipo: "string", requerido: true },
  fecha_fin: { tipo: "string", requerido: false },
};

export class PlanAlimentacion extends Modelo {
  constructor(datos) {
    super(datos, esquemaPlanAlimentacion);
  }
}