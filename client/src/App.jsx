import React from 'react';
import logo from './logo.svg';
import './App.css';
import PageRouting from './Components/routing';
import { UsersContextProvider } from './Context/user';
{/* <style> */}
import ('https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&family=Poppins:wght@500&display=swap');
// </style>
function App() {
  return (
    <div className="App">
      <UsersContextProvider>
      <PageRouting/>
      </UsersContextProvider>
    </div>
  );
}

export default App;
