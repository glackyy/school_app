import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  const sidebarItems = [
    { name: 'Overview', icon: 'overview.png' },
    { name: 'Students', icon: 'student.png' },
    { name: 'Exams', icon: 'exam.png' },
    { name: 'Finance', icon: 'accounts.png' },
    { name: 'Administration', icon: 'adminis.png' },
    { name: 'Configurations', icon: 'settings.png' },
  ];

  return (
    <div className="dashboard-container">
      <div className="left-sidebar">
        <h1>MySchool</h1>
        <ul>
          {sidebarItems.map((item, index) => (
            <li key={index}>
              <Link to={`/dashboard/${item.name.toLowerCase()}`}>
                <img src={item.icon} alt={item.name} /> {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="dashboard-main-content">
        <div className="dashboard-header">
          <div className="dashboard-title">
            <h1>Dashboard</h1>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
          </div>
          <div className="notifications">
            {/* You can replace 'notification-icon.png' with the actual URL for the icon */}
            <img src="bell.png" alt="Notifications" />
          </div>
        </div>

        {/* Your main content goes here */}
        <div className="main-content"></div>
      </div>
    </div>
  );
}

export default Dashboard;
