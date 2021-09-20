import React, { useState, useEffect } from 'react'; 

import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import './index.css';

import mouse from './images/mouse.png' 
import icebird from './images/icebird.png'
import dragon from './images/dragon.png' 
import bear from './images/bear.png'
import stormApe from './images/storm-ape.png'
import seal from './images/seal.png'
import firebear from './images/firebear.png'
import ninja from './images/ninja.png'

const petzArray = 

[
  {
    img: mouse,
    type: "grass",
    background: "body-grass"
  },
  {
    img: dragon,
    type: "fire",
    background: "body-fire"
  },
  {
    img: firebear,
    type: "fire",
    background: "body-fire"
  },
  {
    img: ninja,
    type: "fighting",
    background: "body-dojo"
  },
  {
    img: bear,
    type: "ice",
    background: "body-ice"
  },
  {
    img: icebird,
    type: "ice",
    background: "body-ice"
  },
  {
    img: stormApe,
    type: "lightning",
    background: "body-lightning"
  },
  {
    img: seal,
    type: "water",
    background: "body-water"
  }
]

function App() {

  const [count, setCount] = useState(0)

  useEffect(() => { 
    setCount(Math.floor(Math.random() * petzArray.length))
  })


  return (
        <div className="App">
          <NavBar petzArray = {petzArray[count]}/>
          <Landing petzArray = {petzArray[count]}/>
          <Footer/>
        </div>
  );
}

export default App;
