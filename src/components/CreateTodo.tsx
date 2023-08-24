import { useState } from 'react';
import { TodoTitle } from '../types';

interface Props {
  saveTodo: ({ title }:TodoTitle) => void
}

export const CreateTodo:React.FC<Props> = ({ saveTodo }):JSX.Element => {

  const [inputValue, setInputValue] = useState<string>('');

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    saveTodo({title: inputValue });
    setInputValue('');
  };

  return(
    <form onSubmit={handleSubmit}>
      <input
        type="text" 
        className='new-todo'
        onKeyDown={()=>console.log('hola')}
        value={inputValue}
        onChange={(event)=>{ setInputValue(event.target.value); }}
      />
    </form>
  );
};