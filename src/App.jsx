
import "./Style/App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Form } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import NotFoud from "./Pages/NotFound.jsx";
import Inscripcion from "./Pages/Inscripcion.jsx";
import Formm from "./Componet/Formm.jsx";
import List from "./Componet/List.jsx";
import SobreNosotros from "./Pages/SobreNosotros";
import Header from "./Componet/Header";
import Footer from "./Componet/Footer";


function App() {
  return (
   <Router>
     <Header></Header>
      <Routes>
          
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/SobreNosotros" element={<SobreNosotros></SobreNosotros>}></Route>
        <Route path="/List" element={<List></List>}></Route>
        <Route path="/Form" element={<Formm></Formm>}></Route>
        <Route path="/Inscripcion" element={<Inscripcion></Inscripcion>}></Route>
        <Route path="/*" element={<NotFoud></NotFoud>}></Route>

      </Routes>
      <Footer></Footer>
      
   </Router>
  );
}

export default App;
