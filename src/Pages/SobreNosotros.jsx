import React from 'react'
import "../Style/SobreNosotros.css";
import Header from "../Componet/Header.jsx";
import Footer from '../Componet/Footer';
import videos from '../Videos/videos';
 function SobreNosotros() {
  return (
    <>
    <div className='fondo'>
    
     <div className='conteiner'>
     
        <div className='section'> 
            <h1>Vision</h1>
         <p>Nuestra visión es brindarte un programa de entrenamiento 
            personal acondicionado y adaptado a las condiciones que se 
            lleguen a presentar ya sea en la persona o en el lugar físico 
            donde se llevara a cabo nuestro entrenamiento. Que él mismo esté 
            al alcance de todo aquel que este dispuesto a generar un cambio 
            en su vida. Queremos crear un espacio cómodo para todos, el cual 
            se lo adopte como una segunda casa, buscando establecer una comunidad 
            donde predominen valores que nos vuelvan mejores personas.
         </p>
         <h1>Misión</h1>
         <p>nuestra visión es brindarte un programa de entrenamiento personal 
            acondicionado y adaptado a las condiciones que se lleguen a presentar 
            ya sea en la persona o en el lugar físico donde se llevara a cabo nuestro
             entrenamiento. Que el mismo este al alcance de todo aquel que este dispuesto 
             a generar un cambio en su vida. Queremos crear un espacio cómodo para 
             todos, el cual se lo adopte como una segunda casa buscando establecer 
             una comunidad donde predominen valores, que nos vuelvan mejores personas.</p>
             <h1>Nuestros Valores</h1>
             <p>HUMILDAD-RESPETO-EMPATIA-COMPROMISO</p>
      </div>
     </div>
     
     </div>
    </>
  )
}
export default SobreNosotros;

