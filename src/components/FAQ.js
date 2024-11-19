import React, { useState } from 'react';
import '../styles/FAQ.css';

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqData = [
    { question: 'How does pain release muscles?', answer: 'Pain helps to identify areas of tension, allowing targeted therapy to relieve muscle stress.' },
    { question: 'What are the benefits of better flow of Chi energy?', answer: 'Better Chi flow improves overall health, balance, and energy.' },
    { question: 'What are completing treatments recommended?', answer: 'Detox, breathing therapy, and yoga are excellent complements to medical massage.' },
  ];

  return (
    <section id="faq" className="faq">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <h3 onClick={() => toggleQuestion(index)}>{faq.question}</h3>
            {openQuestion === index && <p>{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
