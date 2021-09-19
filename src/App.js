import React from 'react'; 

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

  const petzArray = [bird, cat, bull, racoon, dragon, bear]

  return (
        <div className="App">
          <NavBar petzArray = {petzArray}/>
          <Landing petzArray = {petzArray}/>
        </div>
  );
}

export default App;
