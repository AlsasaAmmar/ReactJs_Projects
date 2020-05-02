import React from 'react';
import './App.css';
import CityCard from './components/CityCard'
import FiveDaysForeCast from './pages/FiveDaysForecast'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <h1> Weather</h1>
      <Router>
      <Route exact path="/" component={CityCard}/>
      <Route exact path="/:cityId" component={FiveDaysForeCast}/>
      </Router>
    </div>
  );
}

export default App;
