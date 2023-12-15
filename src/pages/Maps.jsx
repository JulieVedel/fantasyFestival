import React, {
  useState, useRef, useLayoutEffect, useEffect,
} from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Mapper from '../components/Mapper';

function Maps() {
  const ref = useRef(null);

  const [width, setWidth] = useState(0);
  const [market, setMarket] = useState('Hold musen over et ikon for at læse mere');

  useLayoutEffect(() => {
    setWidth(ref.current.offsetWidth);
  }, []);

  useEffect(() => {
    function handleWindowResize() {
      setWidth(ref.current.clientWidth);
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const handleMouseOver = () => {
    document.getElementById('img-mapper').className = 'darkened';
    document.getElementById('informationBox').style.display = 'block';
  };

  const handleMouseOut = () => {
    document.getElementById('img-mapper').className = '';
    document.getElementById('informationBox').style.display = 'none';
  };

  return (
    <div className="item">
      <div style={{ margin: 15, width: '100%' }}>
        <Typography variant="h4" gutterBottom>
          Kort over Markedspladsen
        </Typography>
        <Typography variant="h6" gutterBottom>
          For at gøre det nemt at finde rundt,
          har vi lavet et kort over standenes placering på Markedspladsen,
          som bliver uddelt fra billetsalget til Fantasyfestivalen.
          <br />
          Se det her:
        </Typography>

        <Divider variant="middle" />
        <div
          ref={ref}
          style={{
            position: 'relative', margin: 'auto', width: '80%', paddingBottom: '20px', marginTop: 50
          }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <Mapper setMarket={setMarket} width={width} />
          <div id="informationBox">
            <Typography variant="h6" gutterBottom color="white">
              {market}
            </Typography>
            <Typography variant="body2" gutterBottom color="white">
              Beskrivelse om denne bod, hvor den findes og hvad den sælger.
            </Typography>
            <Typography variant="body2" gutterBottom color="white" sx={{ textDecoration: 'underline' }}>
              Klik på ikon for at finde vej.
            </Typography>

          </div>
        </div>
      </div>

    </div>
  );
}

export default Maps;
