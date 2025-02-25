import style from './Clock.module.scss'

interface Props {
    time: number | undefined
}

function Clock({ time = 0 }: Props) {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    const [minTens, minOnes] = String(minutes).padStart(2, '0')
    const [segTens, segOnes] = String(seconds).padStart(2, '0')
    return (
        <>
            <span className={style.clockNumber}>{minTens}</span>
            <span className={style.clockNumber}>{minOnes}</span>
            <span className={style.clockSplit}>:</span>
            <span className={style.clockNumber}>{segTens}</span>
            <span className={style.clockNumber}>{segOnes}</span>
        </>
    )
}

export default Clock;