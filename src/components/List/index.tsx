import style from './List.module.scss'
import Item from "./Item";

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
        <aside className={style.tasksList}>
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((task, index) => (
                    <Item key={index} {...task}/>
                ))}
            </ul>
        </aside>
    )
}

export default List;