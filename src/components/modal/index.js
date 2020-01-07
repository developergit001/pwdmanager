import React, { useState } from "react";
import { useActions } from "easy-peasy";
import './style.scss';

const Modal = () => {
  //const [filter, cleanFilter] = useState(""); //Valor por defecto en variable filter => ""
  //const searchText = useActions(actions => actions.searchText);
  
  /*
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
  */

  return (
    <div className="modal modal--hide" >
       <div className="modal__form" > 
            <div className="modal__row" >
                <div className="modal__row-left" >Titulo</div>
                <div className="modal__row-right" >
                    <input className="modal__row-right-input" value="" />
                </div>
            </div>
            <div className="modal__row" >
                <div className="modal__row-left" >Campo</div>
                <div className="modal__row-right" >
                    <input className="modal__row-right-input" value="" />
                </div>
            </div>
            <div className="modal__row" >
                <div className="modal__row-left" >Valor</div>
                <div className="modal__row-right" >
                    <input className="modal__row-right-input" value="" />
                </div>
            </div>
            <div className="modal__row modal__row--buttons" >
                <input type="button" className="modal__row-send-input" value="Enviar" />
            </div>
       </div>
    </div>
  );
};

export default Modal;