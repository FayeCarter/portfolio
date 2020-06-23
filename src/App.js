import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Projects from './components/Projects';

function App() {
  return (
    <Router> 
      <Route path="/" exact component={ Home } />
      <Route path="/projects" exact component={ Projects } />
    </ Router>
  );
}

export default App;
