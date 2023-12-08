import React from 'react';
import ImageMapper from 'react-img-mapper';
import areaData from '../areas.json';

function Mapper({ setMarket, width }) {
  const handleMouseOver = (e) => {
    document.getElementById('img-mapper').className = 'darkened';
    document.getElementById('informationBox').style.display = 'block';
    setMarket(e.title);
  };

  const handleMouseOut = () => {
    document.getElementById('img-mapper').className = '';
    document.getElementById('informationBox').style.display = 'none';
  };

  const handleMouseClick = (e) => {
    /*     console.log(e.title);
    console.log(selected);
    if (selected === e.title) {
      console.log('deselected');
    } else {
      setSelected(e.title);
    } */
    window.open('https://maps.app.goo.gl/baxvkVsdEA3XY4TB7', '_blank');
  };

  // const URL = 'https://fantasyfestival.dk/Files/Images/Fantasyfestival/Markedsplads/kort-markedsplads-23.jpg';
  const URL = '/kort.png';
  const MAP = {
    name: 'my-map',
    areas: areaData,
  };

  return (
    <ImageMapper
      src={URL}
      map={MAP}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseOut}
      onClick={handleMouseClick}
/*       stayHighlighted
      toggleHighlighted */
      responsive
      parentWidth={width}
      fillColor="rgba(255, 0, 0, 0.5)"
    />
  );
}

export default Mapper;
