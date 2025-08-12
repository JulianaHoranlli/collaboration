import React from 'react';
import { links, social } from './data';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <h2 className="logo">Logo</h2>

        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.id}>
              <a href={link.url}>{link.text}</a>
            </li>
          ))}
        </ul>

        <ul className="social-icons">
          {social.map((item) => (
            <li key={item.id}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
