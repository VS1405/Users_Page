import React, { useState } from 'react'
import classes from './AddUser.module.css'
import Button from '../Button'
import Card from '../Card'
import ErrorModal from '../ErrorModal'

const AddUser = props => {

    const [enteredName, setName] = useState('');
    const [enteredAge, setAge] = useState('');
    const [error, setError] = useState()
    const nameHandler = (event) => {
        setName(event.target.value)
    }
    const ageHandler = (event) => {
        setAge(event.target.value)
    }

    const addUserHandler = (event) => {
        event.preventDefault();
        {/* Validation of input => entered input is right or wrong */ }
        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: "Invalid name and age entered",
                msg: 'Please enter valid Name and Age'
            })
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: "Invalid age ",
                msg: 'Please enter valid age'
            })
            return;
        }
        {/* End of validation */ }

        // console.log(enteredName, enteredAge); 
        props.onAddUser(enteredName, enteredAge)
        setName('')
        setAge('')
    }

    const errorHandler =()=>{
        setError(null)  //null because it gives false value 
    }
    return (
        <div>
            {error &&
                <ErrorModal title={error.title} msg={error.msg} onConfirm={errorHandler}/>
            }
            <Card >
                <form onSubmit={addUserHandler} className={classes.formControl}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text"
                        value={enteredName}
                        onChange={nameHandler}
                    />
                    <label htmlFor="age">Age (years)</label>
                    <input id="age" type="number"
                        value={enteredAge}
                        onChange={ageHandler}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    )
}
export default AddUser;