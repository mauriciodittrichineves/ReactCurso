import React from "react";
import Primeiro from "./Primeiro";
import ComParametro from "./ComParametor";
import Aleatoria from "./Aleatoria";
import Card from "../layout/card";

export default () => {
  return (
    <div id="app">
      <h1>Fundamentos React</h1>
      <Card titulo="#1 - Primeiro Componente">
        <Primeiro />
      </Card>

      <Card titulo="#2 - Componente com Parâmetros">
        <ComParametro titulo="Segundo Componente" subtitulo="Muito legal!" />
      </Card>

      <Card titulo="#3 - Número Aleatório">
        <Aleatoria min={1} max={60} />
      </Card>
    </div>
  );
};
