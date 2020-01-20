import React, { Fragment } from "react";

const IconMaker = (props) => {
  const thumb = props.thumb;
  const letter = props.title.substr(0,1).toUpperCase();

  let outBlock = null;
  if (thumb.indexOf("base64","") > -1){
    outBlock = (<img className="lista__item-img" alt="Imagen logo" src={thumb} />);
  } else {
    const styleColor = {color:thumb};
  outBlock = (<div className="lista__item-icontext" style={styleColor} >{letter}</div>);
  }

  return (
    <Fragment>
        {outBlock}
    </Fragment>
  );
};

export default IconMaker;