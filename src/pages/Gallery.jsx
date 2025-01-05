import React from 'react';
    import './Gallery.css';

    function Gallery() {
      return (
        <div className="gallery-container">
          <h2>Gallery</h2>
          <p>Check out my latest photos.</p>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="https://placekitten.com/300/200" alt="Kitten 1" />
            </div>
            <div className="gallery-item">
              <img src="https://placekitten.com/301/201" alt="Kitten 2" />
            </div>
            <div className="gallery-item">
              <img src="https://placekitten.com/302/202" alt="Kitten 3" />
            </div>
            <div className="gallery-item">
              <img src="https://placekitten.com/303/203" alt="Kitten 4" />
            </div>
            <div className="gallery-item">
              <img src="https://placekitten.com/304/204" alt="Kitten 5" />
            </div>
            <div className="gallery-item">
              <img src="https://placekitten.com/305/205" alt="Kitten 6" />
            </div>
          </div>
        </div>
      );
    }

    export default Gallery;
