import React, { useState, useEffect } from "react";
import { useStore, useActions } from "easy-peasy";
import './style.scss';
import iconClose from '../../assets/close-x.png';
import iconoLoading from '../../assets/Rolling-1s-200px.svg';

const Modal = ({isModal}) => {
  const currentItem = useStore(state => state.currentItem);
  const addItem = useActions(actions => actions.addItem);
  const setModal = useActions(actions => actions.setModal);

  const [title, setTitle] = useState(currentItem.title); //Valor por defecto en variable title => ""
  const [field, setField] = useState(currentItem.field); //Valor por defecto en variable field => ""
  const [valuefield, setValue] = useState(currentItem.value); //Valor por defecto en variable valuefield => ""
  const [loading, setLoading] = useState(false);


  const titleChange = (e) => {
    setTitle(e.target.value);
  }
  const fieldChange = (e) => {
    setField(e.target.value);
  }
  const valueChange = (e) => {
    setValue(e.target.value);
  }
  const setClose = () => {
    setModal(false);
  }
  
  const saveClick = () => {
    const obj = {"id":currentItem.id,"title":title,"field":field,"value":valuefield}
    setLoading(true);
    addItem(obj);
  };

  useEffect(
    () => {
        setLoading(false);
        setTitle(currentItem.title);
        setField(currentItem.field);
        setValue(currentItem.value);
    },
    [isModal,currentItem]
  );

  const classModal = (isModal)?"modal modal--show":"modal modal--hide";
  const classLoading = (loading)?"modal__row-send-img":"modal__row-send-img--hide";
  const classSend = (loading)?"modal__row-send-input--hide":"modal__row-send-input";

  return (
    <div className={classModal} >
        <div className="modal__close" >
          <div className="modal__close-x" >
            <img src={iconClose} className="modal__close-img" 
            onClick={setClose}
            alt="Cerrar" title="Cerrar" />
          </div>  
        </div>
        <div className="modal__form" >
            <div className="modal__row" >
                <div className="modal__row-left" >Titulo</div>
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
            <div className="modal__row-sep" ></div>
            <div className="modal__row modal__row--buttons" >
                <img src={iconoLoading} className={classLoading} alt="Cargando..." />        
                <input type="button" className={classSend} 
                onClick={saveClick}  
                value="Enviar" />
            </div>
        </div>
    </div>
  );
};

export default Modal;