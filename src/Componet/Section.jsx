import React, {useState} from 'react';

import '../Style/Section.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../Image/img.js';






const Section = () => {

  const [noMostrar, setNoMostrar] =useState(true);
  const [noMostrarDos, setNoMostrarDos] =useState(true);
  const [noMostrarTres, setNoMostrarTres] =useState(true);

  const mostrar = ()=>{
    setNoMostrar(!noMostrar);
  }

  

  const mostrarDos = ()=>{
    setNoMostrarDos(!noMostrarDos);
  }

  

  const mostrarTres = ()=>{
    setNoMostrarTres(!noMostrarTres);
  }


  return (
    <div>
      <section className='conteinerSection'>
         
         <div className='artiicle'>
          <img src={img.imgPro} style={{ width: '100%' }}></img>
          <h2> MASTER PRO</h2>
          <p>{ noMostrar ? 'Esta programación esta dirigida hacia los mayores de 35 años en adelante. Buscamos fortalecer los músculos y condición física para continuar haciendo sus tareas del diario vivir sin tener que depender de otros.' 
          : 'Esta programación esta dirigida hacia los mayores de 35 años en adelante. Buscamos fortalecer los músculos y condición física para continuar haciendo sus tareas del diario vivir sin tener que depender de otros. Esta programación tiene una duración de 90’ (minutos), proveemos programación de 3 o 5 días a la semana, esto dependerá de la condición física y objetivo de cada persona.'

           }</p>
           
           <button type="button" class="btn btn-primary button" onClick={mostrar}>{noMostrar ? 'Leer Mas' : 'leer Menos'}</button>
           
         </div>

         <div className='artiicle'>
          <img src={img.gym9} style={{ width: '100%' }}></img>
          <h2> Peso Muerto</h2>
          <p>{ noMostrarDos ? 'Esta programación esta dirigida hacia los mayores de 35 años en adelante. Buscamos fortalecer los músculos y condición física para continuar haciendo sus tareas del diario vivir sin tener que depender de otros.' 
          : 'Esta programación esta dirigida hacia los mayores de 35 años en adelante. Buscamos fortalecer los músculos y condición física para continuar haciendo sus tareas del diario vivir sin tener que depender de otros. Esta programación tiene una duración de 90’ (minutos), proveemos programación de 3 o 5 días a la semana, esto dependerá de la condición física y objetivo de cada persona.'

           }</p>
          
                <button type="button" class="btn btn-primary" onClick={mostrarDos}>{noMostrarDos ? 'Leer Mas' : 'leer Menos'}</button>
           
         </div>
         
         <div className='artiicle'>
          <img src={img.gym9} style={{ width: '100%' }}></img>
          <h2> Peso Muerto</h2>
          <p>{ noMostrarTres ? 'Esta programación esta dirigida hacia los mayores de 35 años en adelante. Buscamos fortalecer los músculos y condición física para continuar haciendo sus tareas del diario vivir sin tener que depender de otros.' 
          : 'Esta programación esta dirigida hacia los mayores de 35 años en adelante. Buscamos fortalecer los músculos y condición física para continuar haciendo sus tareas del diario vivir sin tener que depender de otros. Esta programación tiene una duración de 90’ (minutos), proveemos programación de 3 o 5 días a la semana, esto dependerá de la condición física y objetivo de cada persona.'

           }</p>
           
          <button type="button" class="btn btn-primary button" onClick={mostrarTres}>{noMostrarTres ? 'Leer Mas' : 'leer Menos'}</button>
          
         </div>

      </section>

        
    </div>
  )
}

export default Section