import { useState } from "react";
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
    if(selected?.time) {
        setTime(timeToSeconds(selected.time))
    }
    return (
        <div className={style.timer}>
            <p className={style.title}>Escolha um card e inicie o temporizador</p>
            Tempo: {time}
            <div className={style.clockWrapper}>
                <Clock />
            </div>
            <Button>Começar</Button>
        </div>
    )
}

export default Timer;