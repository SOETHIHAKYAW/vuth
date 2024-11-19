import React from 'react';
import '../styles/Programs.css';

export default function Programs() {
  return (
    <section id="programs" className="programs">
      <h2>Our Programs and Packages</h2>
      <div className="program-list">
        <div className="program-item">
          <h3>Simple One Session</h3>
          <p>Recognize specific problems, focus on immediate pain, and provide relief in one session.</p>
        </div>
        <div className="program-item">
          <h3>Foot and Body</h3>
          <p>30 minutes of medical foot massage followed by 60 minutes of targeted body treatment.</p>
        </div>
        <div className="program-item">
          <h3>Back to Flow Program</h3>
          <p>A comprehensive program to restore flexibility and function, typically requiring 5+ sessions.</p>
        </div>
      </div>
    </section>
  );
}
