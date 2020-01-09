import React, { Fragment } from "react";
import { useActions } from "easy-peasy";
import './style.scss';

const Item = (props) => {
  const setItem = useActions(actions => actions.setItem);
  const setModal = useActions(actions => actions.setModal);

  const itemClick = () => {
    setItem({"id":props.item.id,"title":props.item.fields.title,"field":props.item.fields.field,"value":props.item.fields.value});
    setModal(true);
  };

  return (
    <Fragment>
      <div className="lista__main-item" onClick={itemClick} >
        <div className="lista__item-left">
          <img className="lista__item-img" alt={props.item.fields.title} src={props.item.fields.thumb} />
        </div>
        <div className="lista__item-right">
          <div className="lista__item-top-right" >{props.item.fields.title}</div>
          <div className="lista__item-bottom-right" >{props.item.fields.field}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Item;