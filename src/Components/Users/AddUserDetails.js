import React from "react";
import { useState } from "react";
import Card from  "../UI/Card"
import classes from "./AddUserDetails.module.css"
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
function AddUser(props){
    const [enteredUserName,SetEnteredUserName]=useState('');
    const [enteredAge,SetEnteredAge]=useState('');
    const [error,setError] = useState();
    function AddUser(event){
        event.preventDefault();
        if(enteredUserName.trim().length===0 || enteredAge.trim().length===0){
            setError({
                title: 'Invalid input',
                message : 'Please enter a valid name and age(non-empty values).'
            });
            return;
        }
        if(+enteredAge < 1){
            setError({
                title:'Invalid Age',
                message: 'Please enter a valid age >0'
            });
            return;
        }
        props.onAddUser(enteredUserName,enteredAge);
        SetEnteredUserName('');
        SetEnteredAge('');
    }
    function UserNameHandler(event){
        SetEnteredUserName(event.target.value);
    }
    function AgeHandler(event){
        SetEnteredAge(event.target.value);
    }
    const errorHandler = () => {
        setError(null);
    }
    return(
        <div>
        {error && < ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card className = {classes.input}>
        <form onSubmit={AddUser}>
            <label  htmlFor="name">User Name:</label>
            <input type="text" id="name" value={enteredUserName} onChange={UserNameHandler}></input>
            <label htmlFor="age">Age(years)</label>
            <input type="text" id="age" value={enteredAge} onChange={AgeHandler}></input>
            <Button type="submit">Submit</Button>
        </form>
        </Card>
        </div>
    )
}
export default AddUser;