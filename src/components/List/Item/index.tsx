import { TasksInterface } from '../../../types/task';
import style from './Item.module.scss'

interface Props extends TasksInterface {
    selectTask : (selectedTask: TasksInterface) => void
}

function Item({ name, time, selected, completed, id, selectTask }: Props) {
    return (
        <li className={`${style.item} ${selected ? style.selectedItem : ''}`} onClick={() => selectTask({name, time, selected, completed, id})}>
            <h3>{name}</h3>
            <span>{time}</span>
        </li>
    )
}

export default Item;