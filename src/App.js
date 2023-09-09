import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';

const defaultTodos = [
  {text: 'Cortal cebolla', completed: true},
  {text: 'Cortal cebollin', completed: false},
  {text: 'Cortal cebo', completed: true},
  {text: 'Cortal olla', completed: false},
]

function App() {
  return (
    <>

      <TodoCounter total={20} completed={15}/>
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
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
