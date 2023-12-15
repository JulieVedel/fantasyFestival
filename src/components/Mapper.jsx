import React from 'react';
import ImageMapper from 'react-img-mapper';
import areaData from '../areas.json';

function Mapper({ setMarket, width }) {
  const handleMouseOver = (e) => {
    setMarket(e.title);
  };

  const handleMouseClick = (e) => {
    /*     console.log(e.title);
    console.log(selected);
    if (selected === e.title) {
      console.log('deselected');
    } else {
      setSelected(e.title);
    } */
    window.open(e.url, '_blank');
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
