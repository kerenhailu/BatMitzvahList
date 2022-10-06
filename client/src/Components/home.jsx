import React, { useContext, useEffect, useState } from "react";
import { UsersContext } from "../Context/user";
import { GetAllUser, PostUser } from "../Services/user";


export default function Home() {
  // const [open, setOpen] = useState(false);
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
    // <Link to="/confirmation">confirmation</Link>
    alert("תודה שעניתם");
  };
  const updateValue = (e) => {
    user[e.target.name] = e.target.value;
  };

  const userIsArrive = (e) => {
    user.IsArrive =true;
    // addUserToList()
  };
  const userIsntArrive = (e) => {
    user.IsArrive =false;
    // addUserToList()
  };


  return (
    <div className="main">
      <img src="https://www.pokeisrael.net/forum/uploads/monthly_2016_09/57c94ac04a92e_.gif.26f8c145929d89fc8a99bfeaf59c2ace.gif" className="imgBD" alt="BD"/><br/>
      <img src="http://1.bp.blogspot.com/-zGuaFebnrhE/TlJQJ1LlZhI/AAAAAAAAAl0/PCzI9VCTuf0/s1600/%25D7%25A4%25D7%2595%25D7%2598%25D7%2595%25D7%25A9%25D7%2595%25D7%25A4+%25D7%259C%25D7%2591+%25D7%25A4%25D7%2595%25D7%25A2%25D7%259D+12.gif" width={120} height={120} alt="love"/>
      <h1>אגם שלנו</h1>
      <h1 className="whiteText">חוגגת בת מצווה</h1>
      <p>אנו שמחים ונרגשים להזמין אתכם לחגוג עמנו</p>
      <h2>יום שלישי - כ"ג תשרי התשפ"ג</h2>
      <h1>18-10-2022</h1>
      <h3>הוליווד-מתחם אירועים</h3>
      <h4>
        בנימין שמוטקין 3, ראשון לציון, ישראל 📍
        <br />
        קבלת פנים - 19:00
      </h4>
      <p>נשמח מאוד לראותכם</p>
      <h1>משפחת היילו </h1>

<img src="https://online.fliphtml5.com/wryt/vwfq/files/pageConfig/baloons-1.gif?20200517104637" alt="balon"/>
      <h1>אישור הגעה</h1>
      <h2 className="whiteText">נשמח מאוד לראותכם בין אורחינו</h2>
      {/* <form> */}
      {/* <label>שם פרטי</label>
      <br /> */}
      <input
      required
      minLength={2}
      className="nameInput"
      // pattern="[A-Za-z]{3}" 
      title="אנא רשמ/י את שמך"
        type="text"
        name="FirstName"
        placeholder="שם פרטי"
        onChange={updateValue}
      />
      {/* <br />
      <label>שם משפחה</label>
      <br /> */}
      <input
      required
      minLength={2}
      className="famNameInput"
      // pattern="[A-Za-z]{3}" 
      title="אנא רשמ/י את שם המשפחה"
        type="text"
        name="FamName"
        placeholder="שם משפחה"
        onChange={updateValue}
      />
      <br />
      {/* <label>טלפון</label>
      <br /> */}
      <input
      className="phone"
      required
      // pattern="[A-Za-z]{3}" 
      title="אנא רשמ/י את מספר הפלאפון"
        type="number"
        name="Phone"
        maxLength={10}
        placeholder="מספר נייד"
        onChange={updateValue}
      />
      <br />
     <section className="countSection">
      {/* <br /> */}
      <button onClick={() => setCount(count + 1)}>➕</button>
      <h1 onChange={updateValue} name="Count">
        {count}
      </h1>
      <button onClick={() => setCount(count - 1)}>➖</button>
      <h2>כמות</h2>
      </section>
      <br />
      <button className="buttonArrive" onClick={userIsArrive}>מגיע/ה ✔️</button>
      <button className="buttonArrive" onClick={userIsntArrive}>לא מגיע/ה ❌</button>
      {/* <input type="checkbox" name="IsArrive" /> */}
      <br />
      <button className="buttonArrive" onClick={addUserToList}>אשר הגעה</button>
      {/* </form> */}
      <br />
      <br />
      {/* {open?"":""} */}
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
