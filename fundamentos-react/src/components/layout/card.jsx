import React from "react";
import "./card.css";

export default (props) => {
  return (
    <div className="Card">
      <div className="Titulo"> {props.titulo} </div>
      <div className="Conteudo"> {props.children} </div>
    </div>
  );
};
