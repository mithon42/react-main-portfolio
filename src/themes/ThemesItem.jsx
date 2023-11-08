import React from "react";

const ThemesItem = ({ color, img, changeColor }) => {
  return <img src={img} alt="img" className="theme-img" onClick={() => {changeColor(color)}} />;
};

export default ThemesItem;
