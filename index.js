import { pool } from "./config/database.js";

const [filas] = await pool.query("SELECT 1 + 1 AS resultado");
console.log(filas);

await pool.end();