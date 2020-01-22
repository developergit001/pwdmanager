import React, { Fragment } from "react";

const IconMaker = (props) => {
  const thumb = props.thumb;
  const color = props.color;

  let outBlock = null;
  if (thumb.indexOf("base64","") > -1 || thumb.indexOf("http","") > -1){
    outBlock = (<img className="lista__item-img" alt="Imagen logo" src={thumb} />);
  } else {
    const styleColor = {color:color};
  outBlock = (<div className="lista__item-icontext" style={styleColor} >{props.title.substr(0,1).toUpperCase()}</div>);
  }

  return (
    <Fragment>
        {outBlock}
    </Fragment>
  );
};

export default IconMaker;