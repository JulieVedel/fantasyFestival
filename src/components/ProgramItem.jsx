import React from 'react';
import '../styling/program.css';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function ProgramItem({ item }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function checkPrice() {
    if (item.pris !== 0) {
      return <Typography variant="h6" className="price">{`${item.pris} kr`}</Typography>;
    }
    return null;
  }

  function setLinks() {
    if (item.tilmelding) {
      return (
        <Button variant="contained" onClick={() => { window.open('https://www.google.com/'); }}>
          Tilmeld/køb
        </Button>
      );
    }
    return null;
  }

  function addToList() {
    console.log('added to my list');
  }

  return (
    <div className="item">
      <div className="info">
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="dialog-read-more"
          aria-describedby="dialog-description"
        >
          <DialogTitle id="dialog-read-more">
            {item.title}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="dialog-description">
              <div>
                <Typography variant="subtitle2" className="info">{`${item.lokation} - ${item.dato} kl. ${item.startTid}-${item.slutTid}`}</Typography>
                <Typography variant="body2">{item.beskrivelse}</Typography>
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Tilføj</Button>
            <Button onClick={handleClose} autoFocus>Luk</Button>
          </DialogActions>
        </Dialog>
        <Typography variant="h4" className="title">{item.title}</Typography>
        <Typography variant="h5" className="info">{`${item.lokation} - ${item.dato} kl. ${item.startTid}-${item.slutTid}`}</Typography>
        {checkPrice()}
        <Typography variant="body1" className="target">{item.kategori}</Typography>
        <Typography variant="body1" className="description">{item.kortBeskrivelse}</Typography>
      </div>
      <div className="buttonfield">
        <Button variant="contained" onClick={handleClickOpen}>
          Læs mere
        </Button>
        <Button variant="contained" onClick={addToList}>
          Min liste
        </Button>
        {setLinks()}
      </div>
    </div>
  );
}

export default ProgramItem;
