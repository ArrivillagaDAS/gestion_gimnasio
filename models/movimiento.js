import { Modelo } from "./modelo.js";

const esquemaMovimiento = {
  tipo: { tipo: "string", requerido: true, valores: ["ingreso", "egreso"] },
  categoria: { tipo: "string", requerido: true },
  monto: { tipo: "number", requerido: true, min: 0 },
  fecha: { tipo: "string", requerido: true },
  descripcion: { tipo: "string", requerido: false },
  cliente_id: { tipo: "number", requerido: false },
  contrato_id: { tipo: "number", requerido: false },
};

export class Movimiento extends Modelo {
  constructor(datos) {
    super(datos, esquemaMovimiento);
  }
}