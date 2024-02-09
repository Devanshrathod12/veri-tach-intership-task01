import React from 'react';
import manager1_img from '../assets/manager1.jpg';
import manager2_img from '../assets/manager2.jpg';
import manager3_img from '../assets/manager3.jpg';
import manager4_img from '../assets/manager4.jpg';
import manager5_img from '../assets/manager5.jpg';
import manager6_img from '../assets/manager6.jpg';
import manager7_img from '../assets/manager7.jpg';
import './Development.css'; // Import CSS file for additional styling

const Development = () => {
  return (
    <div className="development-container">
      <div className="team-heading">
        <h1 className="team-title">DEVELOPMENT TEAM</h1>
      </div>
      <div className="team-members">
        <div className="card">
          <img className="manager-image" src={manager5_img} alt="kerry" />
          <h4 className="manager-name">DEVANSH</h4>
          <p className="manager-role">TEAM LEAD .SE</p>
        </div>
        <div className="card">
          <img className="manager-image" src={manager3_img} alt="soll" />
          <h4 className="manager-name">DEVANSH RATHOD</h4>
          <p className="manager-role">SOFTWARE ENGINEER</p>
        </div>
        <div className="card">
          <img className="manager-image" src={manager1_img} alt="soll" />
          <h4 className="manager-name">DEVANSH RATHOD</h4>
          <p className="manager-role">SOFTWARE ENGINEER</p>
        </div>
        <div className="card">
          <img className="manager-image" src={manager2_img} alt="soll" />
          <h4 className="manager-name">DEVANSH RATHOD</h4>
          <p className="manager-role">SOFTWARE ENGINEER</p>
        </div>
        <div className="card">
          <img className="manager-image" src={manager4_img} alt="soll" />
          <h4 className="manager-name">DEVANSH RATHOD</h4>
          <p className="manager-role">SOFTWARE ENGINEER</p>
        </div>
        <div className="card">
          <img className="manager-image" src={manager3_img} alt="soll" />
          <h4 className="manager-name">DEVANSH RATHOD</h4>
          <p className="manager-role">SOFTWARE ENGINEER</p>
        </div>
        <div className="card">
          <img className="manager-image" src={manager1_img} alt="soll" />
          <h4 className="manager-name">DEVANSH RATHOD</h4>
          <p className="manager-role">SOFTWARE ENGINEER</p>
        </div>
        {/* Repeat the structure for other team members */}
      </div>
    </div>
  );
};

export default Development;
