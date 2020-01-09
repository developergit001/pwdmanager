import React, { useState, useEffect } from "react";
import { useStore, useActions } from "easy-peasy";
import './style.scss';

const Modal = ({isModal}) => {
  const currentItem = useStore(state => state.currentItem);
  const addItem = useActions(actions => actions.addItem);

  const [title, setTitle] = useState(currentItem.title); //Valor por defecto en variable title => ""
  const [field, setField] = useState(currentItem.field); //Valor por defecto en variable field => ""
  const [valuefield, setValue] = useState(currentItem.value); //Valor por defecto en variable valuefield => ""

  const titleChange = (e) => {
    setTitle(e.target.value);
  }
  const fieldChange = (e) => {
    setField(e.target.value);
  }
  const valueChange = (e) => {
    setValue(e.target.value);
  }
  
  const saveClick = () => {
    const obj = {title,field,valuefield}
    addItem(obj);
  };

  useEffect(

    () => {
        console.log('currentItem',currentItem);
        setTitle(currentItem.title);
        setField(currentItem.field);
        setValue(currentItem.value);
    },
    [isModal]

  );


  const classModal = (isModal)?"modal modal--show":"modal modal--hide";



  return (
    <div className={classModal} >
       <div className="modal__form" > 
            <div className="modal__row" >
  <div className="modal__row-left" >Titulo {currentItem.title}</div>
                <div className="modal__row-right" >
                    <input className="modal__row-right-input" 
                    onChange={titleChange} 
                    value={title} 
                    />
                </div>
            </div>
            <div className="modal__row" >
                <div className="modal__row-left" >Campo</div>
                <div className="modal__row-right" >
                    <input className="modal__row-right-input" 
                    onChange={fieldChange} 
                    value={field}                     
                    />
                </div>
            </div>
            <div className="modal__row" >
                <div className="modal__row-left" >Valor</div>
                <div className="modal__row-right" >
                    <input className="modal__row-right-input" 
                    onChange={valueChange} 
                    value={valuefield}                      
                    />
                </div>
            </div>
            <div className="modal__row modal__row--buttons" >
                <input type="button" className="modal__row-send-input" 
                onClick={saveClick}  
                value="Enviar" />
            </div>
       </div>
    </div>
  );
};

export default Modal;