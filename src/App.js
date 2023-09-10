import React,{useState} from 'react';
import AddUserDetails from './Components/Users/AddUserDetails';
import UsersList from './Components/Users/UsersList';
function App() {
  const [usersList,setUsersList] = useState([])
  function AddUserHandler(Uname,Uage){
    setUsersList((prevUsersList)=>{
      return [...prevUsersList, {name:Uname, age:Uage, id:Math.random().toString()}];
    })
  }
  return (
    <div>
        <AddUserDetails onAddUser={AddUserHandler}/>
        <UsersList users={usersList}/> 
    </div>
  );
}

export default App;

// import React, { useState } from 'react';

// import AddUserDetails from './Components/Users/AddUserDetails';
// import UsersList from './Components/Users/UsersList';

// function App() {
//   const [usersList, setUsersList] = useState([]);

//   const addUserHandler = (uName, uAge) => {
//     setUsersList((prevUsersList) => {
//       return [
//         ...prevUsersList,
//         { name: uName, age: uAge, id: Math.random().toString() },
//       ];
//     });
//   };

//   return (
//     <div>
//       <AddUserDetails onAddUser={addUserHandler} />
//       <UsersList users={usersList} />
//     </div>
//   );
// }

//  export default App;