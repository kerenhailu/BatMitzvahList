import React, { useContext, useEffect, useState } from "react";
import { UsersContext } from "../Context/user";
import { GetAllUser } from "../Services/user";

export default function TableAdmin() {
  let { user, setUser } = useContext(UsersContext);
  let [userData, setUserData] = useState([]);

    useEffect(() => {
      // setLoading(true);
        GetAllUser()
        .then(data => setUserData({...data}))
        console.log(userData);
        // .finally(() => setLoading(false));
    } , []); 
  return (
    <div>
      <h1>אישורי הגעה </h1>
      <table>
        <tr>
          <th>Name</th>
          <th>FamName</th>
          <th>Count</th>
          <th>Phone</th>
          
        </tr>
        <tr>
          {user.map((user, index) => (
            <tr key={index}>
              <td className="">{user.Name}</td>
              <td className="">{user.FamName}</td>
              <td className="">{user.Count}</td>
              {/* <td className="">{user.Phone}</td> */}
            </tr>
          ))}
        </tr>
      </table>
    </div>
  );
}
