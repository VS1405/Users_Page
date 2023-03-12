import React from 'react';
import Card from './Card'
import Button from './Button'
import classes from './ErrorModal.module.css'

const ErrorModal = props => {
    return (
        <div>
            <div className={classes.backdrop} onClick={props.onConfirm}/>
            <Card className={classes.modal}>
                <header>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.msg}</p>
                </div>
                <footer>
                    <Button className={classes.button} onClick={props.onConfirm}>Okay</Button>
                </footer>
            </Card>
        </div>
    )
}
export default ErrorModal;