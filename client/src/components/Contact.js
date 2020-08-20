import React from 'react';
import Navigation from './Navigation';
import Links from './Links';

function Contact() {
  return (
    <div> 
      <Navigation />
      <Links />
      <div className="Window Contact">
        <div className="home-details">
          <from>
            <label>Name</label>
            <input 
              type="text" 
              name="name"
              placeholder="Please enter your full name"
            />
            <label>Email</label>
            <input 
              type="email" 
              name="email"
              placeholder="Please enter your email address"
            />
            <label>Name</label>
            <textarea 
              name="suject"
              placeholder="Please enter your message here"
            />
          </from>
        </div>
      </div>

    </div>  
  );
}

export default Contact;
