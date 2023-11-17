
import "../Style/Formm.css"
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

const Formulario = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    contacto: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes guardar el objeto formData en un archivo JSON o enviarlo a un servidor
    
    axios
  .post("http://localhost:5000/guardar_datos", formData)
  .then((response) => {
    console.log(response.data.message);
  })
  .catch((error) => {
    console.error("Error al enviar el formulario:", error);
  });

    
  console.log(formData);
  setFormData({ // Resetea el formulario después de guardar
    nombre: "",
    apellido: "",
    contacto: "",
  });
  };

  return (
    <div className="container">
      <h2>Formulario</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />

        <label htmlFor="apellido">Apellido:</label>
        <input
          type="text"
          id="apellido"
          name="apellido"
          value={formData.apellido}
          onChange={handleChange}
          required
        />

        <label htmlFor="contacto">Contacto:</label>
        <input
          type="text"
          id="contacto"
          name="contacto"
          value={formData.contacto}
          onChange={handleChange}
          required
        />
        <button type="submit" class="btn btn-primary">Guardar</button>
        
      </form>
    </div>
  );
};

export default Formulario;
