import React from 'react';
import manager1_img from '../assets/manager1.jpg';
import manager2_img from '../assets/manager2.jpg';
import manager3_img from '../assets/manager3.jpg';
import manager4_img from '../assets/manager4.jpg';
import manager5_img from '../assets/manager5.jpg';
import './Management.css'; // Import CSS file for additional styling

const Management = () => {
  return (
    <div className="management-container">
      <h1 className="company-name"><span className="company-type">COMPANY NAME</span></h1>
      <p className="company-description">
        "Make something people want” includes making a company that people want to work for.
        The stars will never be green at the same time.
        The universe doesn’t conspire against you, but it doesn’t go out of its way to line up your dreams to the grave with you.
        Pro and con along the way.
      </p>
      <hr className="separator" />
      <h1 className="team-heading">MEET OUR TEAM</h1>
      <div className="team-section">
        <h3 className="team-type">Leadership/Management Team</h3>
        <div className="team-members">
          <div className="card">
            <img className="manager-image" src={manager1_img} alt="John" />
            <h4 className="manager-name">Devansh Rathod</h4>
            <p className="manager-role">Founder/CEO</p>
          </div>
          <div className="card">
            <img className="manager-image" src={manager2_img} alt="John" />
            <h4 className="manager-name">Devansh Rathod</h4>
            <p className="manager-role">Founder/CEO</p>
          </div>
          <div className="card">
            <img className="manager-image" src={manager3_img} alt="John" />
            <h4 className="manager-name">Devansh Rathod</h4>
            <p className="manager-role">Founder/CEO</p>
          </div>
          <div className="card">
            <img className="manager-image" src={manager4_img} alt="John" />
            <h4 className="manager-name">Devansh Rathod</h4>
            <p className="manager-role">Founder/CEO</p>
          </div>
          <div className="card">
            <img className="manager-image" src={manager5_img} alt="John" />
            <h4 className="manager-name">Devansh Rathod</h4>
            <p className="manager-role">Founder/CEO</p>
          </div>
          {/* Repeat the structure for other team members */}
        </div>
      </div>
    </div>
  );
};

export default Management;
