import React from 'react';
    import './Values.css';

    function Values() {
      return (
        <div className="values-container">
          <h2>Our Values</h2>
          <div className="values-content">
            <div className="value-item">
              <h3>Quality</h3>
              <p>We are committed to delivering the highest quality photography to our clients.</p>
            </div>
            <div className="value-item">
              <h3>Creativity</h3>
              <p>We strive to push the boundaries of our craft and explore new techniques.</p>
            </div>
            <div className="value-item">
              <h3>Integrity</h3>
              <p>We believe in honesty, transparency, and ethical practices in all our work.</p>
            </div>
            <div className="value-item">
              <h3>Client Satisfaction</h3>
              <p>We are dedicated to ensuring our clients are happy with our services.</p>
            </div>
            <img src="https://placekitten.com/400/600" alt="Values Image" />
          </div>
        </div>
      );
    }

    export default Values;
