import React from 'react';
import '../styles/Testimonials.css';

export default function Testimonials() {
  const testimonials = [
    {
      text: "This service was exceptional and truly helped me overcome my challenges.",
      author: "John Doe",
    },
    {
      text: "A fantastic experience with noticeable improvements in my well-being.",
      author: "Jane Smith",
    },
    {
      text: "Incredible support and expertise. Highly recommend to anyone in need.",
      author: "Emily Johnson",
    },
  ];

  return (
      <section id="testimonials" className="testimonials">
        <h1>Testimonials</h1>
        <div className="testimonial-wrapper">
          {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-item">
                <p>"{testimonial.text}"</p>
                <span>- {testimonial.author}</span>
              </div>
          ))}
        </div>
      </section>
  );
}
