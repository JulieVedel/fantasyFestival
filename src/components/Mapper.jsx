import React from 'react';
import ImageMapper from 'react-img-mapper';

function Mapper({ setMarket }) {
  const handleMouseOver = (e) => {
    document.getElementById('img-mapper').className = 'darkened';
    document.getElementById('informationBox').style.display = 'block';
    setMarket(e.title);
  };

  const handleMouseOut = () => {
    document.getElementById('img-mapper').className = '';
    document.getElementById('informationBox').style.display = 'none';
  };

  const handleMouseClick = () => {
    window.open('https://maps.app.goo.gl/baxvkVsdEA3XY4TB7', '_blank');
  };

  const URL = 'https://fantasyfestival.dk/Files/Images/Fantasyfestival/Markedsplads/kort-markedsplads-23.jpg';
  const MAP = {
    name: 'my-map',
    areas: [
      {
        title: 'Mjólnír-Natur', coords: [147, 217, 21], shape: 'circle',
      },
      {
        title: 'Uglernes verden', coords: [91, 424, 21], shape: 'circle',
      },
    ],
  };

  return (
    <ImageMapper
      src={URL}
      map={MAP}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseOut}
      onClick={handleMouseClick}
      responsive
      parentWidth={700}
      fillColor="rgba(255, 0, 0, 0.5)"
    />
  );
}

export default Mapper;
