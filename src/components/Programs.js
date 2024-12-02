import React from 'react';
import '../styles/Programs.css';

export default function Programs() {
  return (
    <section id="programs" className="programs">
      <h2>Programs and Packages</h2>

      {/* Programs Section */}
      <h3 className="section-title">Programs</h3>
      <div className="program-list">
        <div className="program-item">
          <img src="assets/images/programs/massage.png" alt="Single Session" className="program-icon" />
          <h3>A. Single Session</h3>
          <p>
            Discussing and recognizing specific problems, focusing on immediate pain or stiffness, and providing treatment to relieve pain, restore movement, and enhance blood and energy flow.
          </p>
          <p><strong>Duration: One session of 90 minutes.</strong></p>
        </div>

        <div className="program-item">
          <img src="assets/images/programs/foot-massage.png" alt="Foot and Body" className="program-icon" />
          <h3>B. Foot and Body (F&B)</h3>
          <p>
            A 30-minute medical foot massage to identify organ/system issues, followed by 60 minutes of targeted treatment.
          </p>
          <p><strong>Duration: One session of 90 minutes.</strong></p>
        </div>

        <div className="program-item">
          <img src="assets/images/programs/body-massage.png" alt="Back to Flow Program" className="program-icon" />
          <h3>C. Back to Flow (BTF) Program</h3>
          <p>
            Stiffness, blockages, and pain in one area can affect others. This program restores the body’s flexibility and function.
          </p>
          <p><strong>Duration: Typically 5-8 sessions, extendable for longer treatment.</strong></p>
        </div>

        <div className="program-item">
          <img src="assets/images/programs/chronic-problem.png" alt="Chronic Problem" className="program-icon" />
          <h3>D. Chronic Problem or Distinction</h3>
          <p>
            For chronic issues like poor posture or paralysis, medical massage can restore movement and sensation. Requires a customized treatment plan.
          </p>
          <p><strong>Duration: Based on consultation and diagnosis.</strong></p>
        </div>
      </div>

      {/* Packages Section */}
      <h3 className="section-title">Packages</h3>
      <div className="package-list">
        <div className="package-item">
          <img src="assets/images/programs/package1.png" alt="Ease Pain" className="program-icon" />
          <h3>Ease Pain, Regenerate Movement</h3>
          <p>One session of 90 minutes to ease pain and regenerate movement and energy flow.</p>
        </div>

        <div className="package-item">
          <img src="assets/images/programs/package2.png" alt="Rehabilitation" className="program-icon" />
          <h3>Rehabilitation of a Function/System</h3>
          <p>A series of 4-5 sessions to restore specific functions or systems.</p>
        </div>

        <div className="package-item">
          <img src="assets/images/programs/package3.png" alt="Chronic Condition" className="program-icon" />
          <h3>Solving a Chronic Condition</h3>
          <p>Customized treatments based on diagnosis and consultation.</p>
        </div>

        <div className="package-item">
          <img src="assets/images/programs/package4.png" alt="Complementary Activities" className="program-icon" />
          <h3>Referring to Complementary Activities</h3>
          <p>Offered through the Natural Wellness Center with a variety of complementary treatments.</p>
        </div>
      </div>
    </section>
  );
}
