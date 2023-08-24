import './App.css';
import { useState } from 'react';
import { Todos } from './components/Todos';
import { type TodoId, type ListOfTodos, Todo, FilterType, TodoTitle } from './types';
import { TODO_FILTERS } from './const';
import { Footer } from './components/footer';
import { Header } from './components/Header';



const data : ListOfTodos = [
  {
    id: '3213',
    title: 'hacer compras',
    completed: true
  },
  {
    id: '5432',
    title: 'hacer ejercicio',
    completed: false
  },
  {
    id: '9876',
    title: 'leer un libro',
    completed: false
  },
  {
    id: '6543',
    title: 'preparar la cena',
    completed: true
  },
  {
    id: '1234',
    title: 'llamar a un amigo',
    completed: false
  },
  {
    id: '8765',
    title: 'aprender TypeScript',
    completed: true
  },
  {
    id: '2345',
    title: 'ver una película',
    completed: false
  },
  {
    id: '7890',
    title: 'hacer la limpieza',
    completed: false
  },
  {
    id: '4567',
    title: 'escribir un correo',
    completed: true
  },
  {
    id: '8901',
    title: 'hacer ejercicio',
    completed: false
  }
];



function App() : JSX.Element {
 
  const [todos, setTodos] = useState<ListOfTodos>(data);
  const [filterSelected, setFilterSelected] = useState<FilterType>(TODO_FILTERS.ALL);

  const handleFilterChange = (filter: FilterType) : void =>{
    setFilterSelected(filter);
  };
  const handleRemove = ({ id } : TodoId) =>{
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };
  const handleCompleted = ({ id, completed } : Pick<Todo, 'id' | 'completed'>) : void => {
    const updatedTodos : ListOfTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  const handleRemoveAllcompleted = () =>
  {
    const newTodos = todos.filter(todos => !todos.completed);
    setTodos(newTodos);
  };
  const handleAddTodo = ({title}:TodoTitle):void =>{
    const newTodo = {
      title,
      id: window.crypto.randomUUID(),
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };


  const filteredTodos: ListOfTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed;
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed;
    return todo;
  });

  const activeCount = todos.filter( todo => !todo.completed).length;
  const completedCount = todos.length - activeCount;

  return (
    <div className='todoapp'>
      <Header onAddTodo={handleAddTodo}/>
      <Todos 
        onToggleComplete={handleCompleted} 
        onRemoveTodo={handleRemove} 
        todos={filteredTodos}/>
      <Footer
        activeCount={activeCount}
        completeCount={completedCount}
        filterSelected={filterSelected}
        onClearCompleted={handleRemoveAllcompleted}
        handleFilterChange={handleFilterChange}
      />
    </div>
  );
}

export default App;
