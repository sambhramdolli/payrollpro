import React from 'react';
import './TeamMembers.css';

const TeamMembers = ({ team }) => {
  if (!team) {
    return <div>No team selected.</div>;
  }

  return (
    <div className="team-members-container">
      <h2>{team.teamLeader}'s Team</h2>
      <div className="team-members-list">
        {team.teamMembers.map((member) => (
          <div key={member.id} className="team-member-card">
            <img src={member.profileImage} alt={`${member.name}'s profile`} />
            <h3>{member.name}</h3>
            <p>Age: {member.age}</p>
            <p>Qualification: {member.qualification}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;

