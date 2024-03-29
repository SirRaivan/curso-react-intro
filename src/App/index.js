import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/index';
import './App.css';
import { useLocalStorage } from './useLocalStorage'

// const defaultTodos = [
//   {text: 'Cortal cebolla', completed: true},
//   {text: 'Cortal cebollin', completed: false},
//   {text: 'Cortal cebo', completed: false},
//   {text: 'Cortal olla', completed: false},
// ]
// localStorage.setItem('TODOS_V1',JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1')


function App() {

  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
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

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );   
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos)
  };

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
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
