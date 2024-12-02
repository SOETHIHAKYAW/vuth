import React, { useState } from 'react';
import '../styles/FAQ.css';

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const phases = [
    {
      title: '1. ANATOMY',
      description:
        'It requires an understanding of Anatomy and feeling the location and connections between muscles, the nerve system , blood vessels, lymphatic system and bones structure .',
    },
    {
      title: '2. MERIDIANS and CHI',
      description: 'Knowledge and understanding of the flow of the CHI as known to TCM - Traditional Chinese Medicine and mapping the flow of the meridians locally for an organ along the whole body .',
    },
    {
      title: '3. SENSITIVITY',
      description: 'The ability to use pressure whenever needed during the session of 60 or 90 minutes.',
    },
    {
      title: '4. STREGTH',
      description:
        'The ability to use pressure whenever needed during the session of 60 or 90 minutes.',
    },
    {
      title: '5. WHOLISTIC VIEW and CHRONIC PROBLEM SOLVING',
      description: 'Most people suffer from Some on-going chronical stiffness. YMM can detect the problem and suggest a series of treatments to bring the body back to a healthy normal shape of Spine and skeleton.',
    },
    {
      title: '6. PREPARING the BODY for Treatments',
      description: 'MM is the ultimate BASE FOR COMPLETING TREATMENTS – for Body ,Soul & Mind treatments such as YOGA , Long-hours Meditation, Pilates and all kinds of land and marine sports.',
    },
    {
      title: '7. SERVICES of COMPLETING TREATMENTS',
      description:
        'We at NATURAL HEALTHCARE CENTER suggest a variety of completing programs of Diagnostic & Treatment by experts such as: NUTRITION and DIET , DETOX and CLEANSING , Art and Game therapy, Breathing Therapy , Tantra , Spiritual and Psychological sessions.',
    },
  ];

  const faqData = [
    {
      question: 'How does the massage work, what does it do?',
      answer:
        'Medical massage releases muscles contraction, regenerates flow of blood, and improves tissue elasticity.',
    },
    {
      question: 'What is the difference between Thai and Medical massage?',
      answer:
        'Thai massage is more general, while MM requires deep knowledge of anatomy and energy flow.',
    },
    {
      question: 'What is needed from a professional Medical Massage therapist?',
      answer: (
        <div>
          {phases.map((phase, index) => (
            <div key={index}>
              <strong>{phase.title}</strong>
              <p>{phase.description}</p>
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <section id="faq" className="faq">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openQuestion === index ? 'active' : ''}`}
            onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
          >
            <h3>{faq.question}</h3>
            <div>{openQuestion === index && faq.answer}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
