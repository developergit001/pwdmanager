import React, { Fragment } from "react";
import Item from "./item";
import iconoLoading from '../../assets/Rolling-1s-200px.svg';
import './style.scss';

const List = (props) => {
  const isEmpty = props.items.records.length === 0;
  const isLoading = props.isLoading;

  if (isLoading){
    return(
      <Fragment>
        <div className="is-loading">
          <img src={iconoLoading} alt="Cargando..." />
        </div>
      </Fragment>
    );
  }
  else if (isEmpty)
  return(
    <Fragment>
      <div className="no-results">
        Sin resultados
      </div>
    </Fragment>
  );
  else 
  return (
        <Fragment>
          <div className="lista" >
            {
            props.items.records.map(item => (
            <Item key={item.id} item={item} />
            ))
            }
          </div>
        </Fragment>
  );  

};

export default List;