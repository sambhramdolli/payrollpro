import React, { useState } from 'react';
import '../AdminProfile/Adminprofile.css';

const MyProfile = () => {
  const [profileData, setProfileData] = useState({
    personalNumber: '',
    personalEmail: '',
    bloodGroup: '',
    maritalStatus: '',
    nationality: '',
    permanentAddress: '',
    currentAddress: '',
    fullName: '',
    employeeId: '',
    workEmail: '',
    workNumber: '',
    previousJobTitle: '',
    previousCompany: '',
    totalExperience: '',
    highestQualification: '',
    linkedIn: '',
    certifications: '',
    skills: ''
  });

  const [editState, setEditState] = useState({
    personal: false,
    employee: false,
    background: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleEdit = (section) => {
    setEditState({ ...editState, [section]: !editState[section] });
  };

  const handleSubmit = (section, e) => {
    e.preventDefault();
    console.log(`Profile Data for ${section} Submitted:`, profileData);
    setEditState({ ...editState, [section]: false });
  };

  return (
    <div className="profile-container">
      {/* Personal Information Section */}
      <div className="profile-section">
        <h2>Personal Information</h2>
        {editState.personal ? (
          <form onSubmit={(e) => handleSubmit('personal', e)}>
            <div className="info-item">
              <label>Personal Number</label>
              <input type="text" name="personalNumber" value={profileData.personalNumber} onChange={handleChange} />
            </div>
            <div className="info-item">
              <label>Personal Email</label>
              <input type="email" name="personalEmail" value={profileData.personalEmail} onChange={handleChange} />
            </div>
            <div className="info-item">
              <label>Blood Group</label>
              <input type="text" name="bloodGroup" value={profileData.bloodGroup} onChange={handleChange} />
            </div>
            <div className="info-item">
              <label>Marital Status</label>
              <input type="text" name="maritalStatus" value={profileData.maritalStatus} onChange={handleChange} />
            </div>
            <div className="info-item">
              <label>Country of Nationality</label>
              <input type="text" name="nationality" value={profileData.nationality} onChange={handleChange} />
            </div>
            <div className="info-item">
              <label>Permanent Address</label>
              <input type="text" name="permanentAddress" value={profileData.permanentAddress} onChange={handleChange} />
            </div>
            <div className="info-item">
              <label>Current Address</label>
              <input type="text" name="currentAddress" value={profileData.currentAddress} onChange={handleChange} />
            </div>
            <button type="submit" className="save-button">Save</button>
          </form>
        ) : (
          <div className="info-display">
            <p><strong>Personal Number:</strong> {profileData.personalNumber}</p>
            <p><strong>Personal Email:</strong> {profileData.personalEmail}</p>
            <p><strong>Blood Group:</strong> {profileData.bloodGroup}</p>
            <p><strong>Marital Status:</strong> {profileData.maritalStatus}</p>
            <p><strong>Nationality:</strong> {profileData.nationality}</p>
            <p><strong>Permanent Address:</strong> {profileData.permanentAddress}</p>
            <p><strong>Current Address:</strong> {profileData.currentAddress}</p>
            <button onClick={() => handleEdit('personal')} className="edit-button">Edit</button>
          </div>
        )}
      </div>

      {/* Employee Information Section */}
      <div className="profile-section">
        <h2>Employee Information</h2>
        {editState.employee ? (
          <form onSubmit={(e) => handleSubmit('employee', e)}>
            <div className="info-item">
              <label>Full Name</label>
              <input type="text" name="fullName" value={profileData.fullName} onChange={handleChange} />
            </div>
            <div className="info-item">
              <label>Employee ID</label>
              <input type="text" name="employeeId" value={profileData.employeeId} onChange={handleChange} />
            </div>
            <div className="info-item">
              <label>Work Email</label>
              <input type="email" name="workEmail" value={profileData.workEmail} onChange={handleChange} />
            </div>
            <div className="info-item">
              <label>Work Number</label>
              <input type="text" name="workNumber" value={profileData.workNumber} onChange={handleChange} />
            </div>
            <button type="submit" className="save-button">Save</button>
          </form>
        ) : (
          <div className="info-display">
            <p><strong>Full Name:</strong> {profileData.fullName}</p>
            <p><strong>Employee ID:</strong> {profileData.employeeId}</p>
            <p><strong>Work Email:</strong> {profileData.workEmail}</p>
            <p><strong>Work Number:</strong> {profileData.workNumber}</p>
            <button onClick={() => handleEdit('employee')} className="edit-button">Edit</button>
          </div>
        )}
      </div>

      {/* Personal and Academic Background Section */}
      <div className="profile-section">
        <h2>Personal and Academic Background</h2>
        {editState.background ? (
          <form onSubmit={(e) => handleSubmit('background', e)}>
            <div className="info-item">
              <label>Previous Job Title</label>
              <input type="text" name="previousJobTitle" value={profileData.previousJobTitle} onChange={handleChange} />
            </div>
            <div className="info-item">
              <label>Previous Company</label>
              <input type="text" name="previousCompany" value={profileData.previousCompany} onChange={handleChange} />
            </div>
            <div className="info-item">
              <label>Total Experience (years)</label>
              <input type="text" name="totalExperience" value={profileData.totalExperience} onChange={handleChange} />
            </div>
            <div className="info-item">
              <label>Highest Qualification</label>
              <input type="text" name="highestQualification" value={profileData.highestQualification} onChange={handleChange} />
            </div>
            <div className="info-item">
              <label>LinkedIn Profile</label>
              <input type="text" name="linkedIn" value={profileData.linkedIn} onChange={handleChange} />
            </div>
            <div className="info-item">
              <label>Certifications</label>
              <input type="text" name="certifications" value={profileData.certifications} onChange={handleChange} />
            </div>
            <div className="info-item">
              <label>Skills</label>
              <input type="text" name="skills" value={profileData.skills} onChange={handleChange} />
            </div>
            <button type="submit" className="save-button">Save</button>
          </form>
        ) : (
          <div className="info-display">
            <p><strong>Previous Job Title:</strong> {profileData.previousJobTitle}</p>
            <p><strong>Previous Company:</strong> {profileData.previousCompany}</p>
            <p><strong>Total Experience:</strong> {profileData.totalExperience} years</p>
            <p><strong>Highest Qualification:</strong> {profileData.highestQualification}</p>
            <p><strong>LinkedIn Profile:</strong> <a href={profileData.linkedIn} target="_blank" rel="noopener noreferrer">{profileData.linkedIn}</a></p>
            <p><strong>Certifications:</strong> {profileData.certifications}</p>
            <p><strong>Skills:</strong> {profileData.skills}</p>
            <button onClick={() => handleEdit('background')} className="edit-button">Edit</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyProfile;
