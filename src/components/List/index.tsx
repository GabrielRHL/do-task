import style from './List.module.scss'
import Item from "./Item";
import { TasksInterface } from '../../types/task';

function List({ tasks }: {tasks: TasksInterface[]}) {
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