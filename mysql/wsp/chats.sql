CREATE TABLE chats(
	chat_id INT PRIMARY KEY AUTO_INCREMENT,
    enviado_por INT NOT NULL,
    recibido_por INT NOT NULL,
    mensaje TEXT NOT NULL,
    creado_en DATE DEFAULT CURRENT_DATE,
    FOREIGN KEY (enviado_por) REFERENCES usuarios(usuario_id),
    FOREIGN KEY (recibido_por) REFERENCES usuarios(usuario_id)
)

/* Desarrollar el codigo SQL para poder insertar un chat */