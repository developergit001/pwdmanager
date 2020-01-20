import React, { useState, useEffect, Fragment } from "react";
import { useStore, useActions } from "easy-peasy";
import './style.scss';
import iconClose from '../../assets/close-x.png';
import iconoLoading from '../../assets/Rolling-1s-200px.svg';
import PickColor from '../misc/pickcolor.js';

const Modal = ({isModal,hasError}) => {
  const currentItem = useStore(state => state.currentItem);
  const addItem = useActions(actions => actions.addItem);
  const setModal = useActions(actions => actions.setModal);
  const setError = useActions(actions => actions.setError);

  const [title, setTitle] = useState(currentItem.title); //Valor por defecto en variable title => ""
  const [field, setField] = useState(currentItem.field); //Valor por defecto en variable field => ""
  const [valuefield, setValue] = useState(currentItem.value); //Valor por defecto en variable valuefield => ""
  const [thumb, setThumb] = useState(currentItem.thumb); //Valor por defecto en variable thumb
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
  const thumbChange = (e) => {
    setThumb(e.target.value);
  }
  const setClose = () => {
    setModal(false);
    setError(false);
  }
  const saveClick = () => {
    const obj = {"id":currentItem.id,"title":title,"field":field,"value":valuefield,"thumb":thumb}
    setLoading(true);
    addItem(obj);
  };

  useEffect(
    () => {
        console.log(currentItem.thumb);
        setLoading(false);
        setTitle(currentItem.title);
        setField(currentItem.field);
        setValue(currentItem.value);
        setThumb(currentItem.thumb);

        return () => {
          console.log("Unmounted!.");
        }
    },
    [isModal,currentItem]
  );

  let componentModal = null;
  let componentForm = null;

  if (!hasError){
    const classLoading = (loading)?"modal__row-send-img":"modal__row-send-img--hide";
    const classSend = (loading)?"modal__row-send-input--hide":"modal__row-send-input";
  
    componentForm = (
      <Fragment>

        <div className="modal__row" >
            <div className="modal__row-left" >Color</div>
            <div className="modal__row-right" >
              <PickColor />
            </div>
        </div>

        <div className="modal__row" >
          <div className="modal__row-left" >Titulo</div>
          <div className="modal__row-right" >
              <input className="modal__row-right-input"
              placeholder="Ingrese un título" 
              onChange={titleChange} 
              value={title} 
              />
          </div>
        </div>
        <div className="modal__row" >
            <div className="modal__row-left" >Campo</div>
            <div className="modal__row-right" >
                <input className="modal__row-right-input" 
                placeholder="Ingrese un campo" 
                onChange={fieldChange} 
                value={field}                     
                />
            </div>
        </div>
        <div className="modal__row" >
            <div className="modal__row-left" >Valor</div>
            <div className="modal__row-right" >
                <input className="modal__row-right-input" 
                placeholder="Ingrese un valor" 
                onChange={valueChange} 
                value={valuefield}                      
                />
            </div>
        </div>

        <div className="modal__row" >
            <div className="modal__row-left" >Miniatura</div>
            <div className="modal__row-right" >
                <input className="modal__row-right-input" 
                placeholder="Ej: #000000 - black - data:image/png;base64,iVB....." 
                onChange={thumbChange} 
                value={thumb}                      
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
      </Fragment>
    )
  } else {
    componentForm = (
      <Fragment>
        <div className="modal__message" >
          <div className="modal__message--big" >¡Ups!</div><br/>
          <div className="modal__message--medium" >Algo sali&oacute; mal</div><br/>
          <div className="modal__message--small" >verifique que su key y nombre de tabla sean v&aacute;lidas.</div>
        </div>
      </Fragment>
    )
  }

    componentModal = (
      (
        <div className="modal modal--show" >
            <div className="modal__close" >
              <div className="modal__close-x" >
                <img src={iconClose} className="modal__close-img" 
                onClick={setClose}
                alt="Cerrar" title="Cerrar" />
              </div>  
            </div>
            <div className="modal__form" >
              {componentForm}
            </div>
        </div>
      )
    )

  return componentModal;
};

export default Modal;