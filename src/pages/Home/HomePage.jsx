import React, { useState } from "react";
import "./HomePage.css"
import { Search } from "./components/Search/Search";
import { PlayerTable } from "./components/PlayerTable/PlayerTable";

import datosPlayers from "../../data/players.json"

export const HomePage = () => {

  const [Players, setDatosPersona] = useState(datosPlayers)

  const [classB, setClass] = useState('table__row');

  const [valor, setValor] = useState(6);

  const [valorI, setValorI] = useState(0);

  const cambiarclassPar = () => {
    setClass((prevClase) => (prevClase === 'table__row' ? 'table__row pares' : 'table__row'));
  };
  const cambiarclassImpar = () => {
    setClass((prevClase) => (prevClase === 'table__row' ? 'table__row impares' : 'table__row'));
  }

  const handleClick = (funcion) => {
    funcion();
  };

  const cambiarValor10 = () => {
    setValor((prevClase) => (prevClase === 6 ? 10 : 6));
  };
  const cambiarValor20 = () => {
    setValor((prevClase) => (prevClase === 6 ? 20 : 6));
    setValorI((prevClase2) => (prevClase2 === 0 ? 10 : 0));
  };

  const buscarPersonas = (filtro) => {
    // Filtra las personas basándose en el nombre
    const personasFiltradas = datosPlayers.filter(
      (persona) => persona.player.toLowerCase().includes(filtro.toLowerCase())
    );

    setDatosPersona(personasFiltradas);
  };

  return (
    <section className="home">
      <h1 className="home__title">Roster</h1>
      <Search onBuscar={buscarPersonas}></Search>
      <div className="home__buttons">
        <button className="home__button" onClick={() => handleClick(cambiarclassPar)}>Pintar Pares</button>
        <button className="home__button" onClick={() => handleClick(cambiarclassImpar)}>Pintar Impares</button>
        <button className="home__button" onClick={cambiarValor10}>Traer de 1 a 10</button>
        <button className="home__button" onClick={cambiarValor20}>Traer de 11 a 20</button>
      </div>
      <PlayerTable classB={classB} valor={valor} valorI={valorI} Players={Players}></PlayerTable>
    </section>
  );
};
