import { TodoId, type ListOfTodos, type Todo as todoType } from '../types';
import { Todo } from './Todo';

interface Props {
    todos: ListOfTodos,
    onToggleComplete: ({ id, completed } : Pick<todoType, 'id' | 'completed'>) => void,
    onRemoveTodo: ({ id } : TodoId) => void,
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onToggleComplete }) =>{
  return(
    <ul className='todo-list'>
      {
        todos.map(todo => (
          <li key={todo.id}
            className={`${todo.completed ? 'completed':''}`}
          >
            <Todo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
              onToggleComplete={onToggleComplete}
              onRemoveTodo={onRemoveTodo}
            />
          </li>
        ))
      }
    </ul>
  );
};