import React, { useState, useEffect } from 'react'; 
import {Route, Link} from 'react-router-dom';

//Main site Pages and routing
import LoadingScreen from './components/LoadingScreen';
import NavBar from "./components/NavBar";
import StoryTime from "./components/StoryTime";
import GameInfo from './components/GameInfo';
import Metrics from './components/Metrics';
import Petz from './components/Petz';
import Updates from './components/Updates'
import Team from './components/Team';
import Landing from "./components/Landing";
import StakePool from "./components/StakePool"
import Footer from "./components/Footer";
import './index.css';

//Metric pages routed from Metrics main page
import Fire from "./components/typeMetricPages/Fire";
import Water from "./components/typeMetricPages/Water";
import Electric from "./components/typeMetricPages/Electric";
import Grass from "./components/typeMetricPages/Grass";
import Ice from "./components/typeMetricPages/Ice";
import Combat from "./components/typeMetricPages/Combat";
import Poison from './components/typeMetricPages/Poison';
import Earth from './components/typeMetricPages/Earth';
import Flying from './components/typeMetricPages/Flying';
import Spirit from "./components/typeMetricPages/Spirit";
import Insect from "./components/typeMetricPages/Insect";
import Psychic from "./components/typeMetricPages/Psychic"; 
import Drake from "./components/typeMetricPages/Drake";
import Shadow from "./components/typeMetricPages/Shadow"; 
import Metal from "./components/typeMetricPages/Metal";
import Fae from "./components/typeMetricPages/Fae"; 
import Lava from "./components/typeMetricPages/Lava"; 
import Sound from "./components/typeMetricPages/Sound"; 

//Import images for main page and Home logo
import mouse from './images/petzImages/mouse.png';
import icebird from './images/petzImages/icebird.png';
import dragon from './images/petzImages/dragon.png';
import bear from './images/petzImages/bear.png';
import stormApe from './images/petzImages/storm-ape.png';
import seal from './images/petzImages/seal.png';
import firebear from './images/petzImages/firebear.png';
import ninja from './images/petzImages/ninja.png';
import bull from './images/petzImages/bull.png';
import racoon from './images/petzImages/racoon.png'; 
import chick from './images/petzImages/chick.png';
import pony from './images/petzImages/pony.png'; 
import shark from './images/petzImages/shark.png'; 
import squid from './images/petzImages/squid.png'; 
import light from './images/petzImages/light.png'; 
import owl from './images/petzImages/owl.png';

//Egg images 
import fireEgg from "./images/eggs/Fire_Egg_REV1.png";
import fairyEgg from "./images/eggs/Fairy_Egg_REV1.png";
import electricEgg from "./images/eggs/Electric_Egg_REV1.png";
import grassEgg from "./images/eggs/Grass_Egg_REV1.png";
import iceEgg from "./images/eggs/Ice_Egg_REV1.png";
import lavaEgg from "./images/eggs/Lava_Egg_REV1.png";
import legendaryEgg from "./images/eggs/Legendary_Egg_REV1.png";
import metalEgg from "./images/eggs/Metal_Egg_REV1.png";
import normalEgg from "./images/eggs/Normal_Egg_REV1.png";
import shadowEgg from "./images/eggs/Shadow_Egg_REV1.png";
import soundEgg from "./images/eggs/Sound_Egg_REV1.png";
import waterEgg from "./images/eggs/Water_Egg_REV1.png";

//Petz Object Array info for image display on pages 
const eggArray = [fireEgg, fairyEgg, electricEgg, grassEgg, iceEgg, lavaEgg, legendaryEgg, metalEgg, normalEgg, shadowEgg,
                  soundEgg, waterEgg];

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

  //Light/Dark mode 
  const [mode, setMode] = useState(true); 

  const changeMode = () => { 
    setMode(!mode); 
  }

  //Check width
  const [width, setWidth] = useState(window.innerWidth); 

  useEffect(() => { 
    window.addEventListener('resize', () => setWidth(window.innerWidth)); 
  }, []);

  //Loading page check
  const [loading, setLoading] = useState(true)

  useEffect(() => { 
      setTimeout(() => setLoading(false), 12000)
  }, []);

  //Generate random petz to display 
  const [count, setCount] = useState(0)
  const [countFooter, setCountFooter] = useState(0)

  useEffect(() => { 
    setCount(Math.floor(Math.random() * petzArray.length))
    setCountFooter(Math.floor(Math.random() * petzArray.length));
  },[])

  return (
    <>
    {loading ? <LoadingScreen/> :
        <div className="App">
          <NavBar petzArray = {petzArray[count]} width={width} mode={mode} changeMode ={changeMode}/>
          <Route exact path="/Cryptopetz-demo-site"><Landing petzArray = {pony}/></Route>
          <Route exact path="/StoryTime"><StoryTime/></Route>
          <Route exact path="/GameInfo"><GameInfo allPetzArray = {allPetzArray} eggArray = {eggArray}/></Route>
          <Route exact path="/Metrics"><Metrics/></Route>
          <Route exact path="/Updates"><Updates allPetzArray = {allPetzArray}/></Route>
          <Route exact path="/Team"><Team/></Route>
          <Route exact path="/Petz"><Petz/></Route>
          <Route exact path="/StakePool"><StakePool/></Route>


          <Route exact path="/Fire"><Fire/></Route>
          <Route exact path="/Water"><Water/></Route>
          <Route exact path="/Electric"><Electric/></Route>
          <Route exact path="/Grass"><Grass/></Route>
          <Route exact path="/Ice"><Ice/></Route>
          <Route exact path="/Combat"><Combat/></Route>
          <Route exact path="/Poison"><Poison/></Route>
          <Route exact path="/Earth"><Earth/></Route>
          <Route exact path="/Flying"><Flying/></Route>
          <Route exact path="/Psychic"><Psychic/></Route>
          <Route exact path="/Insect"><Insect/></Route>
          <Route exact path="/Spirit"><Spirit/></Route>
          <Route exact path="/Drake"><Drake/></Route>
          <Route exact path="/Shadow"><Shadow/></Route>
          <Route exact path="/Metal"><Metal/></Route>
          <Route exact path="/Fae"><Fae/></Route>
          <Route exact path="/Lava"><Lava/></Route>
          <Route exact path="/Sound"><Sound/></Route>
          <Footer petzArray = {petzArray[countFooter]} mode={mode}/>
        </div>
    }
    </>
  );
}

export default App;