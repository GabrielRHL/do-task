import React from 'react';
import Button from '../Button'
import style from './Form.module.scss'
import { TasksInterface } from '../../types/task';
import { v4 as uuidv4 } from 'uuid';

class Form extends React.Component<{
    setTasks: React.Dispatch<React.SetStateAction<TasksInterface[]>>}> {
    state = {
        name: '',
        time: '00:00'
    }

    addTask(event: React.FormEvent) {
        event.preventDefault()
        this.props.setTasks(pastTasks => [...pastTasks, {...this.state, selected: false, completed: false, id: uuidv4()}])
        this.setState({
            name: '',
            time: '00:00'
        })
    }

    render() {
        return (
            <form className={style.newTask} onSubmit={this.addTask.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor='task'>
                        Adicione um novo estudo
                    </label>
                    <input type='text' name='task' id='task' placeholder='O que você quer estudar?' value={this.state.name} onChange={event => this.setState({...this.state, name: event.target.value})} required/>
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor='time'>
                        Tempo
                    </label>
                    <input type='time' step='1' name='time' id='time' value={this.state.time} onChange={event => this.setState({...this.state, time: event.target.value})} min='00:00:00' max='01:30:00' required/>
                </div>
                <Button type='submit'>
                    Adicionar
                </Button>
            </form>
        )
    }
}

export default Form;