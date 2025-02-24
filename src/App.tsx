import { useState } from 'react';
import Form from './components/Form';
import List from './components/List';
import style from './App.module.scss';
import Timer from './components/Timer';
import { TasksInterface } from './types/task';

function App() {
  const [tasks, setTasks] = useState<TasksInterface[] | []>([]);
  const [selected, setSelected] = useState<TasksInterface>();

  function selectTask(selectedTask: TasksInterface) {
    setSelected(selectedTask)
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks}/>
      <List tasks={tasks} selectTask={selectTask}/>
      <Timer />
    </div>
  );
}

export default App;
