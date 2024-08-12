import React from 'react';
import './Modal.css'; // CSS for styling the modal

const Modal = ({ message, onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>{message}</h2>
                <button classname='abg' onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Modal;