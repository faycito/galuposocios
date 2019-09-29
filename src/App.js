import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,  } from "react-router-dom";
import Home from './components/home'
import Registro from './components/registro'
import Profile from './components/profile'
import LoginPage from './components/registro/login'

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={LoginPage} />
      <Route path="/registro" component={Registro} />
      <Route path="/profile" component={Profile} />
  </Router>
  );
}

export default App;
