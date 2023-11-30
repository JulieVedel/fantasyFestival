import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function DeleteActitivyDialog({
  open, setOpen, id, setOpenAlert, setRows,
}) {
  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    fetch('http://localhost:8000/deleteActivity', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    setRows((prevState) => prevState.filter((activity) => activity.program_id !== id));
    setOpen(false);
    setOpenAlert(true);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Vil du slette denne aktivitet?
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Hvis du sletter denne aktivitet er det ikke muligt at gendanne den igen.
          Du vil derfor blive nødt til at lave aktiviteten på ny.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Afbryd</Button>
        <Button onClick={handleDelete} autoFocus>
          Slet aktivitet
        </Button>
      </DialogActions>
    </Dialog>
  );
}
