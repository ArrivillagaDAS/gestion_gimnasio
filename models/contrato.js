import { Modelo } from "./modelo.js";

const esquemaContrato = {
  cliente_id: { tipo: "number", requerido: true },
  plan_id: { tipo: "number", requerido: true },
  condiciones: { tipo: "string", requerido: false },
  precio: { tipo: "number", requerido: true, min: 0 },
  fecha_inicio: { tipo: "string", requerido: true },
  fecha_fin: { tipo: "string", requerido: true },
  estado: {
    tipo: "string",
    requerido: false,
    valores: ["activo", "cancelado", "finalizado"],
  },
};

export class Contrato extends Modelo {
  constructor(datos) {
    super(datos, esquemaContrato);
  }
}