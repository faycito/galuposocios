import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/home'
import Registro from './components/registro'
import Profile from './components/profile'

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/registro" component={Registro} />
      <Route path="/profile" component={Profile} />
  </Router>
  );
}

export default App;
