import React from 'react';
    import './Contact.css';

    function Contact() {
      return (
        <div className="contact-container">
          <div className="contact-content">
            <h2>Contact Me</h2>
            <p>Feel free to reach out to me.</p>
            <form>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea placeholder="Your Message"></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      );
    }

    export default Contact;
