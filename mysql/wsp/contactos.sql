CREATE TABLE contactos (
	contacto_id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT NOT NULL UNIQUE,
    contacto_usuario_id INT NOT NULL UNIQUE,
    creado_en DATE DEFAULT CURRENT_DATE,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(usuario_id),
    FOREIGN KEY (contacto_usuario_id) REFERENCES usuarios(usuario_id)
)


/* Desarrollar el codigo SQL para poder insertar un contacto */

INSERT INTO `contactos`( `usuario_id`, `contacto_usuario_id`) VALUES (1,2)

DELETE FROM usuarios WHERE username = 'pepesito'