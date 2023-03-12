import React, { Fragment } from 'react';
import  ReactDOM  from 'react-dom';
import Card from './Card'
import Button from './Button'
import classes from './ErrorModal.module.css'

const ErrorModal = props => {
    const BreakDown = props => {
        return (
            <div className={classes.backdrop} onClick={props.onConfirm} />
        )
    }
    const ModalOverLay = props => {
        return (
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
        )
    }
    return (
        <React.Fragment>
            {/* <div className={classes.backdrop} onClick={props.onConfirm}/> */}
            {/* <Card className={classes.modal}>
                <header>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.msg}</p>
                </div>
                <footer>
                    <Button className={classes.button} onClick={props.onConfirm}>Okay</Button>
                </footer>
            </Card> */}
            {ReactDOM.createPortal(<BreakDown onClick={props.onConfirm} />,
                document.getElementById('backdrop-root'))
            }
            {ReactDOM.createPortal(
                <ModalOverLay
                    title={props.title}
                     msg={props.msg} 
                     onConfirm={props.onConfirm}
                />,
                document.getElementById('overLay-root'))
            }
        </React.Fragment>
    )
}
export default ErrorModal;