export class Modelo {
  constructor(datos, esquema) {
    this.errores = [];
    this.validar(datos, esquema);
  }

  validar(datos, esquema) {
    for (const campo in esquema) {
      const regla = esquema[campo];
      const valor = datos[campo];

      // 1. Requerido
      if (regla.requerido && (valor === undefined || valor === null || valor === "")) {
        this.errores.push(`El campo "${campo}" es obligatorio.`);
        continue;
      }

      // Si no es requerido y no vino, no seguimos validando
      if (valor === undefined || valor === null || valor === "") continue;

      // 2. Tipo de dato
      if (regla.tipo === "string" && typeof valor !== "string") {
        this.errores.push(`El campo "${campo}" debe ser texto.`);
      }
      if (regla.tipo === "number" && typeof valor !== "number") {
        this.errores.push(`El campo "${campo}" debe ser un número.`);
      }

      // 3. Formato con expresión regular (ej. email)
      if (regla.formato && !regla.formato.test(valor)) {
        this.errores.push(`El campo "${campo}" tiene un formato inválido.`);
      }

      // 4. Rango (para números)
      if (regla.min !== undefined && valor < regla.min) {
        this.errores.push(`El campo "${campo}" debe ser mayor o igual a ${regla.min}.`);
      }
      if (regla.max !== undefined && valor > regla.max) {
        this.errores.push(`El campo "${campo}" debe ser menor o igual a ${regla.max}.`);
      }

      // 5. Valores permitidos (para ENUM)
      if (regla.valores && !regla.valores.includes(valor)) {
        this.errores.push(`El campo "${campo}" debe ser uno de: ${regla.valores.join(", ")}.`);
      }

      this[campo] = valor;
    }
  }

  esValido() {
    return this.errores.length === 0;
  }
}