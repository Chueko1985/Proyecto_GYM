import React from "react";
import Header from "../Componet/Header";
import Article from "../Componet/Article";
import Carrusel from "../Componet/Carrusel.jsx"
import Section from "../Componet/Section.jsx"
import Contacts from "../Componet/Contacts.jsx"
import Footer from "../Componet/Footer.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Style/Home.css";



function Home() {
    return (
      <div  className="contenidoApp">
        
        
        <Article></Article>
        
        <Carrusel> </Carrusel>
        
        
        <Section></Section>
        
        
        
        
        
        
      </div>
    );
  }
  
  export default Home;
  