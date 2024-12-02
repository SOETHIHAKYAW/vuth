import React from 'react';
import '../styles/Contact.css';

export default function Contact() {
  const socialLinks = [
    { platform: 'WhatsApp', url: 'https://facebook.com/yourpage', icon: 'assets/icons/whatsapp.png' },
    { platform: 'LINE', url: 'https://instagram.com/yourprofile', icon: 'assets/icons/line.png' },
    { platform: 'Facebook', url: 'https://twitter.com/yourhandle', icon: 'assets/icons/facebook.png' },
    { platform: 'Instagram', url: 'https://linkedin.com/in/yourprofile', icon: 'assets/icons/instagram.png' },
    { 
      platform: 'Google Maps Location', 
      url: 'https://www.google.com/maps/place/Ko+Pha+Ngan', 
      icon: 'assets/icons/location.png' 
    },
  ];

  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <div className="social-links">
        {socialLinks.map((link, index) => (
          <div key={index} className="social-item">
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${link.platform}`}
            >
              <img src={link.icon} alt={`${link.platform} Icon`} />
            </a>
          </div>
        ))}
      </div>
      {/* Physical Address displayed below all icons */}
      <p className="address-text">123 Main Street, Ko Pha Ngan, Thailand</p>
    </section>
  );
}
