const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());

// Configuración de la conexión a la base de datos MySQL
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "micuentagenius123456789",
  database: "registrosGym",
});

// Conexión a la base de datos
connection.connect((err) => {
  if (err) {
    console.error("Error al conectar a la base de datos:", err);
  } else {
    console.log("Conexión exitosa a la base de datos MySQL");
  }
});

// Ruta para recibir los datos del formulario
app.post("/guardar_datos", (req, res) => {
  const { nombre, apellido, contacto } = req.body;

  // Guardar los datos en la base de datos
  const sql = "INSERT INTO tabla_de_datos (nombre, apellido, contacto) VALUES (?, ?, ?)";
  connection.query(sql, [nombre, apellido, contacto], (err, result) => {
    if (err) {
      console.error("Error al guardar los datos en la base de datos:", err);
      res.status(500).json({ error: "Error al guardar los datos en la base de datos" });
    } else {
      console.log("Datos guardados exitosamente");
      res.status(200).json({ message: "Datos guardados exitosamente" });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
