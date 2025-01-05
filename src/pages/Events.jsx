import React from 'react';
    import './Events.css';

    const placeholderImage = "https://images.unsplash.com/photo-1505236858219-8359eb29e329";

    function Events() {
      return (
        <div className="events-container">
          <h2>Events</h2>
          <p>See my event photography.</p>
          <div className="image-grid">
            {[...Array(12)].map((_, index) => (
              <img key={index} src={placeholderImage} alt={`Event ${index + 1}`} />
            ))}
          </div>
        </div>
      );
    }

    export default Events;
