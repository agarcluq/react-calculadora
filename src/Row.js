import React from "react";
import "./style.css";
import Col from "./Col.js"
export default function Row({number}) {
  return (
      <div className="row">
        <Col number={number}/>
        <Col number={number}/>
        <Col number={number}/>
        <Col number={number}/>
      </div>
  );
}
