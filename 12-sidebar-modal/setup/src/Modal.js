import React from 'react';
import { useGlobalContext } from './context';

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();

  if (!isModalOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h4>Modal Context</h4>
        <button className="close-btn" onClick={closeModal}>
          ✖
        </button>
      </div>
    </div>
  );
};

export default Modal;
