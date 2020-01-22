import React, { Fragment } from "react";
import { useActions } from "easy-peasy";
import IconMaker from "./iconMaker.js"
import './style.scss';

const Item = (props) => {
  const setItem = useActions(actions => actions.setItem);
  const setModal = useActions(actions => actions.setModal);

  const itemClick = () => {
    setItem({"id":props.item.id,"title":props.item.fields.title,"field":props.item.fields.field,"value":props.item.fields.value,"comment":props.item.fields.comment,"thumb":props.item.fields.thumb,"color":props.item.fields.color});
    setModal(true);
  };

  return (
    <Fragment>
      <div className="lista__main-item" onClick={itemClick} >
        <div className="lista__item-left">
          <IconMaker title={props.item.fields.title} thumb={props.item.fields.thumb} color={props.item.fields.color} />
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