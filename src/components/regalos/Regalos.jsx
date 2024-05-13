import "../regalos/Regalos.css"
import { BtnVolver } from "../btn-volver/BtnVolver.jsx"
import { useState, useEffect } from "react"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

import { db } from "../../data/firebase.jsx"
import {
    collection,
    getDocs,
    doc,
    getFirestore,
    query,
    orderBy,
    limit,
  } from "firebase/firestore";

export function Regalos (){
    const [mostrarEjer, setMostrarEjer] = useState(false)
    const [eventoClick, setEventoClick] = useState(null)
    const [foto1, setImagen1] = useState("")
    const [foto2, setImagen2] = useState("")
    const [foto3, setImagen3] = useState("")
    const [opcion1, setOpcion1] = useState("")
    const [opcion2, setOpcion2] = useState("")
    const [opcion3, setOpcion3] = useState("")

    const [tema, setTema] = useState([])
    
    const MySwal = withReactContent(Swal)
  //   const ejercicios = [
  //     " BURPEE",
  //     " JUMPING JACKS",
  // ];

    useEffect(() => {
        const fetchData = async () => {
          try {
            const querySnapshot = await getDocs(collection(db, "regalosAleatorios"));
            const temasData = [];
            querySnapshot.forEach((doc) => {
              temasData.push(doc.data());
            });
    
            // Obtén un elemento aleatorio de la lista
            const randomIndex = Math.floor(Math.random() * temasData.length);
            const randomTema = temasData[randomIndex];

            setOpcion1(randomTema.sobre1);
            setOpcion2(randomTema.sobre2);
            setOpcion3(randomTema.sobre3);

            setImagen1(randomTema.regalo1);
            setImagen2(randomTema.regalo2);
            setImagen3(randomTema.regalo3);
            
          } catch (error) {
            console.error("Error al cargar datos desde Firebase:", error);
          }
        };
    
        fetchData();
      }, []);
    
      

      function handleClick (opcion) {
        setEventoClick(opcion)
        setMostrarEjer(true)
        const randomIndex = Math.floor(Math.random() * ejercicios.length);
        const randomExercise = ejercicios[randomIndex];
        setResult(randomExercise);
    }

//---------------------------------------Dispara modal
if (mostrarEjer === true) {
    Swal.fire({
      imageUrl: `${eventoClick}`,
      allowOutsideClick: 'false',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Listo, dame otro!',
      cancelButtonText: "Salir del juego",
      width: '80vw',
      
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload() 
        
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        window.location.href = 'http://localhost:5173'
      }
    })
  }
  //--------------------------------------Fin de Sweat allert
    return(
        <div className="container-preguntas">
             <section className="titulo-regalo">
                <h2 className="titulo-texto">¿Elejí un regalo crack?</h2>
                <p className="hace-click-regalo">Hace click en una opcion 😎</p>
            </section>
            <section className="container_regalos">
                <div className="opciones-regalo" onClick={() => handleClick(opcion1)}>
                  <img src={foto1} id="foto-regalo" alt="imagen1" />
                </div>

                <div className="opciones-regalo" onClick={() => handleClick(opcion2)}>
                  <img src={foto2} id="foto-regalo" alt="imagen2" />
                </div>

                <div className="opciones-regalo" onClick={() => handleClick(opcion3)}>
                  <img src={foto3} id="foto-regalo" alt="imagen2" />
                </div>
            </section>
            <section className="boton_inicio">
                <BtnVolver />
            </section>

        </div>
    )
}