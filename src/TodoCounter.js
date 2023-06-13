import "./TodoCounter.css";

function TodoCounter(props) {
  return (
    <h1 className="todo-counter">
      Has completado {props.completed} de {props.total} TODOs
    </h1>
  );
}

export { TodoCounter };