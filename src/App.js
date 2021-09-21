import React, { useState, useEffect } from 'react'; 
import {Route, Link} from 'react-router-dom';

import NavBar from "./components/NavBar";
import GameInfo from './components/GameInfo';
import Metrics from './components/Metrics';
import Petz from './components/Petz';
import Updates from './components/Updates'
import Team from './components/Team'
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

//Petz Object Array info for image display on pages 
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
  const [countFooter, setCountFooter] = useState(0)

  useEffect(() => { 
    setCount(Math.floor(Math.random() * petzArray.length))
    setCountFooter(Math.floor(Math.random() * petzArray.length));
  })


  return (
        <div className="App">
          <NavBar petzArray = {petzArray[count]}/>
          <Route exact path="/"><Landing petzArray = {petzArray[count]}/></Route>
          <Route exact path="/GameInfo"><GameInfo/></Route>
          <Route exact path="/Metrics"><Metrics/></Route>
          <Route exact path="/Updates"><Updates/></Route>
          <Route exact path="/Team"><Team/></Route>
          <Route exact path="/Petz"><Petz/></Route>
          <Footer petzArray = {petzArray[countFooter]}/>
        </div>
  );
}

export default App;
