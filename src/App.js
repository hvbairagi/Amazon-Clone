import './App.css';
import Header from './Header';
import Home from './Home';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Checkout from './Checkout'

function App() {
  return (
    <Router>
      <div className="app">  {/* Following BEM convention */}
        <Header/>
        <Switch>
          <Route path="/checkout">
            <Checkout/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
