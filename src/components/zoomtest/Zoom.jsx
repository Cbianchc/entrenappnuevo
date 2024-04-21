import "../zoomtest/Zoom.css";
import { useState, useEffect } from "react";
import { BtnVolver } from "../btn-volver/BtnVolver.jsx"

import { db } from "../../data/firebase.jsx";
import {
  collection,
  getDocs,
  query,
  where,
  limit,
  doc,
  getDoc,
} from "firebase/firestore";
import SearchBar from "../PruebaNav/SearchBar.jsx";
import DataEjercicios from "./base-ejer.json";

export function Zoom() {
  const [linkToShow, setLinkToShow] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedExercise, setSelectedExercise] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(
          collection(db, "base-ejercicios-prueba"),
          where("titulo", "==", searchTerm),
          limit(5) 
        );
        const querySnapshot = await getDocs(q);
        const temasData = [];
        querySnapshot.forEach((doc) => {
          temasData.push(doc.data());
        });
        setSearchResults(temasData);
      } catch (error) {
        console.error("Error al cargar datos desde Firebase:", error);
      }
    };

    if (searchTerm) {
      fetchData();
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleExerciseSelection = async (exerciseId) => {
    try {
      const docRef = doc(db, "base-ejercicios-prueba", exerciseId);
      const docSnap = await getDoc(docRef);
      const selectedExerciseData = docSnap.data();
      setSelectedExercise(selectedExerciseData);
    } catch (error) {
      console.error("Error al obtener detalles del ejercicio:", error);
    }
  };

  const handleLinkClick = (link) => {
    setLinkToShow(link);
    console.log(linkToShow)
  };
  function renderizarLink(linkToShow) {
    return `${linkToShow}?modestbranding=1&rel=0`;
}

  return (
    <div className="container-zoom">
      <div className="container-videos">
        <section className="search-bar-ejer">
          <div className="barra-y-boton">
            <SearchBar 
              placeholder="Buscar ejercicio..." 
              data={DataEjercicios}
              handleLinkClick={handleLinkClick} />
            <BtnVolver />  
          </div>
          <div className="conteiner-video">
            {linkToShow && ( 
              <iframe
              height="100%"
              width="100%"
                src={linkToShow}
                // src={renderizarLink}
                // src="https://www.youtube.com/embed/xjR270oPxPs?modestbranding=1&rel=0"
                title="YouTube video player"
                // allowFullScreen
              />
                )}  
          </div>    
        </section>

        {/* <section className="search-bar-timer">
          <div className="area-timer">
            <input
              type="text"
              placeholder="Buscar ejercicio..."
              value={() => {}}
              onChange={() => {}}
              className="search-bar-2"
            />
            <div className="conteiner-timer">
              <iframe
                width="70%"
                height="70%"
                src="https://player.vimeo.com/video/528810971?h=e2da568451"
                title="YouTube video player"
                allowfullscreen
              />
            </div>
          </div>
          <section className="area-boton">
            <span>Aca va mi camara</span>
            <BtnVolver />
          </section>
        </section> */}

      </div>
    </div>
  );
}
