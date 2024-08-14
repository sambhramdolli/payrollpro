// src/components/Ticket.js
import React, { useContext } from 'react';
import { TicketContext } from '../contexts/TicketContext'; // Adjust the path as necessary
import './Tickets.css';

const Ticket = () => {
    const { tickets } = useContext(TicketContext);

    return (
        <div className="ticket-container">
            <div className="ticket-header">
                <h1>Tickets</h1>
            </div>
            {tickets.length > 0 ? (
                tickets.map((ticket, index) => (
                    <div key={index} className="ticket-card">
                        <h2>{ticket.title}</h2>
                        <p><strong>Description:</strong> {ticket.description}</p>
                        <p><strong>Priority:</strong> {ticket.priority}</p>
                        <p><strong>Location:</strong> {ticket.location}</p>
                        <p><strong>Support Team:</strong> {ticket.supportTeam}</p>
                        {ticket.file && (
                            <p>
                                <strong>Attached File:</strong> 
                                <a href={URL.createObjectURL(ticket.file)} target="_blank" rel="noopener noreferrer">
                                    {ticket.file.name}
                                </a>
                            </p>
                        )}
                    </div>
                ))
            ) : (
                <p>No tickets available</p>
            )}
        </div>
    );
};

export default Ticket;


