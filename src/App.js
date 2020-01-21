import React from 'react';
import './App.css';
import NavContainer from './nav/NavContainer.js'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import AllEvents from './components/AllEvents.js';
import MyEvents from './components/MyEvents.js';
import AllParticipation from './components/AllParticipation.js'
import NoPageFound from './components/NoPageFound.js'
import Home from './components/Home.js'
import Signup from './components/Signup.js'

function App() {
  return (
    <div className="App"> 
      
       <Router>
          <NavContainer />
          <Switch>
             <Route exact path="/" component={Home}/>
             <Route path="/events" component={AllEvents}/>
             <Route path="/my-events" component={MyEvents}/>
             <Route path="/participation" component={AllParticipation}/>
             <Route path="/signup" component={Signup}/>
             <Route component={NoPageFound}/>
          </Switch>
       </Router>
    </div>
  );
}

export default App;



