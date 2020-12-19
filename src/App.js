import React from 'react';
import './App.css';
import Checkout from './Checkout';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header'
import Home from './Home'
import Footer from './Footer';

function App() {
  return (
    <Router>
    <div className="app">
    
      <Switch>
        <Route path="/checkout">
        <Header />
          <Checkout />
        </Route>

        <Route path="/login">
   
        </Route>

        <Route path="/">
        <Header />
          <Home />         
      
          
        </Route>


      </Switch>


      <Footer/>
    </div>
  </Router>
  );
}

export default App;
