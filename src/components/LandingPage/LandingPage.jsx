import { NuevaCardJuego } from "../CardJuego2/NuevaCardJuego"
import { CardJuego2 } from "../CardJuego2/CardJuego2"


export function LandingPage() {
    return(
        <div>
            <div className='titulo-container'>
                <h1 className='titulo-pagina'>Entrenapp</h1>
                <span className='aclaracion-pagina'>Una app para entrenar... EntrenApp.</span>
            
            </div>
            
            <div className='tarjetas-container'>
                <p id="comienzo-cards"
                className='titulo-sector-juegos'>ELEGÍ un juego crack...</p>
            </div>  
            <div  
            className='container-tarjetas-solitas'>
                <CardJuego2 
                    tituloJuego="Mp4vGp9/piedra-papel-tijera.png"
                    Nombre= "Piedra Papel o Tijera"
                    juegoId="juego-ppt"
                    descripcion="El clasico piedra papel o tijera, vas a tener 3 botones con cada eleccion (piedra papel o tijera). 
                    Haces click en el que quieras, despues la PC elije uno aleatorio. 
                    Ganar, perder o empatar dispara un ejercicio diferente para hacer."
                    />
                <CardJuego2 
                    tituloJuego="zFF6Pjj/this-or-that.png"
                    Nombre= "This or That"
                    juegoId="juego-tot"
                    descripcion="En pantalla vas a tener dos opciones, tenes que hacer click en la que elijas, tenes que eljir una si o si. En base a tu eleccion se dispara un ejercicio mas o menos intenso."
                    />
                <CardJuego2 
                    tituloJuego="LhbMw2H/preguntas1.jpg" 
                    Nombre="Preguntas"
                    juegoId="preguntas"
                    descripcion="Preguntas aleatorias de todo tipo con 4 opciones de respuesta, solo una es la correcta con un ejercicios facil de hacer, las demas, ejercicios mas dificiles..."
                    />    
                <CardJuego2 
                    tituloJuego="7XP9ph2/ahorcado.png" 
                    Nombre="Ahorcado"
                    descripcion="PROXIMAMENTE"
                    />
                <CardJuego2 
                    tituloJuego="p1Yt4Vb/yonunca.jpg" 
                    Nombre="Yo Nunca!"
                    descripcion="Serie de preguntas, vos respondes si lo hiciste o no, tu respuesta dispara un ejercicio diferente."
                    juegoId="nuncanunca"
                    />
                <CardJuego2 
                    tituloJuego="HgybcNn/misterybox.jpg" 
                    Nombre="Regalos"
                    descripcion="Primera prueba de juego de regalos"
                    juegoId="regalos"
                    />    
                <CardJuego2 
                    tituloJuego="27zsbYH/zoom-logo.png" 
                    Nombre="Zoom"
                    descripcion="Primera prueba del template para zoom"
                    juegoId="zoomtest"
                    />   
                        
            </div>
             

            <div className='firma'>
                <p>Creado con devocion por Ciro.</p>
            </div>
        </div>
    )
}