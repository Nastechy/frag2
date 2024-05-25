import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-end z-50 mb-52">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-white p-4 rounded-lg shadow-lg z-10 bottom-20">
        {children}
      </div>
    </div>
  );
};

export default Modal;
