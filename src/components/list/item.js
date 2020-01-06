import React, { Fragment } from "react";

function Item(props) {
  return (
    <Fragment>
      <div className="lista__main-item" >
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
}
export default Item;