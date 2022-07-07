

import './App.css';
import { useState, useEffect } from 'react';
import Loading from './components/Loading';
import axios from 'axios';
import UserList from './components/UserList';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [users, setUsers] = useState(null);
  useEffect (()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((result)=>{setUsers(result.data);
    });
  },[]);
  return (<div>{users ? <UserList users={users}/> : <Loading/>}</div>)
}

export default App;






  


