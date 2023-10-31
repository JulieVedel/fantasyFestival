import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from 'react';
import logo from '../Fantasyfestival_logo.jpg';

function Footer() {
  return (
    <div>
      <table className="table">
        <tr>
          <th className="tableRow">
            <img src={logo} alt="FantasyFestival logo" className="logo" width="80px" />
            <br />
            <Button size="small">
              <PhoneEnabledIcon color="primary" className="icon" />
              76 16 20 00
            </Button>
            <br />
            <Button size="small">
              <MailOutlineIcon color="primary" className="icon" />
              fantasyfestival@esbjerg.dk
            </Button>
            <br />
          </th>
          <th className="tableRow">
            <Typography variant="h5" gutterBottom>Fantasyfestival</Typography>
            <Button size="small">Åbningstider</Button>
            <br />
            <Button size="small">Se program</Button>
            <br />
          </th>
          <th className="tableRow">
            <Typography variant="h5" gutterBottom>Praktisk info</Typography>
            <Button size="small">Overnatning</Button>
            <br />
            <Button size="small">Mad og drikke</Button>
            <br />
            <Button size="small">Transport</Button>
            <br />
          </th>
          <th className="tableRow">
            <Typography variant="h5" gutterBottom>Genveje</Typography>
            <Button size="small">EAN- og CVR-numre</Button>
            <br />
            <Button size="small">Tilgængelighedserklæring</Button>
            <br />
          </th>
        </tr>
      </table>
    </div>
  );
}

export default Footer;
