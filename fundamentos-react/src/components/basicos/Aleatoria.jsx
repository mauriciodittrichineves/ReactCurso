export default function numeroAleatorio(props) {
  return (
    <div>
      <h3>Valor Mínimo: {props.min}</h3>
      <h3>Valor Maximo: {props.max}</h3>
      <h3>
        Valor Aleatório:{" "}
        {Math.floor(Math.random() * (props.max - props.min + 1)) + props.min}
      </h3>
    </div>
  );
}
