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

  function checkSpeaker(speaker) {
    if (speaker !== null) {
      return <Typography variant="h6" className="speaker">{`Foredragsholder: ${item.speaker}`}</Typography>;
    }
    return null;
  }

  function checkRegistration(reg) {
    if (reg === "Kræver tilmelding") {
      return <Typography variant="h6" className="registration" color="darkred">{`${reg}`}</Typography>;
    }
    return null;
  }

  function setLinks() {
    if (item.registration === "Kræver tilmelding") {
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
    <div key={item.program_id} className="item">
      <div className="info">
        <Dialog
          disableScrollLock
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
                <Typography variant="subtitle2" className="info">{`${item.program_location} - ${item.program_date} kl. ${item.time_start}-${item.time_end}`}</Typography>
                <Typography variant="body2">{item.description}</Typography>
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Tilføj</Button>
            <Button onClick={handleClose} autoFocus>Luk</Button>
          </DialogActions>
        </Dialog>
        <Typography variant="h4" className="title">{item.title}</Typography>
        <Typography variant="h5" className="info">{`${item.program_location} - ${item.program_date} kl. ${item.time_start}-${item.time_end}`}</Typography>
        {checkSpeaker(item.speaker)}
        {checkRegistration(item.registration)}
        <Typography variant="body1" className="target">{item.category}</Typography>
        <Typography variant="body1" className="description">{item.short_description}</Typography>
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
