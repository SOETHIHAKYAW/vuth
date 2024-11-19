import React from 'react';
import '../styles/Programs.css';

export default function Programs() {
  return (
    <section id="programs" className="programs">
      <h2>Our Programs and Packages</h2>
      <div className="program-list">
        <div className="program-item">
          <img src="assets/images/programs/massage.png" alt="Simple One Session" className="program-icon"/>
          <h3>Simple One Session</h3>
          <p>Recognize specific problems, focus on immediate pain, and provide relief in one session.</p>
        </div>
        <div className="program-item">
          <img src="assets/images/programs/foot-massage.png" alt="Foot and Body" className="program-icon"/>
          <h3>Foot and Body</h3>
          <p>30 minutes of medical foot massage followed by 60 minutes of targeted body treatment to address specific issues in an organ or system.</p>
        </div>
        <div className="program-item">
          <img src="assets/images/programs/body-massage.png" alt="Back to Flow Program" className="program-icon"/>
          <h3>Back to Flow Program</h3>
          <p>A comprehensive program designed to restore flexibility and function. This program addresses stiffness, blockages, and pain in various areas such as the hip, shoulder, neck, low back, legs, head, and spine. Typically requires 5 or more sessions.</p>
        </div>
        <div className="program-item">
          <img src="assets/images/programs/chronic-problem.png" alt="Chronic Problem or Distinction" className="program-icon"/>
          <h3>Chronic Problem or Distinction</h3>
          <p>Medical massage therapy can help treat long-term issues like back and neck pain, poor posture, or even conditions like paralysis. With proper consultation and treatment adjustment, it can bring movement and sensation back to the limbs, even after decades of problems. This program requires a detailed diagnosis and a customized treatment plan.</p>
        </div>
      </div>
    </section>
  );
}
