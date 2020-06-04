import React, { useState, useEffect, Fragment } from "react";

const IconMaker = (props) => {
  const [imgerror, setImgError] = useState(false);
  const [block, setBlock] = useState(null);

  useEffect(
    () => {
      const thumb = props.thumb;
      let outBlock = null;
      if ((thumb) && (imgerror === false) && (thumb.indexOf("base64","") > -1 || thumb.indexOf("http","") > -1)){
        console.log("entro imgerror false "+props.title);
        outBlock = (<img className="lista__item-img" onError={imgError} alt="Imagen logo" src={thumb} />);
      
      } else {
        let color = props.color;
        console.log("entro imgerror true "+props.title);
        if (color === undefined || color === null || color === "")
        color = "black";
    
        const styleColor = {color:color};
        let ptitle = props.title;
        if (!ptitle) ptitle = "";
        outBlock = (<div className="lista__item-icontext" style={styleColor} >{ptitle.substr(0,1).toUpperCase()}</div>);
      }
      setBlock(outBlock);

    },
    [imgerror,props]
  );

  function imgError() {
    setImgError(true);
  }
    
  return (
    <Fragment>
        {block}
    </Fragment>
  );
};

export default IconMaker;