import React from 'react';
import '../styles/Contact.css';

export default function Contact() {
  const socialLinks = [
    { platform: 'Facebook', url: 'https://facebook.com/yourpage', icon: 'assets/icons/facebook.png' },
    { platform: 'Telegram', url: 'https://instagram.com/yourprofile', icon: 'assets/icons/telegram.png' },
    { platform: 'Twitter', url: 'https://twitter.com/yourhandle', icon: 'assets/icons/twitter.png' },
    { platform: 'Tik-Tok', url: 'https://linkedin.com/in/yourprofile', icon: 'assets/icons/tik-tok.png' },
  ];

  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <div className="social-links">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Follow us on ${link.platform}`}
          >
            <img src={link.icon} alt={`${link.platform} Icon`} />
          </a>
        ))}
      </div>
    </section>
  );
}
