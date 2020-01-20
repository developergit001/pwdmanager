import React, { useState, useEffect, Fragment } from "react";
import { useStore, useActions } from "easy-peasy";  
import './style.scss';

const PickColor = () => {
  const currentItem = useStore(state => state.currentItem);
  const setCurrentItem = useActions(actions => actions.setCurrentItem);
  
  const [colors, setColors] = useState([
    "rgb(244, 67, 54)","#e91e63","#9c27b0","#673AB7","#3F51B5","#2196F3",
    "#03A9F4","#00BCD4","#009688","#4CAF50","#8BC34A","#CDDC39",
    "#FFEB3B","#FFC107","#FF9800","#795548","#607D8B"
  ]);

  const [color, setColor] = useState(currentItem.color);

  const colorClick = (e) => {
    console.log(e.target.style.backgroundColor);
    const color = e.target.style.backgroundColor;
    let tmpcurrentItem = currentItem;
    tmpcurrentItem.color = color;
    console.log(tmpcurrentItem);
    setCurrentItem(tmpcurrentItem);
    setColor(color);
  }
  
  useEffect(
    () => {

        setColor(currentItem.color);

        return () => {
          console.log("Unmounted!.");
        }
    },
    [currentItem.color]
  );

  return (
    <Fragment>
    <div className="pick-color" >
      {
            colors.map(itemColor => {

              return (itemColor===color) ?
              <div key={itemColor} onClick={colorClick} className="pick-color__palette pick-color__palette--sel" style={{backgroundColor:itemColor}} ></div>
              :
              <div key={itemColor} onClick={colorClick} className="pick-color__palette" style={{backgroundColor:itemColor}} ></div>
            
            })
      }     
      
    </div>
    </Fragment>
  )
  ;
};

export default PickColor;