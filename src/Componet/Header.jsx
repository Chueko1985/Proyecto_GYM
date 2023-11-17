import React from "react";
import '../Style/Header.css';
import { Link } from "react-router-dom";
import img from '../Image/img';




const Header = () => {
  return (
    
    <div className='contentHeder'>
     
      
        <div className='logo'>
      
      <nav className='Nav' id='menu'>
      <Link to={"/"}>
        <img src={img.img4} height={50} width={70}/>  
      </Link>
     
      <ul >
        <li ><Link to={"./SobreNosotros"}>Mas Sobre Nosotros</Link></li>
        <li><Link to={"/Inscripcion"}>Inscripcion</Link></li>
        <li><a href="s">horarios</a></li>
        <li><a href="https://pro-athletic.crosshero.site/">Turnos</a></li>
      </ul>
      </nav>

      </div>
     
      
      
    </div>
     
    
    

  )
}

export default Header

