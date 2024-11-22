import React from 'react';
import '../styles/Testimonials.css';

export default function Testimonials() {
  return (
    <section id="testimonials" className="media">
      <h2>Testimonials</h2>
      <div className="media-gallery">
        <img src="/assets/images/gallery/gallery1.jpg" alt="Massage Therapy" />
        {/* <img src="/assets/images/gallery/gallery2.jpg" alt="Massage Therapy" /> */}
        <img src="/assets/images/gallery/gallery3.jpg" alt="Massage Therapy" />
        {/* <img src="/assets/images/gallery/gallery4.jpg" alt="Massage Therapy" /> */}
        <img src="/assets/images/gallery/gallery5.jpg" alt="Massage Therapy" />
        {/* <img src="/assets/images/gallery/gallery6.jpg" alt="Massage Therapy" /> */}
        <video controls>
          <source src="/assets/videos/massage-demo.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
