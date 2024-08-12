import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { IoIosPersonAdd } from "react-icons/io";
import { RiArrowDropDownLine, RiLogoutCircleFill } from "react-icons/ri";
import { FaHandsHelping, FaPrescription } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import img1 from "../assets/S.jpg"; // Your logo image
import img2 from "../assets/profile.png"; // Your profile image

const NavBar = ({ onButtonClick }) => {
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
        <div className="profile-icon" onClick={() => toggleDropdown('team')} ref={dropdownRefs.team}>
          <div className='ticket'>
            <p className='gd'>Employee Directory</p>
            <RiArrowDropDownLine className='col' />
          </div>
          {dropdownVisible.team && (
            <div className='aa'>
              <div className="dropdown-menu3">
              <button className="menu" onClick={() => onButtonClick('teamlead')}>
              Employee by Team
              </button>
              <button className="menu" onClick={() => onButtonClick('employeebyproject')}>
              Employee by Project
              </button>
              <button className="menu" onClick={() => onButtonClick('employeereport')}>
              Employee Project Reports
              </button>
              </div>
            </div>
          )}
        </div>

        

        {/* Recruitment Dropdown */}
        <div className="profile-icon" onClick={() => toggleDropdown('recruitment')} ref={dropdownRefs.recruitment}>
          <div className='ticket2'>
            <p className='gd'>Recruitment</p>
            <RiArrowDropDownLine className='col' />
          </div>
          {dropdownVisible.recruitment && (
            <div className='aa'>
              <div className="dropdown-menu1">
              <button className="menu23" onClick={() => onButtonClick('interviewscheduling')}>
              Interview Schedule
              </button>
              <button className="menu23" onClick={() => onButtonClick('applicanttracking')}>
              Applicant Tracking
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
              <Link className="menu1" to="#" onClick={() => onButtonClick('adminprofile')}>
                <IoIosPersonAdd className='icon' />
                My Profile
              </Link>
              <Link className="menu1" to="#" onClick={() => onButtonClick('adminresignation')}>
                <FaPrescription className='icon' />
                Resignation
              </Link>
              <Link className="menu1" to="#" onClick={() => onButtonClick('adminsettings')}>
                <IoSettings className='icon' />
                Settings
              </Link>
              <Link className="menu1" to="#" onClick={() => onButtonClick('adminhelp')}>
                <FaHandsHelping className='icon' />
                Help
              </Link>
              <Link className="menu1" to="#" onClick={() => onButtonClick('adminlogout')}>
                <RiLogoutCircleFill className='icon' />
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

