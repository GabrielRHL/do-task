import { TasksInterface } from '../../../types/task';
import style from '../List.module.scss'

function Item({ name, time, selected, completed, id }: TasksInterface) {
    return (
        <li className={style.item}>
            <h3>{name}</h3>
            <span>{time}</span>
        </li>
    )
}

export default Item;