import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './context';
import { links, social } from './data';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside className={`sidebar ${isSidebarOpen ? 'show-sidebar' : ''}`}>
      <div className="sidebar-header">
        <h4>Modal Context</h4>
        
        {isSidebarOpen && (
          <button className="close-btn" onClick={closeSidebar}>
            <FaTimes />
          </button>
        )}
      </div>

      <ul className="links">
        {links.map((link) => (
          <li key={link.id}>
            <a href={link.url}>
              {link.icon} {link.text}
            </a>
          </li>
        ))}
      </ul>

      <ul className="social-icons">
        {social.map((socialIcon) => (
          <li key={socialIcon.id}>
            <a href={socialIcon.url}>{socialIcon.icon}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
