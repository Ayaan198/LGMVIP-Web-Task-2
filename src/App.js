import React, { useState } from 'react';
import './App.css';

const App = ()=> {
    const [users, setUsers] = useState([]);

    const listOfUsers = async()=>{

        const awaitResponse = await fetch('https://reqres.in/api/users?page=1');
        const awaitJSONResponse = await awaitResponse.json();
        setUsers(awaitJSONResponse.data);
    }

  return( 
    <div className='App'>
        <h1>Fetch Data (<a href="https://reqres.in/api/users?page=1">API</a>)</h1>
        <p>👇</p>
        <button onClick={listOfUsers}>Get Data</button>
        <h2>The Users are as Following:</h2>
        <ul>
            {users.map(({id,email,first_name,last_name,avatar})=>(
                <li key={id}>
                    Email of the User : {email} ||
                    First name of User : {first_name} ||
                    Last name of the User : {last_name} ||
                    User profile picture URL is : {avatar}
                </li>
                
            ))}
        </ul>
    </div>
    );
}

export default App;