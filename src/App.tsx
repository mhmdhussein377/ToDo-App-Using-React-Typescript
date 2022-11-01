import React, { useState } from 'react';
import "./App.css";
import Task from "./components/todoTask";

export interface Itask {
  task: string;
  deadline: number;
}

export function add(a: number, b: number): number {
  return a + b;
}

const App: React.FunctionComponent = (pops) => {

  let [task, setTask] = useState<string>("")
  let [deadline, setDeadline] = useState<number>(0);
  let [todoList, setTodoList] = useState<Itask[]>([]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    if(e.target.name === "task") {
      setTask(e.target.value);
    } else {
      setDeadline(Number(e.target.value));
    }
  };

  function handleClick(): void {
    setTodoList([...todoList, {
      task: task,
      deadline: deadline,
    }]);
    setTask("");
    setDeadline(0);
  }

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input type="text" placeholder="Task..." value={task} name="task" onChange={handleChange} />
          <input type="number" placeholder="Deadline (in Days)" name="deadline" value={deadline} onChange={handleChange} />
        </div>
        <button onClick={handleClick}>Add Task</button>
      </div>
      <div className="todoList">
        {todoList.map((task: Itask, key: number) => <Task key={key} setTodoList={setTodoList} task={task}/>)}
      </div>
    </div>
  );
};

export default App;

