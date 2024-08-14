// src/components/RaiseTicket.js
import React, { useContext, useState } from 'react';
import { TicketContext } from '../../../contexts/TicketContext'; // Adjust the path as necessary
import './Raiseticket.css';

const RaiseTicket = () => {
    const { addTicket } = useContext(TicketContext);
    const [ticket, setTicket] = useState({
        title: '',
        description: '',
        priority: 'low',
        location: 'bangalore',
        supportTeam: 'query',
        file: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        addTicket(ticket);
        setTicket({
            title: '',
            description: '',
            priority: 'low',
            location: 'bangalore',
            supportTeam: 'query',
            file: null,
        });
        alert('Ticket raised successfully!');
    };

    const handleFileChange = (e) => {
        setTicket({ ...ticket, file: e.target.files[0] });
    };

    return (
        <div className="raise-ticket-container">
            <h2>Raise Ticket</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Location:</label>
                    <select
                        value={ticket.location}
                        onChange={(e) => setTicket({ ...ticket, location: e.target.value })}
                    >
                        <option value="" disabled>Select location</option>
                        <option value="bangalore">Bangalore</option>
                        <option value="hyderabad">Hyderabad</option>
                    </select>
                </div>
                <div>
                    <label>Support Team:</label>
                    <select
                        value={ticket.supportTeam}
                        onChange={(e) => setTicket({ ...ticket, supportTeam: e.target.value })}
                    >
                        <option value="" disabled>Select support team</option>
                                <option value="HR Support">HR Support</option>
                                <option value="Manager Support">Manager Support</option>
                                <option value="Leader Support">Leader Support</option>
                                <option value="Customer Support">Customer Support</option>
                    </select>
                </div>
                <div>
                    <label>Priority:</label>
                    <select
                        value={ticket.priority}
                        onChange={(e) => setTicket({ ...ticket, priority: e.target.value })}
                    >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        value={ticket.description}
                        onChange={(e) => setTicket({ ...ticket, description: e.target.value })}
                        required
                    />
                </div>
                <div>
                    <label>Attach File:</label>
                    <input
                        type="file"
                        onChange={handleFileChange}
                    />
                </div>
                <button type="submit">Raise Ticket</button>
            </form>
        </div>
    );
};

export default RaiseTicket;
