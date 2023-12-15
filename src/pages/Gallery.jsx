import React from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import { Typography } from '@mui/material';
import photoes from '../photoes.json';

function Gallery({ year }) {
  const { images } = photoes[year];

  return (
    <div className="adminItem">
      <div style={{ width: '100%' }}>
        <Typography variant="h4" gutterBottom>
          {`Billeder fra Fantasyfestival ${year}`}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {photoes[year].description}
        </Typography>

        {images.map((obj) => (
          <div className="carousel-container">
            <Typography variant="h4" gutterBottom>
              {obj.title}
            </Typography>
            <Carousel
              images={obj.photoes}
              style={{ width: '100%', height: '60vh' }}
              playIcon={null}
              maxIcon={null}
              shouldMaximizeOnClick
              minIcon={(
                <span
                  className="icon-text"
                  role="img"
                  aria-label="min"
                  style={{
                    fontSize: 'min(50px, 5vw)',
                  }}
                >
                  ↙️
                </span>
          )}
              leftIcon={(
                <span
                  className="icon-text"
                  role="img"
                  aria-label="left"
                  style={{
                    fontSize: 'min(50px, 5vw)',
                  }}
                >
                  ◀️
                </span>
          )}
              rightIcon={(
                <span
                  className="icon-text"
                  role="img"
                  aria-label="right"
                  style={{
                    fontSize: 'min(50px, 5vw)',
                  }}
                >
                  ▶️
                </span>
          )}
            />
          </div>
        ))}
      </div>
    </div>

  );
}

export default Gallery;
