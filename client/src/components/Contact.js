import React from 'react';
import Navigation from './Navigation';
import Links from './Links';
import './Contact.css';

function Contact() {
  return (
    <div> 
      <Navigation />
      <Links />
      <div className="Window Contact">
        <form>
          <label>Name:</label>
          <input 
            type="text" 
            name="name"
            placeholder="Please enter your full name"
          />
          <label>Email:</label>
          <input 
            type="email" 
            name="email"
            placeholder="Please enter your email address"
          />
          <label>Subject:</label>
          <textarea 
            name="suject"
            placeholder="Please enter your message here"
          />
          <button type="submit">Send</button>
        </form>
      </div>

    </div>  
  );
}

export default Contact;
