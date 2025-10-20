// src/components/ColorChanger.js
import React, { useState } from "react";
import "./ColorChanger.css"; // Optional CSS file

const getRandomColor = () => {
  // Generate a random hex color
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const ColorChanger = () => {
  const [bgColor, setBgColor] = useState("#ffffff"); // Default background

  const changeColor = () => {
    const newColor = getRandomColor();
    setBgColor(newColor); // Update state, triggers re-render
  };

  return (
    <div className="color-container" style={{ backgroundColor: bgColor }}>
      <h1>Background Color: {bgColor}</h1>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};

export default ColorChanger;