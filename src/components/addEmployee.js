import React, { useState } from 'react';
import './addEmployee.css'; 

const AddEmployee = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Employee Added:', { name, email, position });
    
    setName('');
    setEmail('');
    setPosition('');
  };

  return (
    <div className="add-employee-container">
      <h1>Add Employee</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            id="name"
            className="add-employee-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="name" className="add-employee-label">Name</label>
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            className="add-employee-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="email" className="add-employee-label">Email</label>
        </div>
        <div className="form-group">
          <input
            type="text"
            id="position"
            className="add-employee-input"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            required
          />
          <label htmlFor="position" className="add-employee-label">Position</label>
        </div>
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployee;
