import React, { useState } from 'react';
import Button from '../Button'
import style from './Form.module.scss'
import { TasksInterface } from '../../types/task';
import { v4 as uuidv4 } from 'uuid';

interface Props {
    setTasks: React.Dispatch<React.SetStateAction<TasksInterface[]>>
}

function Form({setTasks}: Props) {
    const [name, setTask] = useState('')
    const [time, setTime] = useState('00:00')
    function addTask(event: React.FormEvent) {
        event.preventDefault()
        setTasks(pastTasks => [...pastTasks, {name, time, selected: false, completed: false, id: uuidv4()}])
        setTask('')
        setTime('00:00')
    }
    return (
        <form className={style.newTask} onSubmit={addTask}>
            <div className={style.inputContainer}>
                <label htmlFor='task'>
                    Adicione uma nova tarefa
                </label>
                <input type='text' name='task' id='task' placeholder='O que você quer fazer?' value={name} onChange={event => setTask(event.target.value)} required/>
            </div>
            <div className={style.inputContainer}>
                <label htmlFor='time'>
                    Tempo
                </label>
                <input type='time' step='1' name='time' id='time' value={time} onChange={event => setTime(event.target.value)} min='00:00:00' max='01:30:00' required/>
            </div>
            <Button type='submit'>
                Adicionar
            </Button>
        </form>
    )
}

export default Form;