import './App.css';
import React, { useState } from 'react';
import UserList from './Component/UI/User/UserList';
import AddUser from './Component/UI/User/AddUser';

function App() {

  const [userList, setUserList] = useState([]);
  
  const addUserHandler= (userName, userAge)=>{
    setUserList( (prevUserList)=>{
    return [...prevUserList, 
      {name: userName, age: userAge, id: Math.random().toString()} ]
    })
  }

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler}/>
      <UserList users ={userList} />
    </div>
  );
}

export default App;
