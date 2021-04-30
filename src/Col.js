import React from "react";
import "./style.css";

export default function Col({number}) {
  return (
      <button className="col">{number}</button>
  );
}
