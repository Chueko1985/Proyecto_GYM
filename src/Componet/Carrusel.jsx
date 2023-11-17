import React from 'react';

import '../Image/img.js';

import "../Style/Carrusel.css"
import img from '../Image/img.js';

import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
    return (
      <Carousel className='contenido'>
        <Carousel.Item>
          <img
            className="d-block w-100 imagen-carrusel"
           src={img.gym6} 
          />
          <Carousel.Caption>
            <h3>Entrenamientos Grupales</h3>
            <p>Si querias probar algo nuevo, con este tipo de entrenamientos te haras de nuevos amigos y en equipo lograr metas </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 imagen-carrusel"
            src={img.gym7} 
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>El Mejor Lugar Para Entrenar</h3>
            <p>Contamos los elementos necesarios para llegar a tu mejor versión</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 imagen-carrusel"
            src={img.gym8} 
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Entrenamientos Personalizados</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default UncontrolledExample;