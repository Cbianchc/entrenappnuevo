import "../CardJuego2/CardJuego2.css"
import React from "react"
import { Link } from 'react-router-dom';
import { PptPage } from "../LandingPage/PptPage";
// import { EntrarBotonCard } from "../EntrarBotonCard/EntrarBotonCard"

export function CardJuego2({ tituloJuego, Nombre, juegoId }) {
    const textoJuego = tituloJuego

    return(        
        <div className="card">
            
            <div class="card_image"> 
                <img src={`https://i.ibb.co/${tituloJuego}`} 
                    alt="imagenJuego" 
                    className="card__img"
                    /> 
                    <Link
                     to={juegoId} 
                     className="entrar-boton-card">
                        Entrar al juego
                    </Link>                   
            </div>
            
        </div>
    )
}