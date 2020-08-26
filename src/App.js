import React, { useEffect } from 'react';
import './App.css';
import { useState } from 'react';
import Users from './Components/Users/Users';

function App() {

  const [users, setUsers]= useState([]);
  const [addedUsers, setAddedUsers] = useState([]);

  useEffect(()=>{
    fetch('https://randomuser.me/api/?results=15')
    .then(res=>res.json())
    .then(data=>setUsers(data.results))

  },[])

  const handleAddUsers = (user)=>{
    const newAdded =[...addedUsers,user];
    setAddedUsers(newAdded);
  }

  let total = 0;
  for (let i = 0; i < addedUsers.length; i++) {
    const user = addedUsers[i];
    total += user.location.postcode;
    
  }

  console.log(users)

  return (
    <div className="App">
           <h3>User's Details</h3>
          <h4>Friends Added: {addedUsers.length}</h4>
         <h4>Total Salary: {total}</h4>

      {
      users.map((user =><Users user={user} handleAddUsers={handleAddUsers}></Users>))
      }
     
    </div>
  );
}

export default App;
