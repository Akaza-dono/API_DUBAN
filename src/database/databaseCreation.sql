CREATE DATABASE TechnicalTest;
/c TechnicalTest;

BEGIN;

CREATE TABLE IF NOT EXISTS usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    correo VARCHAR(100),
    edad INT
);

INSERT INTO usuarios (nombre, correo, edad) VALUES
('Juan Pérez', 'juan.perez@example.com', 28),
('María González', 'maria.gonzalez@example.com', 34),
('Carlos Ramírez', 'carlos.ramirez@example.com', 40),
('Laura Torres', 'laura.torres@example.com', 25),
('Andrés Mejía', 'andres.mejia@example.com', 30);

COMMIT;