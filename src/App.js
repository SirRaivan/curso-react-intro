import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import "./App.css";
import React from "react";

const defaultTodos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Tomar curso de introduccion  a js", completed: true },
  { text: "Llorar con la llorona", completed: false },
  { text: "Cortar cebolla otra vez", completed: false },
];

function App() {
  return (
    <>
      <TodoCounter completed={16} total={17} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
            />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
