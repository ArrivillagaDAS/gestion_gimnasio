USE gimnasio_db;

-- bloque 1: clientes
CREATE TABLE clientes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  apellido VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  telefono VARCHAR(20),
  fecha_nacimiento DATE,
  fecha_registro DATE NOT NULL DEFAULT (CURRENT_DATE)
);

-- bloque 2: planes
CREATE TABLE planes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  duracion_semanas INT NOT NULL,
  metas_fisicas VARCHAR(255),
  nivel ENUM('principiante', 'intermedio', 'avanzado') NOT NULL,
  precio DECIMAL(10,2) NOT NULL
);

-- bloque 3: contratos
CREATE TABLE contratos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  cliente_id INT NOT NULL,
  plan_id INT NOT NULL,
  condiciones TEXT,
  precio DECIMAL(10,2) NOT NULL,
  fecha_inicio DATE NOT NULL,
  fecha_fin DATE NOT NULL,
  estado ENUM('activo', 'cancelado', 'finalizado') NOT NULL DEFAULT 'activo',
  FOREIGN KEY (cliente_id) REFERENCES clientes(id),
  FOREIGN KEY (plan_id) REFERENCES planes(id)
);

-- bloque 4: seguimientos
CREATE TABLE seguimientos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  contrato_id INT NOT NULL,
  fecha DATE NOT NULL,
  peso DECIMAL(5,2),
  grasa_corporal DECIMAL(5,2),
  medidas VARCHAR(255),
  foto VARCHAR(255),
  comentarios TEXT,
  FOREIGN KEY (contrato_id) REFERENCES contratos(id) ON DELETE CASCADE
);

-- bloque 5: planes_alimentacion
CREATE TABLE planes_alimentacion (
  id INT AUTO_INCREMENT PRIMARY KEY,
  contrato_id INT NOT NULL,
  nombre VARCHAR(100) NOT NULL,
  fecha_inicio DATE NOT NULL,
  fecha_fin DATE,
  FOREIGN KEY (contrato_id) REFERENCES contratos(id) ON DELETE CASCADE
);

-- bloque 6: alimentos_dia
CREATE TABLE alimentos_dia (
  id INT AUTO_INCREMENT PRIMARY KEY,
  plan_alimentacion_id INT NOT NULL,
  fecha DATE NOT NULL,
  comida VARCHAR(50) NOT NULL,
  alimento VARCHAR(150) NOT NULL,
  calorias INT NOT NULL,
  FOREIGN KEY (plan_alimentacion_id) REFERENCES planes_alimentacion(id) ON DELETE CASCADE
);

-- bloque 7: movimientos
CREATE TABLE movimientos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  tipo ENUM('ingreso', 'egreso') NOT NULL,
  categoria VARCHAR(100) NOT NULL,
  monto DECIMAL(10,2) NOT NULL,
  fecha DATE NOT NULL,
  descripcion VARCHAR(255),
  cliente_id INT,
  contrato_id INT,
  FOREIGN KEY (cliente_id) REFERENCES clientes(id),
  FOREIGN KEY (contrato_id) REFERENCES contratos(id)
);