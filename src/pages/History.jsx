import React from 'react';
    import './History.css';

    function History() {
      return (
        <div className="history-container">
          <h2>Our History</h2>
          <div className="history-content">
            <p>
              Our photography journey began in 2010 with a simple idea: to capture the world's beauty through a lens.
              What started as a hobby quickly grew into a passion, and soon, we were sharing our work with the world.
            </p>
            <p>
              Over the years, we've had the privilege of working with amazing clients and capturing unforgettable moments.
              From weddings to corporate events, we've always strived to deliver the highest quality photography.
            </p>
            <p>
              Today, we continue to push the boundaries of our craft, exploring new techniques and styles to bring our
              clients' visions to life. We're excited to see what the future holds and to continue sharing our passion
              for photography with you.
            </p>
            <img src="https://placekitten.com/600/400" alt="History Image" />
          </div>
        </div>
      );
    }

    export default History;
