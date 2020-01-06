import React, { useState } from "react";
import { useActions } from "easy-peasy";
import './style.scss';
import iconoSearch from '../../assets/active-search.svg';

const Search = () => {
  const [filter, cleanFilter] = useState("");

  const searchText = useActions(actions => actions.searchText);
  const resetItems = useActions(actions => actions.resetItems);
  
  return (
    <div className="searchbar" >
        <div className="searchbar__left">
            <img src={iconoSearch} alt="Búsqueda de datos" title="Búsqueda de datos" />
        </div>
        <div className="searchbar__middle" >
            <input className="searchbar__middle-input"
                type="text" value={filter}
                onChange={e => {
                    let texto = e.target.value;
                    if (texto === ""){
                        resetItems();
                        cleanFilter("");
                    }
                    else {
                        searchText(e.target.value);
                        cleanFilter(e.target.value);
                    }
                }}
                placeholder="Texto a buscar..."
            />
        </div>
        <div className="searchbar__right" >
            <input className="searchbar__right-input"
                type="button" 
                onClick={e => {
                cleanFilter("");
                resetItems();
                }} 
                value="Limpiar texto" 
            />
        </div>    
    </div>
  );
};

export default Search;