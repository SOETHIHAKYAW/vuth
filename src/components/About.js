import React, { useState } from 'react';
import '../styles/About.css';

export default function About() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the accordion item
  };

  return (
    <section id="about" className="about">
      <div className="card">
        <h3>Founder & Philosophy</h3>
        <p>
          Founded by K Vuth Adiwat Wanpen, a certified massage therapist with over 20 years of experience. The philosophy revolves around:
        </p>
        <ul>
          <li>Diagnosing pain and body limitations accurately.</li>
          <li>Releasing tension through deep, sensitive massage techniques.</li>
          <li>Regenerating blood flow and energy (Chi) to the body.</li>
        </ul>
      </div>

      <div className="card">
        <h3>The Treatment Phases</h3>
        <p>The treatment is composed of four key phases:</p>

        <div className="phase">
          <h4 onClick={() => handleAccordionClick(0)}>
            1. DIAGNOSING <span>{activeIndex === 0 ? '▲' : '▼'}</span>
          </h4>
          {activeIndex === 0 && (
            <p>
              {/* Khun Vuth’s Diagnosis is done by observing abnormalities in the body including
              the patient's movements, testing the ability to control movement, asking 
              questions about the patient's pathology, and asking about the history of work,
              exercise, and past accidents if any.  */}
              <p>
              Khun Vuth’s Diagnosis is done by observing abnormalities in the body including
              the patient's movements, testing the ability to control movement, asking 
              questions about the patient's pathology, and asking about the history of work,
              exercise, and past accidents if any.
              </p>
              <p>
              Following this analytical information, Khun Vuth tracks the real cause of the
              pathology diagnosed and together they identify the specific symptoms such as
              stiffness or blockages.
              </p>
              <p>
              Third phase is to physically examining the symptoms by pressing the finger on
              the points where there is likely to be injury to the muscles and tendons on the
              patient's body
              </p>
            </p>
          )}
        </div>

        <div className="phase">
          <h4 onClick={() => handleAccordionClick(1)}>
            2. RELEASING <span>{activeIndex === 1 ? '▲' : '▼'}</span>
          </h4>
          {activeIndex === 1 && (
            <p>
              Medical Massage or deep tissue massage releases stiff or painful muscles on two levels—outer peripheral muscles and the deeper inner muscles.
            </p>
          )}
        </div>

        <div className="phase">
          <h4 onClick={() => handleAccordionClick(2)}>
            3. REGENERATE BLOOD FLOW <span>{activeIndex === 2 ? '▲' : '▼'}</span>
          </h4>
          {activeIndex === 2 && (
            <p>
              Gently massaging the muscles allows blood flow to traumatized outer muscles and stiff inner-deep muscles, bringing oxygen and nutrition.
            </p>
          )}
        </div>

        <div className="phase">
          <h4 onClick={() => handleAccordionClick(3)}>
            4. REGENERATE FLOW OF QI ENERGY <span>{activeIndex === 3 ? '▲' : '▼'}</span>
          </h4>
          {activeIndex === 3 && (
            <p>
              Deep tissue massage regenerates energy flow through the meridian channels system, often resulting in feelings of vitality and clarity.
            </p>
          )}
        </div>
      </div>

      <div className="how-it-works-icons">
        <div className='card'>
          <div className="icon">
            <img src="assets/images/about/muscle.png" alt="Muscle Contraction" />
            <p><strong>Muscle Contraction Release:<br /></strong> Eases chronic pain by reducing muscle tension.</p>
          </div>
        </div>
        <div className='card'>
          <div className="icon">
            <img src="assets/images/about/healthcare.png" alt="Regeneration of Blood Flow" />
            <p><strong>Regeneration of Blood Flow:<br /></strong> Enhances circulation and energy.</p>
          </div>
        </div>
        <div className='card'>
          <div className="icon">
            <img src="assets/images/about/meditation.png" alt="Meridian Energy" />
            <p><strong>Meridian Energy Balance:<br /></strong> Restores the body’s energy flow.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
