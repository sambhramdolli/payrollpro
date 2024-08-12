import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../Employee/EmployeeNavbar.css';
import { IoIosPersonAdd } from "react-icons/io";
import { RiArrowDropDownLine, RiLogoutCircleFill } from "react-icons/ri";
import { FaHandsHelping, FaPrescription } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import img1 from "../../assets/S.jpg"; // Your logo image
import img2 from "../../assets/profile.png"; // Your profile image

const EmployeeNavBar = ({ onButtonClick }) => {
  const [dropdownVisible, setDropdownVisible] = useState({
    profile: false,
    ticket: false,
    team: false,
    recruitment: false,
    training: false,
    attendance: false,
  });

  const dropdownRefs = {
    profile: useRef(null),
    ticket: useRef(null),
    team: useRef(null),
    recruitment: useRef(null),
    training: useRef(null),
    attendance: useRef(null),
  };

  const toggleDropdown = (type) => {
    setDropdownVisible(prev => ({
      ...prev,
      [type]: !prev[type],
      ...Object.keys(dropdownVisible).reduce((acc, key) => {
        if (key !== type) acc[key] = false; // Close other dropdowns
        return acc;
      }, {}),
    }));
  };

  const handleOutsideClick = (event) => {
    Object.keys(dropdownRefs).forEach(key => {
      if (dropdownVisible[key] && dropdownRefs[key].current && !dropdownRefs[key].current.contains(event.target)) {
        setDropdownVisible(prev => ({ ...prev, [key]: false }));
      }
    });
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [dropdownVisible]);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={img1} alt="Logo" className='logo' />
      </div>

      <div className='nav'>
        {/* Team Dropdown */}
        

        {/* Ticket Dropdown */}
        <div className="profile-icon" onClick={() => toggleDropdown('ticket')} ref={dropdownRefs.ticket}>
          <div className='ticket1'>
            <p className='gd'>Raise Tickets</p>
            <RiArrowDropDownLine className='col' />
          </div>
          {dropdownVisible.ticket && (
            <div className='aa'>
              <div className="dropdown-menu2">
              <button className="menu12" onClick={() => onButtonClick('raiseticket')}>
                Raise Ticket
              </button>
              <button className="menu12" onClick={() => onButtonClick('myticket')}>
                My Ticket
              </button>
              </div>
            </div>
          )}
        </div>


        {/* Profile Dropdown */}
        <div className="profile-icon" onClick={() => toggleDropdown('profile')} ref={dropdownRefs.profile}>
          <img src={img2} alt="Profile" />
          {dropdownVisible.profile && (
            <div className="dropdown-menu">
              <button className="menu1" onClick={() => onButtonClick('myProfile')}>
                <IoIosPersonAdd className='icon' />
                My Profile
              </button>
              <button className="menu1" onClick={() => onButtonClick('employeeresignation')}>
                <FaPrescription className='icon' />
                Resignation
              </button>
              <button className="menu1" onClick={() => onButtonClick('employeesetting')}>
                <IoSettings className='icon' />
                Settings
              </button>
              <button className="menu1" onClick={() => onButtonClick('employeehelp')}>
                <FaHandsHelping className='icon' />
                Help
              </button>
              <button className="menu1" onClick={() => onButtonClick('employeelogout')}>
                <RiLogoutCircleFill className='icon' />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default EmployeeNavBar;

