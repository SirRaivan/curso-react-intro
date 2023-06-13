import React from "react";
import "./TodoSearch.css";
import react from "react";

function TodoSearch() {
  const [searchValue, setSearValue] = react.useState("");

  console.log("Escribiste " + searchValue)
      

  return (
    <input className="TodoSearch" 
    placeholder="Cortar cebolla"
    value={searchValue}
    onChange={(e) => {
      setSearValue(e.target.value);
    }}
    />
  );
}

export {TodoSearch};