import React from 'react';
import '../styling/program.css';
import Typography from '@mui/material/Typography';

function ProgramItem({ item }) {
  function checkPrice() {
    if (item.pris !== 0) {
      return <Typography variant="h6" className="price">{`${item.pris} kr`}</Typography>;
    }
    return null;
  }

  return (
    <div className="item">
      <Typography variant="h4" className="title">{item.title}</Typography>
      <Typography variant="h5" className="info">{`${item.lokation} - ${item.dato} kl. ${item.tid}`}</Typography>
      {checkPrice()}
      <Typography variant="body1" className="target">{item.kategori}</Typography>
      <Typography variant="body1" className="description">{item.kortBeskrivelse}</Typography>
    </div>
  );
}

export default ProgramItem;
