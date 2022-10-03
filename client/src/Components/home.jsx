import React, { useContext, useState } from 'react'
import { UsersContext } from '../Context/user';

export default function Home() {
  let { user, setUser } = useContext(UsersContext);
  let { count, setCount } = useContext(UsersContext);
  const [newUser, setNewUser] = useState({});

  const updateValue = (e) => {
    newUser[e.target.name] = e.target.value;
  };
  const userEnter=()=>{
      setNewUser(newUser["count"]=count)
      console.log(newUser);
      alert("תודה נפגש")
  }
  return (
    <div>
     <h1>Bat Mitzvah</h1>
     <label>שם</label><br/>
     <input type="text" mame="nameUser" placeholder="Enter your name" onChange={updateValue} required/><br/>
     <label>שם משפחה</label><br/>
     <input type="text" name="famName" placeholder="Enter your fam name" onChange={updateValue} required/><br/>
     <label>כמות</label><br/>
     <button onClick={()=>setCount(count+1)}>+</button>
     <h1 onChange={updateValue} name="count">{count}</h1>
     <button onClick={()=>setCount(count-1)}>-</button><br/>
     <button onClick={userEnter}>save</button>
    </div>
  )
}
