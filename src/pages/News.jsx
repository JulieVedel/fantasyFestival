import React from 'react';
import Button from '@mui/material/Button';

function News() {
  const handleClick = () => {
    fetch('http://localhost:8000/downloadProgram')
      .then((res) => {
        /*         console.log(res);
        const contentDisposition = res.headers.get('Content-Disposition');
        const filenameMatch = contentDisposition && contentDisposition.match(/filename="(.+?)"/);

        if (filenameMatch && filenameMatch[1]) {
          const filename = filenameMatch[1];
          console.log(`The suggested filename is: ${filename}`);
        } */
        res.blob()
          .then((blob) => {
            const filename = res.headers.get('Content-Disposition').split('filename=')[1].replace(/"/g, '');
            const fileURL = window.URL.createObjectURL(blob);
            const alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = filename;
            alink.click();
          });
      });
  };

  return (
    <div>
      <h1>News</h1>
      <Button onClick={handleClick}>Test</Button>
    </div>
  );
}

export default News;
