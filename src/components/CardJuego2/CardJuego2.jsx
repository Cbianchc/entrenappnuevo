import "../CardJuego2/CardJuego2.css"
import React from "react"
import { Link } from 'react-router-dom';
import { PptPage } from "../LandingPage/PptPage";
// import { EntrarBotonCard } from "../EntrarBotonCard/EntrarBotonCard"

export function CardJuego2({ tituloJuego, Nombre, juegoId }) {
    const textoJuego = tituloJuego
    // const imageUrl = "{`https://i.ibb.co/${tituloJuego}`}"

    return(
        <div className="card-suprema">
            <div className="card_full">
                <Link to={juegoId} >
                    <img src={`https://i.ibb.co/${tituloJuego}`} 
                        alt="imagenJuego" 
                        width={280}
                        height={345}
                        className="card_img_nuevo"
                        /> 
                </Link>   
            </div>
            <h2 className='tituloCard'>{Nombre}</h2>
        </div>        
    )
}