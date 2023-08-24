import {TodoId, type Todo as TodoType, } from '../types';

interface Props extends TodoType{
  onRemoveTodo: ({ id } : TodoId) => void,
  onToggleComplete: ({id, completed } : Pick<TodoType, 'id' | 'completed'>) => void,
} 

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onToggleComplete }) => {

  const handleChangeChecked = (event : React.ChangeEvent<HTMLInputElement>) : void =>{
    const checked : boolean = event.target.checked;
    onToggleComplete({
      id,
      completed: checked,
    });
  };

  return(
    <div className="view">
      <input 
        id={id}
        className="toggle"
        checked={completed}
        type='checkbox'
        onChange={(event)=>handleChangeChecked(event)}
      />
      <label htmlFor={id}>
        {title}
      </label>
      <button
        className='destroy'
        onClick={()=> onRemoveTodo({ id }) }
      >
      </button>
    </div>
  );
};


