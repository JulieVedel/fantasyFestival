import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import AdminProgramTable from './AdminProgramTable';
import NewActivityForm from './NewActivityForm';

function TabProgram() {
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [prevFileName, setPrevFileName] = useState('');
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState('');
  const [rows, setRows] = useState([]);
  const [key, setKey] = useState([0]);

  useEffect(() => {
    fetch('http://localhost:8000/program')
      .then((res) => res.json())
      .then((data) => {
        const newRows = data.list;
        setRows(newRows);
      });
  }, []);

  const downloadPdf = () => {
    fetch('http://localhost:8000/openProgram')
      .then((response) => {
        response.blob()
          .then((blob) => {
            const fileURL = window.URL.createObjectURL(blob);
            const alink = document.createElement('a');
            alink.href = fileURL;
            alink.target = '_blank';
            alink.click();
          });
      });
  };

  const uploadFile = async () => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', fileName);
    try {
      const res = await axios.post(
        'http://localhost:8000/uploadProgram',
        formData,
      );
      setPrevFileName(res.data.fileName);
    } catch (ex) {
      console.log(ex);
    }
  };

  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenDelete(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [openDelete]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [open]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenError(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [openError]);

  return (
    <div>
      <div className="adminItem">
        <Typography variant="h6" gutterBottom>{`Programmet: ${prevFileName}`}</Typography>
        <Stack direction="column" spacing={2}>
          <Button component="label" variant="contained">
            Upload nyt program
            <input
              type="file"
              accept=".pdf"
              hidden
              onChange={saveFile}
            />
          </Button>
          <Button onClick={uploadFile}>upload</Button>
          <Button component="label" variant="contained" onClick={downloadPdf}>
            Åben programmet
          </Button>
        </Stack>
      </div>

      <div className="adminItem newActivityForm" id="test">
        <Typography variant="h6" gutterBottom>Tilføj ny aktivitet til programmet</Typography>
        <NewActivityForm
          setRows={setRows}
          setOpenError={setOpenError}
          setOpen={setOpen}
          setKey={setKey}
        />
        <Collapse in={open}>
          <Alert
            variant="filled"
            severity="success"
            action={(
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
          )}
            sx={{ mb: 2 }}
          >
            Den nye aktivitet blev oprettet!
          </Alert>
        </Collapse>
        <Collapse in={openError}>
          <Alert
            variant="filled"
            severity="error"
            action={(
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpenError(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
          )}
            sx={{ mb: 2 }}
          >
            Der findes allerede en aktivitet med denne titel på dette tidspunkt.
            Vælg en anden titel eller rediger den i listen nedenfor.
          </Alert>
        </Collapse>
      </div>

      <div className="adminItem">
        <div style={{ width: '100%' }}>

          {rows.length > 0 ? <AdminProgramTable key={key} setKey={setKey} rows={rows} setOpenAlert={setOpenDelete} setRows={setRows} /> : 'loading'}

          <Collapse
            in={openDelete}
          >
            <Alert
              variant="filled"
              severity="success"
              action={(
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpenDelete(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
          )}
              sx={{ mb: 2 }}
            >
              Aktiviteten blev slettet!
            </Alert>
          </Collapse>
        </div>

      </div>
    </div>
  );
}

export default TabProgram;
