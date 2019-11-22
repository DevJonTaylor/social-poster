import React from 'react';
import openSocket from 'socket.io-client';
import './App.css';

const socket = openSocket('http://localhost:3001');

socket.on('response', resp => console.log(resp));
socket.emit('howdy');

function App() {
  return (
    <div className="App">
      Howdy!!
    </div>
  );
}

export default App;
