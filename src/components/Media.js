import React from 'react';
import '../styles/Media.css';

export default function Media() {
  return (
    <section id="media" className="media">
      <h2>Media Gallery</h2>
      <div className="media-gallery">
        <img src="/images/massage1.jpg" alt="Massage Therapy" />
        <img src="/images/massage2.jpg" alt="Therapy Session" />
        <video controls>
          <source src="/videos/massage-demo.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
