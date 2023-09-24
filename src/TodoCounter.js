import './TodoCounter.css';

function TodoCounter({ total, completed}) {
  return (
    <h1>
      Has completados {completed} de {total} TODOS
    </h1>
  )
}

export {TodoCounter};