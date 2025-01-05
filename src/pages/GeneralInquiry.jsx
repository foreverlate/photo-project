import React from 'react';
    import './GeneralInquiry.css';

    function GeneralInquiry() {
      return (
        <div className="general-inquiry-container">
          <h2>General Inquiry</h2>
          <p>Please fill out the form below for general inquiries.</p>
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      );
    }

    export default GeneralInquiry;
