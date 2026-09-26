import { pool } from "../config/database.js";

export class ClienteRepository {
  async crear(cliente) {
    const [resultado] = await pool.query(
      `INSERT INTO clientes (nombre, apellido, email, telefono, fecha_nacimiento)
       VALUES (?, ?, ?, ?, ?)`,
      [cliente.nombre, cliente.apellido, cliente.email, cliente.telefono, cliente.fecha_nacimiento]
    );
    return resultado.insertId;
  }

  async listarTodos() {
    const [filas] = await pool.query("SELECT * FROM clientes");
    return filas;
  }

  async buscarPorId(id) {
    const [filas] = await pool.query("SELECT * FROM clientes WHERE id = ?", [id]);
    return filas[0] || null;
  }

  async actualizar(id, cliente) {
    await pool.query(
      `UPDATE clientes SET nombre = ?, apellido = ?, email = ?, telefono = ?, fecha_nacimiento = ?
       WHERE id = ?`,
      [cliente.nombre, cliente.apellido, cliente.email, cliente.telefono, cliente.fecha_nacimiento, id]
    );
  }

  async eliminar(id) {
    await pool.query("DELETE FROM clientes WHERE id = ?", [id]);
  }
}