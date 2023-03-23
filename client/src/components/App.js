import React, {useState, useContext} from 'react'
import { Route, Switch } from "react-router-dom";
import NavBar from './NavBar';
import Home from './Home';
import '../styles/App.css'
import Instrument from './Instrument';
import Checkout from './Checkout';
import About from './About';
import HowItWorks from './HowItWorks';
function App() {
  const [currentInstrument, setCurrentInstrument]= useState("dfg")
  return (
    <div className="">
       <NavBar />
       <Switch>
        <Route exact path="/recipes">
           
        </Route>
        <Route exact path="/">
            <Home setCurrentInstrument={setCurrentInstrument} currentInstrument={currentInstrument}/>
        </Route>
        <Route exact path="/instrument">
            <Instrument currentInstrument={currentInstrument} setCurrentInstrument={setCurrentInstrument}/>
        </Route>
        <Route exact path="/about">
           <About/>
        </Route>
        <Route exact path="/howitworks">
           <HowItWorks/>
        </Route>
        <Route exact path="/checkout">
           <Checkout/>
        </Route>
       </Switch>
     
    </div>
  );
}

export default App;
