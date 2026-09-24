import { Modelo } from "./modelo.js";

const esquemaCliente = {
  nombre: { tipo: "string", requerido: true },
  apellido: { tipo: "string", requerido: true },
  email: {
    tipo: "string",
    requerido: true,
    formato: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  telefono: { tipo: "string", requerido: false },
  fecha_nacimiento: { tipo: "string", requerido: false },
};

export class Cliente extends Modelo {
  constructor(datos) {
    super(datos, esquemaCliente);
  }
}