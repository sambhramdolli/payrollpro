import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoReturnDownBackOutline } from "react-icons/io5";
import './Adminlogout.css';

const Logout = () => {
    const [logoutSuccess, setLogoutSuccess] = useState(false);
    const navigate = useNavigate();

    const handleConfirmLogout = () => {
        // Implement logout logic here
        console.log('Logging out...'); // Placeholder for actual logout logic
        setLogoutSuccess(true);
        setTimeout(() => {
            navigate('/'); // Redirect to home page after a delay
        }, 2000); // 2 second delay before redirecting
    };

    return (
        <div className="logout-container">
            <div className="logout-content">
                <h2 className='hgj'>Confirm Logout</h2>
                <p>Are you sure you want to logout?</p>
                <div className="button-container">
                    <button className="confirm-button" onClick={handleConfirmLogout}>
                        Logout
                    </button>
                    <button className="bck-button">
                        <Link to="/" className="link-button">cancel</Link>
                    </button>
                </div>
                {logoutSuccess && <p className="logout-success">Logout successful!</p>}
            </div>
        </div>
    );
};

export default Logout;