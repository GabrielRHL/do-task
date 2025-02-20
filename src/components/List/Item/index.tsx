import style from '../List.module.scss'

function Item({ name, time }: { name: string, time: string}) {
    return (
        <li className={style.item}>
            <h3>{name}</h3>
            <span>{time}</span>
        </li>
    )
}

export default Item;