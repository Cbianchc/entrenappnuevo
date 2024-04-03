import React, { useState } from "react";
import "./SearchBar.css";
// import SearchIcon from '@mui/icons-material/Search';
// import CloseIcon from '@mui/icons-material/Close';
// import Search from "@mui/icons-material/Search";

function SearchBar({ placeholder, data, handleLinkClick  }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  const handleClick = (event, link) => {
    event.preventDefault(); // Evitar la apertura de una nueva página
    handleLinkClick(link); // Llamar a la función para manejar el enlace
    handleFilter({ target: { value: "" } }); // Limpiar el input
    clearInput(); // Limpiar las sugerencias
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" strokeWidth={1.5} stroke="currentColor" className="w-1 h-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            ) : ( 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" strokeWidth={1.5} stroke="currentColor" className="w-1 h-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" id="clearBtn" onClick={clearInput}/>
            </svg>  
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              // <a className="dataItem" href={value.link} target="_blank">
              //   <p>{value.title} </p>
              // </a>
              <div key={key} className="dataItem">
              <p onClick={(e) => handleClick(e, value.link)}>{value.title}</p>
            </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;



