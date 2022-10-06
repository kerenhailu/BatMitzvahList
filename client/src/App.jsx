import React from 'react';
import './App.css';
import PageRouting from './Components/routing';
import { UsersContextProvider } from './Context/user';

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
