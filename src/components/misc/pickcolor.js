import React, { useState, useEffect, Fragment } from "react";
import { useStore, useActions } from "easy-peasy";  
import './style.scss';

const PickColor = () => {
  const currentItem = useStore(state => state.currentItem);
  const setCurrentItem = useActions(actions => actions.setCurrentItem);
  
  const colors = [
    "#F44336","#e91e63","#9c27b0","#673AB7","#3F51B5","#2196F3",
    "#03A9F4","#00BCD4","#009688","#4CAF50","#8BC34A","#CDDC39",
    "#FFEB3B","#FFC107","#FF9800","#795548","#607D8B"
  ];

  const [color, setColor] = useState(currentItem.color);
  const [visible, setVisible] = useState(false);

  const colorClick = (e) => {
    const color = e.target.id;
    let tmpcurrentItem = currentItem;
    tmpcurrentItem.color = color;
    setCurrentItem(tmpcurrentItem);
    setColor(color);
    setVisible(false);
  }
  const showColors = () => {
    setVisible(true);
  }  
  
  useEffect(
    () => {
        if (currentItem.color === "" || currentItem.color === undefined){
          let tmpcurrentItem = currentItem;
          tmpcurrentItem.color = colors[0];
          setCurrentItem(tmpcurrentItem);        
        }
        setColor(currentItem.color);
        return () => {
          console.log("Unmounted!.");
        }
    },
    [currentItem,colors,setCurrentItem]
  );

  let colorBlock = null;
  if (visible){
    colorBlock = (

      colors.map(itemColor => {

        return (itemColor===color) ?
        <div id={itemColor} key={itemColor} onClick={colorClick} className="pick-color__palette pick-color__palette--sel" style={{backgroundColor:itemColor}} ></div>
        :
        <div id={itemColor} key={itemColor} onClick={colorClick} className="pick-color__palette" style={{backgroundColor:itemColor}} ></div>
      
      })

    );
  } else {
  colorBlock = (<div className="pick-color__sel" onClick={showColors} style={{backgroundColor:color}} ></div>);
  }

  return (
    <Fragment>
    <div className="pick-color" >
      {
      colorBlock
      }           
    </div>
    </Fragment>
  )
  ;
};

export default PickColor;