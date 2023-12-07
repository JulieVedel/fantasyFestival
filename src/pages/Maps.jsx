import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Mapper from '../components/Mapper';

function Maps() {
  const [market, setMarket] = useState('');

  return (
    <div className="adminContent">
      <Typography variant="h4" gutterBottom>
        Kort over Markedspladsen
      </Typography>
      <Typography variant="body1" gutterBottom>
        For at gøre det nemt at finde rundt, har vi lavet et kort over standenes placering på Markedspladsen, som bliver uddelt fra billetsalget til Fantasyfestivalen.
        <br />
        Se det her:
      </Typography>
      <div style={{ position: 'relative', margin: 'auto' }}>
        <Mapper setMarket={setMarket} />
        <div id="informationBox">
          <Typography variant="h6" gutterBottom>
            {market}
          </Typography>
          <Typography variant="body2" gutterBottom>
            Beskrivelse om denne bod, hvor den findes og hvad den sælger.
            <br />
            Klik på ikon for at finde vej.
          </Typography>

        </div>
      </div>
    </div>
  );
}

export default Maps;
