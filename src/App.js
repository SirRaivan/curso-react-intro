import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';

const defaultTodos = [
  {text: 'Cortal cebolla', completed: true},
  {text: 'Cortal cebollin', completed: false},
  {text: 'Cortal cebo', completed: false},
  {text: 'Cortal olla', completed: false},
]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  )

  console.log(searchValue)

  return (
    <>

      <TodoCounter total={totalTodos} completed={completedTodos}/>
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo => (
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
