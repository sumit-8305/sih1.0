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
          <li><Link to="/docs">Introduction</Link></li>
          <li><Link to="/docs/usage">Usage</Link>
            <ul>
              <li><a href="/docs/#authentication" onClick={(e) => smoothScroll(e, 'authentication')}>Authentication</a></li>
              <li><a href="/docs/#autherization" onClick={(e) => smoothScroll(e, 'autherization')}>Authorization</a></li>
            </ul>
          </li>
          <li><Link to="/docs/api">API Reference</Link></li>
          <li><Link to="/docs/examples">Examples</Link></li>
        </ul>
      </nav>

    </div>
  );
}

export default DocumentationNav;