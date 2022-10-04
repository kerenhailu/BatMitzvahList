import React, { useContext, useEffect, useState } from "react";
import { UsersContext } from "../Context/user";
import { GetAllUser, PostUser } from "../Services/user";
// import {Link} from "react-router-dom";
export default function Home() {
  let { user, setUser } = useContext(UsersContext);
  let { count, setCount } = useContext(UsersContext);

  useEffect(() => {
    GetAllUser().then((data) => setUser(data));
  }, []);

  const addUserToList = (e) => {
   e.preventDefault();
    setUser({ ...user});
    PostUser(user);
    console.log(user);
  };
  const updateValue = (e) => {
    user[e.target.name] = e.target.value;
    // user.Count = count;
  };

  
  return (
    <div>
      <h1>Bat Mitzvah</h1>
      <label>שם פרטי</label>
      <br />
      <input
        type="text"
        name="FirstName"
        placeholder="Enter your fam name"
        onChange={updateValue}
      />
      <br />
      <label>שם משפחה</label>
      <br />
      <input
        type="text"
        name="FamName"
        placeholder="Enter your fam name"
        onChange={updateValue}
      />
      <br />
      <label>טלפון</label>
      <br />
      <input
        type="number"
        name="Phone"
        placeholder="Enter your phone"
        onChange={updateValue}
      />
      <br />
      <label>כמות</label>
      <br />
      <button onClick={() => setCount(count + 1)}>+</button>
      {/* <h1><input  type="number" name='Count' value={count} onChange={updateValue}/></h1> */}
      <h1 onChange={updateValue} name="Count">
        {count}
      </h1>
      <button onClick={() => setCount(count - 1)}>-</button>
      <br />
      <input type="checkbox" name="IsArrive" />
      <br />
      <button onClick={addUserToList}>save</button>
      <br />
      <br />
      {/* <table>
        <tr>
          <th>Name</th>
          <th>FamName</th>
          <th>Count</th>
        </tr>
        <tr>
          {user.map((user, index) => (
            <tr key={index}>
              <td className="">{user.Name}</td>
              <td className="">{user.FamName}</td>
              <td className="">{user.Count}</td>
            </tr>
          ))}
        </tr>
      </table> */}
    </div>
  );
}
