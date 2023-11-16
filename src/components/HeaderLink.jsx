import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function HeaderLink({ title, link }) {
  return (
    <div className="menuButton">
      <Button
        onClick={() => { window.location.href = link; }}
        style={{ textTransform: 'none', bottom: 0 }}
      >
        <Typography variant="h5" color="white">{title}</Typography>
      </Button>
    </div>
  );
}
