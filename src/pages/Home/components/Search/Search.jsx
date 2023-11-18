import React, { useState  } from "react";
import "./Search.css"

export const Search = ({ onBuscar  }) => {
  const [filtroNombre, setFiltroNombre] = useState("");

  const handleInputChange = (event) => {
    setFiltroNombre(event.target.value);
    onBuscar(event.target.value); // Llama a la función de búsqueda en el componente padre
  };

  return (
		<div>
			<input type="text" value={filtroNombre} onChange={handleInputChange} placeholder="Buscar por nombre de jugador.." className="home__search"/>
		</div>
  );
};