import React, { useState, useRef } from 'react';
import './Teamlead.css';

const TeamLead = ({ onTeamClick }) => {
  const [teamData, setTeamData] = useState([
    {
      teamLeader: "Kamal",
      age: 31,
      qualification: "Computer Science",
      profileImage: "/my.png",
      teamMembers: [
        { id: 1, name: "Naveed", age: 22, qualification: "Computer Science", profileImage: "/my.png" },
        { id: 2, name: "Sharath", age: 23, qualification: "MCA", profileImage: "/my.png" },
        { id: 3, name: "Shahbaz", age: 24, qualification: "Mechanical", profileImage: "/my.png" },
        { id: 4, name: "Tarun", age: 25, qualification: "Computer", profileImage: "/my.png" },
        { id: 5, name: "Kusuma", age: 26, qualification: "Computer Science", profileImage: "/my.png" },
        { id: 6, name: "Banuprakash", age: 27, qualification: "Computer Science", profileImage: "/my.png" },
        { id: 7, name: "Jagadeesh", age: 28, qualification: "Computer Science", profileImage:"/my.png" },
        { id: 8, name: "Nanda", age: 29, qualification: "Computer Science", profileImage: "/my.png" },
      ],
    },
    // Other initial team leaders...
  ]);

  const [newLeader, setNewLeader] = useState({
    teamLeader: '',
    age: '',
    qualification: '',
    profileImage: '/my.png',
    teamMembers: [],
  });

  const [showForm, setShowForm] = useState(false);
  const teamListRef = useRef(null);

  const handleTeamLeaderClick = (team) => {
    onTeamClick('teammembers', team); // Call the function passed as a prop with 'teammembers' and team data
  };

  const scrollToTop = () => {
    if (teamListRef.current) {
      teamListRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewLeader((prevLeader) => ({
      ...prevLeader,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setNewLeader((prevLeader) => ({
        ...prevLeader,
        profileImage: reader.result,
      }));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleAddTeamLeader = (e) => {
    e.preventDefault();
    setTeamData((prevData) => [newLeader, ...prevData]); // Add new leader at the beginning
    setNewLeader({
      teamLeader: '',
      age: '',
      qualification: '',
      profileImage: '/my.png',
      teamMembers: [],
    });
    setShowForm(false);
  };

  const toggleFormVisibility = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="teamlead-container">
      <h2>Team Leaders</h2>
      <button className="add-team-leader-button" onClick={toggleFormVisibility}>
        {showForm ? 'Hide Form' : 'Add Team Leader'}
      </button>

      {showForm && (
        <form className="team-leader-form" onSubmit={handleAddTeamLeader}>
          <input
            type="text"
            name="teamLeader"
            placeholder="Name"
            value={newLeader.teamLeader}
            onChange={handleInputChange}
            required
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={newLeader.age}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="qualification"
            placeholder="Qualification"
            value={newLeader.qualification}
            onChange={handleInputChange}
            required
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          <button type="submit">Add Team Leader</button>
        </form>
      )}

      <div className="team-leaders-list" ref={teamListRef}>
        {teamData.map((team, index) => (
          <div key={index} className="team-leader-card" onClick={() => handleTeamLeaderClick(team)}>
            <img src={team.profileImage} alt={`${team.teamLeader}'s profile`} />
            <h3>{team.teamLeader}</h3>
            <p>Age: {team.age}</p>
            <p>Qualification: {team.qualification}</p>
          </div>
        ))}
      </div>
      <button onClick={scrollToTop} className="scroll-to-top-button">
        Scroll to Top
      </button>
    </div>
  );
};

export default TeamLead;