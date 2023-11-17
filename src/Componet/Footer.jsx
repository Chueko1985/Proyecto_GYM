import React from 'react';
import '../Image/img.js';
import '../Style/Footer.css';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import img from '../Image/img.js';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
   <div className='conteinerFooter'>
    <div className='pie-pagina'>
      <div className='box'>
        <figure>
          <Link to={"/"}><img src={img.img1} alt="" /></Link>
        </figure>
      </div>
      <div className='box'>
        <h2>SOBRE NOSOTROS</h2>
      <p>Nuestros programas de entrenamiento personales siguen la modalidad de CROSSFIT , el mismo va a estar adaptado a las necesidades, capacidades y condición física de cada persona. Esta dirigido hacia aquellos que tengan el deseo de ser guiados hacia las bases principales de un entrenamiento eficaz, buscando mejorar su calidad de vida y rendimiento.</p>
       <p>Uno de nuestros principales objetivos es implementar la concientizacion de la actividad física para la salud del ser humano,así también como su disfrute, diversión y aprendizaje.</p>
        
      </div>
      <div className='box'>
        <h2>SIGUENOS</h2>
        <div className='redSocial'>
          <a href="https://www.facebook.com" className='facebook'><FaFacebook/></a>
          <a href="https://www.twitter.com"><FaTwitter/></a>
          <a href="https://www.youtube.com"><FaYoutube/></a>
          <a href="https://www.instagram.com"><FaInstagram/></a>
        </div>
      </div>
    </div>
    <div className='grupoDos'> 
      <small>&copy; 2023 <b>Pro Athletic</b> Todos Los Derechos Reservados.</small>
    </div>


    
   </div>
  )
}

export default Footer