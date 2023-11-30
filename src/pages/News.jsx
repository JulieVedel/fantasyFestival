import React from 'react';
import Button from '@mui/material/Button';

function News() {
  const handleClick = () => {
    localStorage.setItem('key', JSON.stringify(['Hello', 'World', '!']));
    const storage = localStorage.getItem('key');
    /*     storage.forEach((num) => {
      console.log(num);
    }); */
    console.log(JSON.parse(storage));
  };

  return (
    <div>
      <h1>News</h1>
      <Button onClick={handleClick}>Test</Button>
    </div>
  );
}

export default News;
