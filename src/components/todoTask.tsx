import * as React from 'react';
import { Itask } from "../App"

interface ITaskProps {
    task: Itask,
    setTodoList: React.Dispatch<React.SetStateAction<Itask[]>>;
}

const Task: React.FunctionComponent<ITaskProps> = (props) => {
    let {task, deadline} = props.task;

    function handleDelete(e: React.MouseEvent<HTMLButtonElement>): void {
        props.setTodoList(oldTodo => oldTodo.filter(todo => todo.task !== task));
    }
    
  return (
    <>
        <div className='task'>
            <div className="content">
                <span>{task}</span>
                <span>{deadline}</span>
            </div>
            <button onClick={handleDelete}>X</button>
        </div>
    </>
  );
};

export default Task;
