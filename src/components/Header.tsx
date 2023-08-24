import { TodoTitle } from '../types';
import { CreateTodo } from './CreateTodo';

interface Props{
    onAddTodo : ({title}: TodoTitle) => void
}


export const Header : React.FC<Props> = ({ onAddTodo })=>{
  return(
    <header>
      <h1>
        To do
        <img width={65} height={'auto'} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/1024px-Typescript.svg.png" alt="TS" />
      </h1>
      <CreateTodo saveTodo={onAddTodo}/>
    </header>
  );
};