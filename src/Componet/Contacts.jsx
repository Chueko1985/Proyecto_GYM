
import React, {useState}  from 'react';
import '../Style/Contacts.css';




function Contacts(){

    const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMensajeChange = (event) => {
    setMensaje(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log('Nombre y Apellido:', nombre);
    console.log('Email:', email);
    console.log('Mensaje:', mensaje);
    
    setNombre('');
    setEmail('');
    setMensaje('');
  };

    return(
        <>
        <div className='conteinerSaludar'>
         <h2>Contactanos</h2>

         <form onSubmit={handleSubmit}>
      <div className='nombre'>
        <label htmlFor="nombre">Nombre y Apellido:</label>
        <input
          type="text" id="nombre" value={nombre} onChange={handleNombreChange}/>
      </div>

      <div className='nombre'>
         <label htmlFor="email">Email:</label>

         <input type="email" id="email" value={email} onChange={handleEmailChange}/>

      </div>
      <div className='nombre'>
           <label htmlFor="mensaje">Mensaje:</label>
        <textarea id="mensaje" value={mensaje} onChange={handleMensajeChange}></textarea>
      </div>
      <button type="submit" id="btnEnviar">Enviar</button>
      
    </form>
        <br />
        <br />


        </div>
       

       

        </>
        

    );
}

export default Contacts;