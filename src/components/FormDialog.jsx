import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import NewActivityForm from './NewActivityForm';

export default function FormDialog({
  open, setOpen, id, setId, setRows, setKey,
}) {
  const [activity, setActivity] = useState({});

  useEffect(() => {
    fetch('http://localhost:8000/getActivity', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then((data) => {
        const rows = data.activity;
        setActivity(rows);
      });
  }, [id]);

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      setId(0);
    }, 100);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Rediger aktivitet</DialogTitle>
      <DialogContent>
        {activity === undefined ? (
          <div>
            loading...
          </div>
        )
          : (
            <NewActivityForm
              activity={activity}
              setOpen={setOpen}
              setRows={setRows}
              setKey={setKey}
            />
          )}
      </DialogContent>
      {/*       <DialogActions>
        <Button onClick={handleClose}>Fortryd</Button>
        <Button onClick={handleClose}>Gem ændringer</Button>
      </DialogActions> */}
    </Dialog>
  );
}
