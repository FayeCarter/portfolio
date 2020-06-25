import React from 'react';
import './Links.css';

function Links() {
  return (
    <div className="Links">
      <ul className="links-list">
        <a className="github" href="https://github.com/FayeCarter" target="_blank" rel="noopener noreferrer">
          <li className="media-link" >GITHUB</li>
        </a>
        <a className="linkedin" href="https://www.linkedin.com/in/faye-carter-74882bab/" target="_blank" rel="noopener noreferrer">
          <li className="media-link" >LINKEDIN</li>
        </a>
      </ul>
    </div>
  );
}

export default Links;
