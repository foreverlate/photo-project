import React from 'react';
    import './Portraits.css';

    const placeholderImage = "https://images.unsplash.com/photo-1505236858219-8359eb29e329";

    function Portraits() {
      return (
        <div className="portraits-container">
          <h2>Portraits</h2>
          <p>Check out my portrait photography.</p>
          <div className="image-grid">
            {[...Array(12)].map((_, index) => (
              <img key={index} src={placeholderImage} alt={`Portrait ${index + 1}`} />
            ))}
          </div>
        </div>
      );
    }

    export default Portraits;
