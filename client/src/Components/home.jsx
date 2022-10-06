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
    console.log(user);
    e.preventDefault();
    setUser({ ...user, ...(user.Count = count) });
    PostUser({ ...user });
    console.log(user);
  };
  const updateValue = (e) => {
    user[e.target.name] = e.target.value;
  };

  return (
    <div>
      <img src="https://www.pokeisrael.net/forum/uploads/monthly_2016_09/57c94ac04a92e_.gif.26f8c145929d89fc8a99bfeaf59c2ace.gif" alt="BD"/><br/>
      <img src="http://1.bp.blogspot.com/-zGuaFebnrhE/TlJQJ1LlZhI/AAAAAAAAAl0/PCzI9VCTuf0/s1600/%25D7%25A4%25D7%2595%25D7%2598%25D7%2595%25D7%25A9%25D7%2595%25D7%25A4+%25D7%259C%25D7%2591+%25D7%25A4%25D7%2595%25D7%25A2%25D7%259D+12.gif" alt="love"/>
      <h1>אגם שלנו</h1>
      <h1>חוגגת בת מצווה</h1>
      <h2>אנו שמחים ונרגשים להזמין אתכם לחגוג עמנו</h2>
      <h2>יום שלישי - כ"ג תשרי התשפ"ג</h2>
      <h1>18-10-2022</h1>
      <h3>הוליווד-מתחם אירועים</h3>
      <h4>
        בנימין שמוטקין 3, ראשון לציון, ישראל
        <br />
        קבלת פנים - 19:15
      </h4>
      <h3>נשמח מאוד לראותכם</h3>
      <h1>משפחת היילו </h1>

<img src="https://online.fliphtml5.com/wryt/vwfq/files/pageConfig/baloons-1.gif?20200517104637" alt="balon"/>
      <h1>אישור הגעה</h1>
      <h2>נשמח מאוד לראותכם בין אורחינו</h2>
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
