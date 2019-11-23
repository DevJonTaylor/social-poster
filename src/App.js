import React, { useState } from 'react';
//import openSocket from 'socket.io-client';
import UIkit from 'uikit';
import UkIcons from 'uikit/dist/js/uikit-icons.min';
import './styles/App.scss';
import NavBar from "./components/Navbar";
import { BrowserRouter, } from "react-router-dom";

UIkit.use(UkIcons);
window.UIkit = UIkit;

//const socket = openSocket('http://localhost:3001');

function App() {
  const [isUser] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar isUserLoggedIn={isUser}/>
        <PageToDisplay isUserLoggedIn={isUser}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
