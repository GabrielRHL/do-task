import style from './List.module.scss'
import Item from "./Item";
import { useState } from 'react';

function List() {
    const [tasks, setTasks] = useState([{
        name: 'JavaScript',
        time: '02:00:00'
      },
      {
        name: 'ReactJs',
        time: '01:00:00'
      }
    ]);
    return (
        <aside className={style.tasksList}>
            <h2 onClick={() => {
                setTasks([...tasks, {name: 'TypeScript', time: '01:30:00'}])
            }}>Estudos do dia</h2>
            <ul>
                {tasks.map((task, index) => (
                    <Item key={index} {...task}/>
                ))}
            </ul>
        </aside>
    )
}

export default List;