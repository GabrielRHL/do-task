import style from './List.module.scss'
import Item from "./Item";
import { TasksInterface } from '../../types/task';

interface Props {
    tasks: TasksInterface[],
    selectTask : (selectedTask: TasksInterface) => void
}


function List({ tasks, selectTask }: Props) {
    return (
        <aside className={style.tasksList}>
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((task) => (
                    <Item selectTask={selectTask} key={task.id} {...task}/>
                ))}
            </ul>
        </aside>
    )
}

export default List;