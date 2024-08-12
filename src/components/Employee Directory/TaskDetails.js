import React from 'react';
import './TaskDetails.css';

const TaskDetails = ({ employee }) => {
    if (!employee) {
        return <div>No employee selected.</div>;
    }

    return (
        <div className="task-details-container">
            <h2 className='h12'>Task Details for {employee.name}</h2>
            <ul>
                {employee.tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    );
};

export default TaskDetails;
