import React, { useState } from 'react';
import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';
import './index.css';
import sublinks from './data';

export default function App() {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <>
    <div className='logo'>Logo</div>
    <nav
      className="navbar"
      onMouseLeave={() => setActiveMenu(null)}
    >
      <ul className="nav-links">
        {sublinks.map((menu, idx) => (
          <li
            key={idx}
            onMouseEnter={() => setActiveMenu(menu.page)}
          >
            {menu.page === 'developers'
              ? 'Solutions'
              : menu.page === 'company'
              ? 'Resources'
              : 'Products'}

            <div
              className={`submenu ${activeMenu === menu.page ? 'show' : ''}`}
            >
              {menu.links.map((link, index) => (
                <a key={index} href={link.url} className="submenu-item">
                  {link.icon} {link.label}
                </a>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </nav>
    </>
  );
}
