import React, { useState } from 'react';
import './Myteam.css';
import managerPhoto from '../../assets/profile.png';
import teamLeadPhoto from '../../assets/profile.png';
import employee1Photo from '../../assets/profile.png';
import employee2Photo from '../../assets/profile.png';
import employee3Photo from '../../assets/profile.png';
import employee4Photo from '../../assets/profile.png';
import employee5Photo from '../../assets/profile.png';
import employee6Photo from '../../assets/profile.png';

const MyTeam = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);

  const manager = {
    id: 0,
    name: 'Manager Name',
    role: 'Manager',
    experience: '10 years',
    skills: ['Leadership', 'Management'],
    photo: managerPhoto,
    subordinates: [
      {
        id: -1,
        name: 'Team Lead Name',
        role: 'Team Lead',
        experience: '8 years',
        skills: ['Project Management', 'Team Coordination'],
        photo: teamLeadPhoto,
        subordinates: [
          { id: 1, name: 'Employee 1', role: 'Developer', experience: '5 years', skills: ['JavaScript', 'React'], photo: employee1Photo },
          { id: 2, name: 'Employee 2', role: 'Designer', experience: '3 years', skills: ['Photoshop', 'UI/UX'], photo: employee2Photo },
          { id: 3, name: 'Employee 3', role: 'QA', experience: '4 years', skills: ['Testing', 'Automation'], photo: employee3Photo },
        ],
      },
    ],
  };

  const handlePersonClick = (person) => {
    setSelectedPerson(person);
  };

  const handleBackToTeam = () => {
    setSelectedPerson(null);
  };

  const renderPerson = (person) => (
    <div className="profile-box" onClick={() => handlePersonClick(person)}>
      <img src={person.photo} alt={person.name} className="profile-photo" />
      <h3>{person.name}</h3>
      <p>{person.role}</p>
    </div>
  );

  const renderTree = (person) => (
    <div key={person.id} className="tree-node">
      {renderPerson(person)}
      {person.subordinates && (
        <div className="subordinate-section">
          {person.subordinates.map((subordinate) => renderTree(subordinate))}
        </div>
      )}
    </div>
  );

  return (
    <div className={`team-page ${selectedPerson ? 'employee-details-page' : 'main-team-page'}`}>
      <h1 className="team-heading">My Team</h1>
      {selectedPerson ? (
        <div className="employee-details">
          <img src={selectedPerson.photo} alt={selectedPerson.name} className="profile-photo" />
          <h2>{selectedPerson.name}</h2>
          <p>Role: {selectedPerson.role}</p>
          <p>Experience: {selectedPerson.experience}</p>
          <p>Skills: {selectedPerson.skills.join(', ')}</p>
          <button onClick={handleBackToTeam} className="back-button">
            Back to Team
          </button>
        </div>
      ) : (
        <div className="tree-structure">
          {renderTree(manager)}
        </div>
      )}
    </div>
  );
};

export default MyTeam;
