import './TodoCounter.css';

function TodoCounter({ total, completed}) {
  if (total == completed) {
    return (
      <h1>
        Felicidades has completado todo los TODOs
      </h1>
    )
  } else
  return (
    <h1>
      Has completado <span>{completed}</span> de <span>{total}</span> TODOs
    </h1>
  )
}

export {TodoCounter};