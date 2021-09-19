import React, { useState } from 'react'; 

import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import './index.css';

import bird from './images/bird.png' 
import cat from './images/cat.png' 
import bull from './images/bull.png' 
import racoon from './images/racoon.png' 
import dragon from './images/dragon.png' 
import bear from './images/bear.png'

function App() {

  const petzArray = 

  [
    {
      img: bird,
      type: "grass"
    },
    {
      img: dragon,
      type: "fire"
    },
    {
      img: bear,
      type: "ice"
    }
  ]

  return (
        <div className="App">
          <NavBar petzArray = {petzArray[1]}/>
          <Landing petzArray = {petzArray[1]}/>
        </div>
  );
}

export default App;
