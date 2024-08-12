import React from 'react';
import './Employeebyproject.css';

const Employeebyproject = ({ onProjectSelect }) => {
    const projects = [
        { id: 1, name: 'Payroll Projects' },
        { id: 2, name: 'XML Project' },
    ];

    return (
        <div className="container project-list">
            <h2 className='fd'>Projects</h2>
            <ul>
                {projects.map(project => (
                    <li key={project.id} onClick={() => onProjectSelect(project.id)}>
                        {project.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Employeebyproject;
