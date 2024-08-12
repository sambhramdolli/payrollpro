import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Raiseticket.css'; // CSS for styling
import Modal from './Modal'; // Import the Modal component

const RaiseTicket = ({ addTicket }) => {
    const [location, setLocation] = useState('');
    const [supportTeam, setSupportTeam] = useState('');
    const [queryType, setQueryType] = useState('');
    const [reason, setReason] = useState('');
    const [priority, setPriority] = useState('');
    const [description, setDescription] = useState('');
    const [attachment, setAttachment] = useState(null);
    const [loading, setLoading] = useState(false);
    const [modalOpen, setModalOpen] = useState(false); // State to control modal visibility
    const [modalMessage, setModalMessage] = useState(''); // State to set modal message
    const navigate = useNavigate();
    const formContainerRef = useRef(null);

    const getRecipients = (supportTeam) => {
        const recipients = {
            'HR Support': ['sharathnvmca2023@gmail.com', 'sharathachar55@gmail.com'],
            'Manager Support': ['sharathachar55@gmail.com', 'sharathnvmca2023@gmail.com'],
            'Leader Support': ['kamalmeda0139@gmail.com', 'sharathachar55@gmail.com'],
            'Customer Support': ['sharathachar55@gmail.com', 'sharathnvmca2023@gmail.com'],
        };
        return recipients[supportTeam] || [];
    };

    const sendEmails = async (ticket) => {
        setLoading(true);
        const emailBody = `
            <h3>New Ticket Submitted</h3>
            <p><strong>Location:</strong> ${ticket.location}</p>
            <p><strong>Support Team:</strong> ${ticket.supportTeam}</p>
            <p><strong>Query Type:</strong> ${ticket.queryType}</p>
            <p><strong>Reason:</strong> ${ticket.reason}</p>
            <p><strong>Priority:</strong> ${ticket.priority}</p>
            <p><strong>Description:</strong> ${ticket.description}</p>
            <p><strong>Attachment:</strong> ${ticket.attachment ? ticket.attachment : 'None'}</p>
        `;

        const recipients = getRecipients(ticket.supportTeam);

        try {
            const response = await fetch('http://localhost:5000/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    recipients: recipients,
                    subject: 'New Ticket Submitted',
                    body: emailBody,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to send email');
            }

            const result = await response.json();
            console.log(result);
            setModalMessage('Ticket submitted successfully!'); // Set modal message
            setModalOpen(true); // Open modal
        } catch (error) {
            console.error('Error sending email:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTicket = {
            id: Date.now(),
            location,
            supportTeam,
            queryType,
            reason,
            priority,
            description,
            attachment: attachment ? attachment.name : null,
        };
        addTicket(newTicket);
        sendEmails(newTicket);
        clearForm();
    };

    const clearForm = () => {
        setLocation('');
        setSupportTeam('');
        setQueryType('');
        setReason('');
        setPriority('');
        setDescription('');
        setAttachment(null);
    };

    const handleCancel = () => {
        clearForm();
        navigate('/');
    };

    const scrollToTop = () => {
        if (formContainerRef.current) {
            formContainerRef.current.scrollTop = 0;
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const form = e.target.form;
            const formElements = Array.from(form.elements);
            const nextElement = formElements[index + 1];
            if (nextElement) {
                nextElement.focus();
            }
        }
    };

    const closeModal = () => {
        setModalOpen(false);
        navigate('/');
    };

    return (
        <div className="submit-ticket">
            <h1>Raise Ticket</h1>
            <div className="form-contain" ref={formContainerRef}>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className='gf'>Location:</label>
                        <select
                            value={location}
                            onChange={(e) =>  setLocation(e.target.value)}
                            onKeyDown={(e) => handleKeyDown(e, 0)}
                            required
                        >
                            <option value="" disabled>Select location</option>
                            <option value="Bangalore">Bangalore</option>
                            <option value="Hyderabad">Hyderabad</option>
                        </select>
                    </div>
                    <div className="form-row">
                        <div className="form-group half-width">
                            <label className='gf'>Support Team:</label>
                            <select
                                value={supportTeam}
                                onChange={(e) => setSupportTeam(e.target.value)}
                                onKeyDown={(e) => handleKeyDown(e, 1)}
                                required
                            >
                                <option value="" disabled>Select support team</option>
                                <option value="HR Support">HR Support</option>
                                <option value="Manager Support">Manager Support</option>
                                <option value="Leader Support">Leader Support</option>
                                <option value="Customer Support">Customer Support</option>
                            </select>
                        </div>
                        <div className="form-group half-width">
                            <label className='gf'>Query Type:</label>
                            <select
                                value={queryType}
                                onChange={(e) => setQueryType(e.target.value)}
                                onKeyDown={(e) => handleKeyDown(e, 2)}
                                required
                            >
                                <option value="" disabled>Select query type</option>
                                <option value="Leave Query">Leave Query</option>
                                <option value="Timesheet">Timesheet</option>
                                <option value="Changes to Employee Profile">Changes to Employee Profile</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group half-width">
                            <label className='gf'>Reason:</label>
                            <input
                                type="text"
                                value={reason}
                                onChange={(e) => setReason(e.target.value)}
                                onKeyDown={(e) => handleKeyDown(e, 3)}
                                required
                            />
                        </div>
                        <div className="form-group half-width">
                            <label className='gf'>Priority:</label>
                            <select
                                value={priority}
                                onChange={(e) => setPriority(e.target.value)}
                                onKeyDown={(e) => handleKeyDown(e, 4)}
                                required
                            >
                                <option value="" disabled>Select priority</option>
                                <option value="High">High</option>
                                <option value="Urgent">Urgent</option>
                                <option value="Low">Low</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label label className='gf'>Description:</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            onKeyDown={(e) => handleKeyDown(e, 5)}
                            required
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label className='gf'>Attachment:</label>
                        <input
                            type="file"
                            onChange={(e) => setAttachment(e.target.files[0])}
                            onKeyDown={(e) => handleKeyDown(e, 6)}
                        />
                    </div>
                    <div className="button-row">
                    <button type="submit" className="submit-button" disabled={loading}>Submit</button>
                        <button type="button" className="canc-button" onClick={handleCancel}>Cancel</button>
                        
                    </div>
                </form>
            </div>
            {modalOpen && <Modal message={modalMessage} onClose={closeModal} />}
        </div>
    );
};

export default RaiseTicket;