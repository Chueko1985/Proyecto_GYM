
// frontend/src/components/ListaInscripciones.js
import React, { useState, useEffect } from "react";

const List = () => {
  const [inscripciones, setInscripciones] = useState([]);

  useEffect(() => {
    async function fetchInscripciones() {
      try {
        const response = await fetch("/inscripciones");

        if (response.ok) {
          const data = await response.json();
          setInscripciones(data);
        } else {
          console.error("Error al obtener las inscripciones");
        }
      } catch (error) {
        console.error("Error al enviar la solicitud:", error);
      }
    }

    fetchInscripciones();
  }, []);

  return (
    <div>
      <h2>Lista de Inscripciones</h2>
      <ul>
        {inscripciones.map((inscripcion, index) => (
          <li key={index}>
            <strong>Nombre:</strong> {inscripcion.nombre} {inscripcion.apellido}, <strong>Teléfono:</strong> {inscripcion.telefono}, <strong>Entrenamiento:</strong> {inscripcion.entrenamiento}
            {inscripcion.mensaje && <><br /><strong>Mensaje:</strong> {inscripcion.mensaje}</>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
