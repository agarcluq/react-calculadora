import React from "react";
import "./style.css";


export default function Board() {
  return (
    <div className="board">
      <div className="screen"> 
      </div>
      <div className="row">
        <button className="col">7</button>
        <button className="col">8</button>
        <button className="col">9</button>
        <button className="col">x</button>
      </div>
      <div className="row">
        <button className="col">4</button>
        <button className="col">5</button>
        <button className="col">6</button>
        <button className="col">-</button>
      </div>
      <div className="row">
        <button className="col">1</button>
        <button className="col">2</button>
        <button className="col">3</button>
        <button className="col">+</button>
      </div>
      <div className="row">
        <button className="col">/</button>
        <button className="col">0</button>
        <button className="col">c</button>
        <button className="col">=</button>
      </div>
    </div>
  );
}
