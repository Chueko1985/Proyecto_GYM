import React from "react";
import "../Videos/videos.js"
import videos from "../Videos/videos.js";
import "../Style/Article.css"


function Article (){
    return (
    <>
    <div className="conteinerArticle">
            <video autoPlay loop muted>
                <source src={videos.video}  type="video/mp4" />
            </video>
        <div className="article">
            <h1>Pro Atlhetic</h1>
            <br />
            <p>Nos Comprometemos a desarrollar tu mejor vercion, brindamos entrenamientos personalizados
                con seguimientos en cada Ejesicio a realizar. Contamos con planificaciones individuales y 
                entrenamientos grupales.
            </p>
            <br />
            <br />
            <h2>Preparaciones</h2>
            <br />
            <p>Entrenamos a atletas para Competisiones, Deportistas para mejorar su rendimiento indivudual en su diciplina.</p>
        </div>

    </div>

    </>

    )
}
export default Article;