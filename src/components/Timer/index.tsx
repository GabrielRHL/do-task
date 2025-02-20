import Button from "../Button";
import Clock from "./Clock";
import style from './Timer.module.scss'

function Timer() {
    return (
        <div className={style.timer}>
            <p className={style.title}>Escolha um card e inicie o temporizador</p>
            <div className={style.clockWrapper}>
                <Clock />
            </div>
            <Button>Começar</Button>
        </div>
    )
}

export default Timer;