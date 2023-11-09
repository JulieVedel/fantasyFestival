import * as React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import '../styling/header.css';
import logo from '../logo_no_title.jpg';

export default function Header() {
  return (

    <div className="header">
      <nav>
        <div className="firstRow">
          <Typography variant="h5" color="white"><a href="/nyheder">Nyheder</a></Typography>
          <Typography variant="h5" color="white"><a href="/">Galleri</a></Typography>
          <Typography variant="h5" color="white"><a href="/program">Program</a></Typography>
          <Typography variant="h5" color="white"><a href="/">Billetter</a></Typography>
        </div>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" width={150} height={150} className="roundedLogo" />
          </Link>
        </div>
        <div className="lastRow">
          <Typography variant="h5" color="white"><a href="/">Kunstnerhjørnet</a></Typography>
          <Typography variant="h5" color="white"><a href="/">Om os</a></Typography>
          <Typography variant="h5" color="white"><a href="/">Praktisk info</a></Typography>
          <Typography variant="h5" color="white"><a href="/">Min liste</a></Typography>
        </div>
      </nav>
    </div>
  );
}
