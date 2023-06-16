import React, { useState } from "react";
import "./styles.css";
import IngredientsFilter from "./IngredientsFilter";
import Dishes from "./Dishes";
import { dishesData } from "./data";

export default function App() {
  // State variable that is updated when ingredients are selected:
  const [selectedIngredients, setSelectedIngredients] = useState(null)
  return (
    <div className="menu">
      <h1>MENU</h1>
      <IngredientsFilter selectedIngredients={selectedIngredients} setSelectedIngredients={setSelectedIngredients} dishesData={dishesData}/>
      <Dishes selectedIngredients={selectedIngredients} data={dishesData}/>
    </div>
  );
}  
