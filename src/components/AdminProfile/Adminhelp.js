import React from 'react';
import './Adminhelp.css'; // Import CSS file for styles (create this file)
import { useNavigate } from 'react-router-dom';
import { IoReturnDownBack } from "react-icons/io5";

const AdminHelp = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/');
    };

    return (
        <div className="help-menu">
            <h2 className='rfr'>Help Menu</h2>
            <p>Contact Information:</p>
            <div className="contact-info">
                <ul>
                    <li>Company Email: company@example.com</li>
                    <li>HR Email: hr@example.com</li>
                    <li>Manager Email: manager@example.com</li>
                    <li>Team Leader Email: teamleader@example.com</li>
                </ul>
            </div>
            
            <button className="btk-button" onClick={handleBack}>back</button>
            
        </div>
    );
};

export default AdminHelp;