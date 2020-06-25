import React from 'react';
import Navigation from './Navigation';
import Links from './Links';
import './Home.css';

function Home() {
  return (
    <div> 
      <Links />
        <div className="Window">
        <div className="Home">
          <Navigation />
          <div className="home-details">
            <h1 className="name" >Faye Carter</h1>
            <h2>Junior Full Stack Developer</h2>
          </div>
        </div>
      </div>
    </div>  
  );
}

export default Home;
