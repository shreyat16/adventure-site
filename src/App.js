import React, {Component} from 'react';
import './App.css';
import {Route,Switch} from "react-router-dom";
import NavBar from 'Components/NavBar';
import HomePage from 'pages/HomePage/HomePage'
import Zombie from 'pages/ZombieFiles/Zombie'
import MurderMystery from 'pages/MurderMysteryFiles/MurderMystery'


class App extends Component{
  render(){
    return (
      <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path="/" render={() => <HomePage />}/>
          <Route exact path="/zombie" render={() => <Zombie />}/>
          <Route exact path="/murdermystery" render={() => <MurderMystery />}/>
        </Switch>
      </div>
    );
  }
}

export default App;
