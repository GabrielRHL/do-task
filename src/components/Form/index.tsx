import React from 'react';
import Button from '../Button'
import style from './Form.module.scss'

class Form extends React.Component {
    state = {
        name: '',
        time: '00:00'
    }

    addTask(event: React.FormEvent) {
        event.preventDefault()

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
                <Button>Adicionar</Button>
            </form>
        )
    }
}

export default Form;