import React from 'react';
import { Link } from 'react-router-dom';
import './css/Documentation.css';

function DocumentationNav() {
  const smoothScroll = (e, targetId) => {
      e.preventDefault(); 
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
  return (
    <div className="documentation-container">
      <nav className="sidebar">
        <h3>Manushi Api Docs</h3>
        <ul>
          <li><Link to="/docs"><a href="/docs/#intro" onClick={(e) => smoothScroll(e, 'intro')}>Introduction</a></Link></li>
          <li>
            <ul>
              <li><a href="/docs/#authentication" onClick={(e) => smoothScroll(e, 'authentication')}>Authentication</a></li>
              <li><a href="/docs/#autherization" onClick={(e) => smoothScroll(e, 'autherization')}>Authorization</a></li>
            </ul>
          </li>
          <li><a href="/docs/#api" onClick={(e) => smoothScroll(e, 'api')}>API Reference</a></li>
          <li><a href="/docs/#example" onClick={(e) => smoothScroll(e, 'example')}>Examples</a></li>
          <li><Link to="/aboutUs" style={{color:'#005792'}}>About Us</Link></li>
        </ul>
      </nav>

    </div>
  );
}

export default DocumentationNav;