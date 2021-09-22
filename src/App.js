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

import mouse from './images/petzImages/mouse.png' 
import icebird from './images/petzImages/icebird.png'
import dragon from './images/petzImages/dragon.png' 
import bear from './images/petzImages/bear.png'
import stormApe from './images/petzImages/storm-ape.png'
import seal from './images/petzImages/seal.png'
import firebear from './images/petzImages/firebear.png'
import ninja from './images/petzImages/ninja.png'
import bull from './images/petzImages/bull.png';
import racoon from './images/petzImages/racoon.png'; 
import chick from './images/petzImages/chick.png';
import pony from './images/petzImages/pony.png'; 
import shark from './images/petzImages/shark.png'; 
import squid from './images/petzImages/squid.png'; 
import light from './images/petzImages/light.png'; 
import owl from './images/petzImages/owl.png';


//Petz Object Array info for image display on pages 
const allPetzArray = [mouse, icebird, dragon, bear, stormApe, seal, firebear, ninja, bull, racoon, chick, pony, shark, 
                      squid, light, owl];
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
  },[])


  return (
        <div className="App">
          <NavBar petzArray = {petzArray[count]}/>
          <Route exact path="/"><Landing petzArray = {petzArray[count]}/></Route>
          <Route exact path="/GameInfo"><GameInfo allPetzArray = {allPetzArray}/></Route>
          <Route exact path="/Metrics"><Metrics/></Route>
          <Route exact path="/Updates"><Updates/></Route>
          <Route exact path="/Team"><Team/></Route>
          <Route exact path="/Petz"><Petz/></Route>
          <Footer petzArray = {petzArray[countFooter]}/>
        </div>
  );
}

export default App;
