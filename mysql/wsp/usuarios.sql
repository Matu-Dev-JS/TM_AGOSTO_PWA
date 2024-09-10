CREATE TABLE usuarios (
	usuario_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(70) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    creado_en DATE DEFAULT CURRENT_DATE 
)


INSERT INTO usuarios ( username, password_hash, email) VALUES ('pepe', 'pepe123','pepe@gmail.com')


INSERT INTO `usuarios`(`username`, `email`, `password_hash`) 
VALUES 
('jose', 'jose@gmail.com', 'jose123'), 
('maria', 'maria@gmail.com', 'maria123')


UPDATE usuarios 
SET email = 'carlita@gmail.com'
WHERE usuario_id = 3


/* 
Crear a 
leonel
juan
Carlita

Eliminar a juan por su id

actualizar que carlita ahora se llame Carlota por el id de carlita

 */

/* Altera el nombre de mi table */
 ALTER TABLE usuarios RENAME TO uesers


/* 
Buscar al usuario con el nombre 'pepe' y traer su nombre, id, email y fecha de creacion
  */