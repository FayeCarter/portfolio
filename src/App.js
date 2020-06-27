import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Projects from './components/Projects';
import ProjectDetails from './components/ProjectDetails';
import MiniProjects from './components/MiniProjects';
import Calculator from './components/mini-projects/Calculator/Calculator';

function App() {
  return (
    <Router> 
      <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/projects" exact component={ Projects } />
        <Route path="/projects/:name" exact component={ ProjectDetails } />
        <Route path="/mini-projects" exact component={ MiniProjects } />
        <Route path="/mini-projects/Calculator" exact component={ Calculator } />
      </Switch>
    </ Router>
  );
}

export default App;
