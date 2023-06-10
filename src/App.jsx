

import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Location from "./components/Location";
import ResidentInfo from "./components/ResidentInfo";
import React from "react";

function App() {
  const number = Math.round(Math.random() * 126) + 1;
  const [place, setPlace] = useState({});
  const [idRandom, setIdRandom] = useState(number);
  const [idRandom1, setIdRandom1] = useState("");
  const [arrayMorty, setArrayMorty] = useState([]);
  
  useEffect(() => {
    getdata ();
  }, [idRandom]);

  const getdata = () => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${idRandom}`)
      .then(resp => {
        console.log(resp.data)
        setPlace(resp.data)
        setArrayMorty(resp.data.residents)
      })
      .catch(error => console.error(error));
  };

  const searchId = () => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${idRandom1}`)
      .then(resp => {
          console.log(resp.data)
          setPlace(resp.data)
          setArrayMorty(resp.data.residents)
      })
      .catch(error => console.error(error));
    };

  return (
    <div className="App">
      <div className="icono">
        <img src="logo.svg" width={"500"} />
      </div>
      <div className="Contenedor-busqueda">
        <label htmlFor="search"></label>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Enter the location to search"
          value={idRandom1}
          onChange={(e) => setIdRandom1(e.target.value)}
        />
        <button className="Buscar" onClick={searchId}>
          Search
        </button>
      </div>
      <div className="Information">
        <Location data={place} />
      </div>
      <div className="ResidentInfo">
        {
          arrayMorty.map(resident => (
            <ResidentInfo 
            key={resident}
            url = {resident}
            />
            )
          )
        }
      </div>
    </div>
  );
}

export default App;









