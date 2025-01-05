import React from 'react';
    import './Landscapes.css';

    const placeholderImage = "https://images.unsplash.com/photo-1505236858219-8359eb29e329";

    function Landscapes() {
      return (
        <div className="landscapes-container">
          <h2>Landscapes</h2>
          <p>Explore my landscape photography.</p>
          <div className="image-grid">
            {[...Array(12)].map((_, index) => (
              <img key={index} src={placeholderImage} alt={`Landscape ${index + 1}`} />
            ))}
          </div>
        </div>
      );
    }

    export default Landscapes;
