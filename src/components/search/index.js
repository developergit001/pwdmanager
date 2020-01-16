import React, { useState } from "react";
import { useActions } from "easy-peasy";
import './style.scss';
import iconoSearch from '../../assets/active-search.svg';
import iconoKey from '../../assets/changekey.png';

const Search = () => {
  const [filter, cleanFilter] = useState(""); //Valor por defecto en variable filter => ""
  const searchText = useActions(actions => actions.searchText);
  const resetItems = useActions(actions => actions.resetItems);
  const setItem = useActions(actions => actions.setItem);
  const setModal = useActions(actions => actions.setModal);
  
  const textoChange = (e) => {
    let texto = e.target.value;
    if (texto === ""){
        resetItems();
        cleanFilter("");
    }
    else {
        searchText(e.target.value);
        cleanFilter(e.target.value);
    }
  };
  const limpiarClick = () => {
    cleanFilter("");
    resetItems();
  };
  const addClick = () => {
    setItem({"id":"","title":"","field":"","value":"","thumb":""});
    setModal(true);
  };
  return (
    <div className="searchbar" >
        <div className="searchbar__left">
            <img src={iconoSearch} alt="Búsqueda de datos" title="Búsqueda de datos" />
        </div>
        <div className="searchbar__middle" >
            <input className="searchbar__middle-input"
                type="text" value={filter}
                onChange={textoChange} 
                placeholder="Texto a buscar..."
            />
        </div>
        <div className="searchbar__right" >
            <input className="searchbar__right-input"
                type="button" 
                onClick={limpiarClick} 
                value="Limpiar texto" 
            />
        </div>
        <div className="searchbar__right-add" onClick={addClick} >+</div>
        <div className="searchbar__right-changekey">
            <img src={iconoKey} className="searchbar__rigth-img-changekey" 
            alt="cambiar key de Airtable y contraseña" 
            title="cambiar key de Airtable y contraseña" />
        </div>        
    </div>
  );
};

export default Search;