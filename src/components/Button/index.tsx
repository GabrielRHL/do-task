import React from 'react';
import style from './Button.module.scss'

interface ButtonProps extends React.PropsWithChildren<{}> {
    type?: 'button' | 'submit' | 'reset' | undefined
}
class Button extends React.Component<ButtonProps> {
    render() {
        const { type = 'button' } = this.props
        return (
            <button type={type} className={style.button}>
                {this.props.children}
            </button>
        )
    }
}

export default Button;