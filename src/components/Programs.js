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
            <h3>A. A Single Session</h3>
            <p>
              Discuss and recognize the specific problems, focusing on immediate pain relief, restoring movement, and enhancing blood and energy flow.
            </p>
            <p><strong>Duration: One session of 90 minutes.</strong></p>
          </div>

          <div className="program-item">
            <img src="assets/images/programs/foot-massage.png" alt="Foot and Body" className="program-icon" />
            <h3>B. Foot and Body (F&B)</h3>
            <p>
              Medical Foot massage that identifies problems in specific organs or systems, consisting of a 30-minute foot massage followed by a 60-minute targeted treatment session.
            </p>
            <p><strong>Duration: One session of 90 minutes.</strong></p>
          </div>

          <div className="program-item">
            <img src="assets/images/programs/body-massage.png" alt="Back to Flow Program" className="program-icon" />
            <h3>C. Back to Flow (BTF) Program</h3>
            <p>
              Restores body function and flexibility by addressing interconnected stiffness, blockages, and pain. The program typically runs for 5-8 sessions and may extend for longer durations.
            </p>
            <p><strong>Duration: Typically 5-8 sessions, extendable for longer treatment.</strong></p>
          </div>

          <div className="program-item">
            <img src="assets/images/programs/chronic-problem.png" alt="Chronic Problem" className="program-icon" />
            <h3>D. Chronic Problem or Distinction</h3>
            <p>
              Addresses chronic issues like poor posture or paralysis, focusing on restoration of movement and sensation through targeted medical massage. This requires a consultation and diagnosis.
            </p>
            <p><strong>Duration: According to the specific diagnosis and consultation.</strong></p>
          </div>
        </div>

        {/* Packages Section */}
        <h3 className="section-title">Packages</h3>
        <div className="package-list">
          <div className="package-item">
            <img src="assets/images/programs/facial-massage.png" alt="Ease Pain" className="program-icon" />
            <h3>Ease Pain and Regenerate Movement</h3>
            <p>One 90-minute session focused on easing pain and regenerating movement and energy flow.</p>
          </div>

          <div className="package-item">
            <img src="assets/images/programs/physical-therapy.png" alt="Rehabilitation" className="program-icon" />
            <h3>Rehabilitation of a Function/System</h3>
            <p>A series of 4-5 sessions aimed at restoring the functioning of a specific system or part of the body.</p>
          </div>

          <div className="package-item">
            <img src="assets/images/programs/long-term-care.png" alt="Chronic Condition" className="program-icon" />
            <h3>Solving a Chronic Condition</h3>
            <p>Customized treatments based on thorough diagnosis and consultation, aiming to resolve chronic conditions.</p>
          </div>

          <div className="package-item">
            <img src="assets/images/programs/complementary.png" alt="Complementary Activities" className="program-icon" />
            <h3>Referring to Complementary Activities</h3>
            <p>A variety of complementary treatments offered by the Natural Wellness Center.</p>
          </div>
        </div>
      </section>
  );
}
