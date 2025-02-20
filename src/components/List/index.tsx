import React from "react";
import './style.scss'

function List() {
    const tasks = [{
        name: 'JavaScript',
        time: '02:00:00'
      },
      {
        name: 'ReactJs',
        time: '01:00:00'
      }
    ]
    return (
        <aside className="tasksList">
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index} className="item">
                        <h3>{task.name}</h3>
                        <span>{task.time}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default List;