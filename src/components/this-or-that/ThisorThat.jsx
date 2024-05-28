import "../this-or-that/ThisorThat.css"
import { BtnVolver } from "../btn-volver/BtnVolver"
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

export function ThisorThat (){
    const [mostrarEjer, setMostrarEjer] = useState(false)
    const [eventoClick, setEventoClick] = useState(null)
    const [foto1, setImagen1] = useState("")
    const [foto2, setImagen2] = useState("")
    const [opcion1, setOpcion1] = useState("")
    const [opcion2, setOpcion2] = useState("")
    const [result, setResult] = useState("")

    const [tema, setTema] = useState([])
    
    const MySwal = withReactContent(Swal)
    const ejercicios = [
      " BURPEE",
      " JUMPING JACKS",
  ];

    useEffect(() => {
        const fetchData = async () => {
          try {
            const querySnapshot = await getDocs(collection(db, "thisothat-nuevo"));
            const temasData = [];
            querySnapshot.forEach((doc) => {
              temasData.push(doc.data());
            });
    
            // Obtén un elemento aleatorio de la lista
            const randomIndex = Math.floor(Math.random() * temasData.length);
            const randomTema = temasData[randomIndex];

            setOpcion1(randomTema.opcion1);
            setOpcion2(randomTema.opcion2);
            setImagen1(randomTema.imagen1);
            setImagen2(randomTema.imagen2);
            
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
      title: `${eventoClick}` + " = " + `${result}`,
      // html: `${result}`,
      // html: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/811825533?h=194e5b37a6&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="jumpjacks20sec1"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',  
      allowOutsideClick: 'false',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Listo, dame otro!',
      cancelButtonText: "Salir del juego",
      width: '60vw',
      
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload() 
        
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        window.location.href = '/'
      }
    })
  }
  //--------------------------------------Fin de Sweat allert
    return(
        <div className="container-tot">
             <section className="titulo-pregunta">
                <h2 className="titulo_preferis">¿Cuál preferís?</h2>
                <p className="p_haceclick">Hace click en una opcion, el ejercicio depende de tu eleccion 😎</p>
            </section>
            <section className="container_opciones">
                <div className="opcion1" onClick={() => handleClick(opcion1)}>
                <img src={foto1} id="foto1" alt="imagen1" />
                <div className="test-div-text">
                    <h4 id="titulo1" className="nombre-foto-1">
                        {opcion1}
                    </h4>
                </div>
                </div>

                <div className="opcion1" onClick={() => handleClick(opcion2)}>
                <img src={foto2} id="foto1" alt="imagen2" />
                <div className="test-div-text">
                    <h4 id="titulo1" className="nombre-foto-1">
                        {opcion2}
                    </h4>
                </div>
                </div>
            </section>
            <section className="boton_inicio">
                <BtnVolver />
            </section>

        </div>
    )
}