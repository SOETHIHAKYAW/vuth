import React, { useState } from 'react';
import '../styles/About.css';

export default function About() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the accordion item
  };

  const aboutData = [
    { title: 'Anatomy Knowledge', desc: 'Understanding the muscles, nerve system, and bones structure.' },
    { title: 'Meridians & Chi', desc: 'Knowledge of the energy flow and meridian mapping in the body.' },
    { title: 'Sensitivity', desc: 'The ability to identify problem areas and apply the right pressure.' },
    { title: 'Strength', desc: 'Adequate strength to apply the correct pressure during treatments.' },
    { title: 'Holistic Approach', desc: 'Ability to offer long-term solutions for chronic issues.' },
    { title: 'Anatomy Understanding', desc: 'It requires an understanding of Anatomy and feeling the location and connections between muscles, the nerve system, blood vessels, lymphatic system, and bones structure.' },
    { title: 'Meridians & Chi (TCM)', desc: 'Knowledge and understanding of the flow of Chi, as known in Traditional Chinese Medicine (TCM), and mapping the flow of the meridians locally for an organ throughout the body.' },
    { title: 'Sensitivity in Treatment', desc: 'The sensitive feeling of the muscle’s smallest contraction and identifying points of illness or pain.' },
    { title: 'Strength for Pressure', desc: 'The ability to apply necessary pressure during the 60 or 90-minute sessions.' },
    { title: 'Wholistic View & Chronic Problem Solving', desc: 'Most people suffer from ongoing chronic stiffness. YMM can detect the problem and suggest a series of treatments to restore the body to a healthy, normal shape, focusing on the spine and skeleton.' },
    { title: 'Preparing the Body for Treatments', desc: 'Medical Massage (MM) is the ultimate base for completing treatments for body, soul, and mind, including practices like Yoga, long-hour meditation, Pilates, and all kinds of land and marine sports.' },
    { title: 'Services of Completing Treatments', desc: 'At Natural Healthcare Center, we suggest a variety of complementary programs, including nutrition and diet, detox and cleansing, art and game therapy, breathing therapy, tantra, and spiritual and psychological sessions.' }
  ];  

  return (
    // <section id="about" className="about">
    //   <h2>About Medical Massage</h2>
    //   <p>
    //     Medical massage (MM) is a therapeutic technique that targets specific muscles and areas of the body
    //     to alleviate pain, enhance healing, and improve flexibility. Unlike traditional massage, it combines
    //     deep tissue techniques with holistic methods that promote the body’s natural healing abilities.
    //   </p>

    //   <div className="card">
    //     <h3>How Does Medical Massage Work?</h3>
    //     <p>
    //       Medical massage focuses on specific benefits that work together to enhance both the physical and emotional
    //       well-being of the client. These include the release of muscle tension, improved blood circulation,
    //       and the promotion of energy flow throughout the body.
    //     </p>
    //     <div className="how-it-works-icons">
    //       <div className="icon">
    //         <img src="assets/images/about/muscle.png" alt="Muscle Contraction" />
    //         <p><strong>Muscle Contraction Release:</strong> MM targets areas where muscle tension has built up,
    //         helping to release contractions and relieve chronic pain.</p>
    //       </div>
    //       <div className="icon">
    //         <img src="assets/images/about/healthcare.png" alt="Blood Flow" />
    //         <p><strong>Blood Flow Regeneration:</strong> Deep tissue techniques regenerate blood flow to areas
    //         with poor circulation, promoting healing.</p>
    //       </div>
    //       <div className="icon">
    //         <img src="assets/images/about/meditation.png" alt="Chi Energy" />
    //         <p><strong>Chi Energy Flow:</strong> MM opens blocked pathways for Chi (vital energy), promoting balance
    //         and energy within the body.</p>
    //       </div>
    //     </div>
    //     <p>
    //       These combined effects can have long-lasting benefits on your health, improving circulation,
    //       restoring tissue elasticity, reducing blood pressure, and enhancing organ health.
    //     </p>
    //   </div>

    //   <div className="card">
    //     <h3>What Makes Medical Massage Different?</h3>
    //     <p>
    //       Unlike general Thai massage, MM requires a deep understanding of anatomy, energy flow, and specialized techniques.
    //       It is an advanced practice that requires years of expertise to treat chronic pain, stiffness, and balance the body's energy.
    //     </p>
    //   </div>

    //   <div className="card">
    //     <h3>What Does a Professional Medical Massage Therapist Need?</h3>
        
    //     <div className="data-list">
    //       {aboutData.map((data, index) => (
    //         <div
    //           key={index}
    //           className={`data-item ${activeIndex === index ? 'active' : ''}`}
    //           onClick={() => handleAccordionClick(index)}
    //         >
    //           <h3>{data.title}</h3>
    //           {activeIndex === index && <p>{data.desc}</p>}
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
    <section id="about" className="about">
      <h2>About Medical Massage</h2>
      <p>
        Medical massage (MM) targets specific muscles to alleviate pain, enhance healing, and improve flexibility.
        It integrates deep tissue techniques with holistic healing methods.
      </p>

      <div className="card">
        <h3>Founder & Philosophy</h3>
        <p>
          Medical-Massage was founded and is managed by K Vuth VVVVVV - a certified Massage therapist living in the island of Koh Phangan.
          K Vuth developed a therapeutic way of massage based on:
        </p>
        <ul>
          <li>Precise diagnosis of pain and stiffness</li>
          <li>Deep muscle therapy</li>
          <li>Energy flow regeneration</li>
        </ul>
      </div>


      <div className="how-it-works-icons">
        <div className="icon">
          <img src="assets/images/about/muscle.png" alt="Muscle Contraction" />
          <p><strong>Muscle Contraction Release:</strong> Relieves chronic pain by easing tension.</p>
        </div>
        <div className="icon">
          <img src="assets/images/about/healthcare.png" alt="Blood Flow" />
          <p><strong>Blood Flow Regeneration:</strong> Enhances circulation for faster healing.</p>
        </div>
          <div className="icon">
            <img src="assets/images/about/meditation.png" alt="Chi Energy" />
            <p><strong>Chi Energy Flow:</strong> MM opens blocked pathways for Chi (vital energy), promoting balance
            and energy within the body.</p>
          </div>
      </div>

      <div className="card">
        <h3>What Does a Professional Medical Massage Therapist Need?</h3>
        <div className="data-list">
          {aboutData.map((data, index) => (
            <div
              key={index}
              className={`data-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => handleAccordionClick(index)}
            >
              <h4>{data.title}</h4>
              {activeIndex === index && <p>{data.desc}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
