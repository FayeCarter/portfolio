import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Projects from './components/Projects';
import ProjectDetails from './components/ProjectDetails';
import MiniProjects from './components/MiniProjects';

function App() {
  return (
    <Router> 
      <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/projects" exact component={ Projects } />
        <Route path="/projects/:name" exact component={ ProjectDetails } />
        <Route path="/mini-projects" exact component={ MiniProjects } />
      </Switch>
    </ Router>
  );
}

export default App;
