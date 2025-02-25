import { useEffect, useState } from "react";
import { TasksInterface } from "../../types/task";
import Button from "../Button";
import Clock from "./Clock";
import style from './Timer.module.scss'
import { timeToSeconds } from "../../common/utils/time";

interface Props {
    selected: TasksInterface | undefined
}

function Timer({ selected }: Props) {
    const [time, setTime] = useState<number>()

    useEffect( () => {
        if(selected?.time) {
            setTime(timeToSeconds(selected.time))
        }
    }, [selected])

    return (
        <div className={style.timer}>
            <p className={style.title}>Escolha um card e inicie o temporizador</p>
            <div className={style.clockWrapper}>
                <Clock time={time}/>
            </div>
            <Button>Começar</Button>
        </div>
    )
}

export default Timer;