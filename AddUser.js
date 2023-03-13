import React, { useState, useRef } from 'react'
import classes from './AddUser.module.css'
import Button from '../Button'
import Card from '../Card'
import ErrorModal from '../ErrorModal'

const AddUser = props => {

    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const [error, setError] = useState()

    const addUserHandler = (event) => {
        event.preventDefault();
        const nameRef = nameInputRef.current.value
        const ageRef = ageInputRef.current.value
        
        {/* Validation of input => entered input is right or wrong */ }
        if (nameRef.trim().length === 0 || ageRef.trim().length === 0) {
            setError({
                title: "Invalid name and age entered",
                msg: 'Please enter valid Name and Age'
            })
            return;
        }
        if (+ageRef < 1) {
            setError({
                title: "Invalid age ",
                msg: 'Please enter valid age'
            })
            return;
        }
        {/* End of validation */ }

        // console.log(nameRef, ageRef); 
        props.onAddUser(nameRef, ageRef)
        nameInputRef.current.value = "";
        ageInputRef.current.value = ""
    }

    const errorHandler =()=>{
        setError(null)  //null because it gives false value 
    }
    return (
        <React.Fragment>
            {error &&
                <ErrorModal title={error.title} msg={error.msg} onConfirm={errorHandler}/>
            }
            <Card >
                <form onSubmit={addUserHandler} className={classes.formControl}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text"
                        ref={nameInputRef}
                    />
                    <label htmlFor="age">Age (years)</label>
                    <input id="age" type="number"
                        ref={ageInputRef}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </React.Fragment>
    )
}
export default AddUser;