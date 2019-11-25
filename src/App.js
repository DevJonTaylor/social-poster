import React, { useState } from 'react';
//import openSocket from 'socket.io-client';
import UIkit from 'uikit';
import UkIcons from 'uikit/dist/js/uikit-icons.min';
import './styles/App.scss';
import NavBar from "./components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import PageToDisplay from "./components/PageToDisplay";

UIkit.use(UkIcons);
window.UIkit = UIkit;

//const socket = openSocket('http://localhost:3001');

function App() {
  const [isUser] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar isUserLoggedIn={isUser}/>
        <Route render={ ({ location }) => (
          <PageToDisplay location={location} isUserLoggedIn={isUser} />
        )} />
      </BrowserRouter>
    </div>
  );
}

export default App;
