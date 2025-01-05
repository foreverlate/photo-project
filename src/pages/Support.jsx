import React from 'react';
    import './Support.css';

    function Support() {
      return (
        <div className="support-container">
          <h2>Support</h2>
          <p>Please fill out the form below for technical support.</p>
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Issue"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      );
    }

    export default Support;
