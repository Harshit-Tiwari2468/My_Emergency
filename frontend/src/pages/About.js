import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-card">
        <img
          src="https://cdn-icons-png.flaticon.com/512/463/463612.png"
          className="about-icon"
          alt="system"
        />

        <h1 className="about-title">About the System</h1>

        <p className="about-text">
          The Real-Time Emergency Response System is designed to quickly process
          emergency reports, classify them using Machine Learning, and store the
          information for rapid response and analysis.
        </p>

        <h2 className="about-subtitle">Technologies Used</h2>

        <ul className="about-list">
          <li>⚡ React.js for Frontend UI</li>
          <li>⚡ Django REST Framework for API backend</li>
          <li>⚡ Leaflet.js for real-time mapping</li>
          <li>⚡ Machine Learning (RandomForest Model)</li>
          <li>⚡ MySQL / SQLite database</li>
        </ul>

        <p className="about-footer">
          This system helps users raise emergency alerts and ensures authorities
          receive categorized and location-tagged reports instantly.
        </p>
      </div>
    </div>
  );
}

export default About;
