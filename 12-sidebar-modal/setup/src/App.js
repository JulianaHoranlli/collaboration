import React from 'react';
import { useGlobalContext } from './context';
import Modal from './Modal';
import Sidebar from './Sidebar';

const App = () => {
  const { openModal, openSidebar } = useGlobalContext();

  return (
    <main>
      <button
        className="sidebar-toggle"
        onClick={openSidebar}
        style={{
          position: 'absolute',
          top: '1rem',
          left: '1rem',
          fontSize: '2rem',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        ☰
      </button>

      <section
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <button className="btn" onClick={openModal}>
          Show Modal
        </button>
      </section>

      <Sidebar />
      <Modal />
    </main>
  );
};

export default App;
