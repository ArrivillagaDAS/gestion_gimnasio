import { Cliente } from "../models/cliente.js";
import { ClienteRepository } from "./cliente-repository.js";

export class ClienteService {
  constructor() {
    this.repositorio = new ClienteRepository();
  }

  async crear(datos) {
    const cliente = new Cliente(datos);

    if (!cliente.esValido()) {
      return { exito: false, errores: cliente.errores };
    }

    const id = await this.repositorio.crear(cliente);
    return { exito: true, id };
  }

  async listarTodos() {
    return this.repositorio.listarTodos();
  }

  async buscarPorId(id) {
    return this.repositorio.buscarPorId(id);
  }

  async actualizar(id, datos) {
    const cliente = new Cliente(datos);

    if (!cliente.esValido()) {
      return { exito: false, errores: cliente.errores };
    }

    await this.repositorio.actualizar(id, cliente);
    return { exito: true };
  }

  async eliminar(id) {
    const existente = await this.repositorio.buscarPorId(id);

    if (!existente) {
      return { exito: false, errores: ["El cliente no existe."] };
    }

    await this.repositorio.eliminar(id);
    return { exito: true };
  }
}