import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';

const INITIAL_FORM_DATA = {
  title: '',
  date: '2024-09-14',
  startTime: '10:00',
  endTime: '11:00',
  registration: false,
  location: '',
  newLocation: '',
  category: '',
  newCategory: '',
  shortDesc: '',
  desc: '',
  speaker: '',
  image: '',
};

function TabProgram() {
  const [prevFileName, setPrevFileName] = useState('');
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState('');
  const [form, setForm] = useState(INITIAL_FORM_DATA);
  const [locationSelect, setLocationSelect] = useState([
    '- Tilføj ny lokation -',
  ]);
  const [categorySelect, setCategorySelect] = useState([
    '- Tilføj ny kategori -',
  ]);

  function getLocationAndCategory() {
    fetch('http://localhost:8000/getLocationAndCategory')
      .then((res) => res.json())
      .then((data) => {
        setCategorySelect(data.list.category);
        setLocationSelect(data.list.location);
      });
  }

  useEffect(() => {
    getLocationAndCategory();
    fetch('http://localhost:8000/programPDF')
      .then((res) => res.json())
      .then((data) => {
        setPrevFileName(data.fileName);
      });
  }, []);

  function getTimes(start, end) {
    const res = [];
    if (start.localeCompare('12:00') === -1) {
      res.push('Formiddag');
    }

    if (end.localeCompare('12:00') === 1) {
      res.push('Eftermiddag');
    }
    return res;
  }

  const resetForm = () => {
    setForm(INITIAL_FORM_DATA);
    getLocationAndCategory();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newActivity = {
      title: form.title,
      date: form.date,
      startTime: form.startTime,
      endTime: form.endTime,
      registration: form.registration,
      location: form.location,
      category: form.category,
      shortDesc: form.shortDesc,
      desc: form.desc,
      speaker: form.speaker,
      image: form.image,
    };
    newActivity.location = newActivity.location === '- Tilføj ny lokation -' ? form.newLocation : newActivity.location;
    newActivity.category = newActivity.category === '- Tilføj ny kategori -' ? form.newCategory : newActivity.category;
    newActivity.speaker = newActivity.speaker === '' ? null : newActivity.speaker;
    newActivity.image = newActivity.image === '' ? null : newActivity.image;

    newActivity.times = getTimes(newActivity.startTime, newActivity.endTime);

    fetch('http://localhost:8000/newActivity', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ newActivity }),
    });

    resetForm();
  };

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

  function updateState(key, value) {
    setForm((prevState) => ({ ...prevState, [key]: value }));
  }

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

      <div className="adminItem newActivityForm">
        <Typography variant="h6" gutterBottom>Tilføj ny aktivitet til programmet</Typography>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="formRow">
              <TextField
                inputProps={{ maxLength: 255 }}
                className="formInput"
                label="Titel"
                variant="standard"
                required
                value={form.title}
                onChange={(e) => updateState('title', e.target.value)}
                sx={{ width: '50%', marginRight: '5%' }}
              />
              <FormControlLabel
                control={<Checkbox defaultChecked={form.registration} />}
                onChange={(e) => updateState('registration', e.target.checked)}
                label="Kræver tilmelding?"
              />
            </div>
            <div className="formRow">
              <TextField
                label="Dato"
                variant="standard"
                type="date"
                defaultValue={form.date}
                required
                onChange={(e) => updateState('date', e.target.value)}
                sx={{ marginRight: '5%' }}
              />
              <TextField
                label="Starttid"
                variant="standard"
                type="time"
                defaultValue={form.startTime}
                required
                onChange={(e) => updateState('startTime', e.target.value)}
                sx={{ marginRight: '5%' }}
              />
              <TextField
                label="Sluttid"
                variant="standard"
                type="time"
                defaultValue={form.endTime}
                required
                onChange={(e) => updateState('endTime', e.target.value)}
                sx={{ marginRight: '5%' }}
              />
              <TextField
                inputProps={{ maxLength: 255 }}
                label="Foredragsholder"
                variant="standard"
                value={form.speaker}
                onChange={(e) => updateState('speaker', e.target.value)}
                sx={{ width: '30%', marginRight: '5%' }}
              />
            </div>
            <div className="formRow">
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel required>Lokation</InputLabel>
                <Select
                  required
                  value={form.location}
                  onChange={(e) => updateState('location', e.target.value)}
                  autoWidth
                  label="Lokation"
                  MenuProps={{ disableScrollLock: true, PaperProps: { sx: { maxHeight: 250 } } }}
                >
                  {locationSelect.map((obj) => (
                    <MenuItem key={obj} value={obj}>{obj}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              {form.location === '- Tilføj ny lokation -' && (
              <TextField
                inputProps={{ maxLength: 255 }}
                required
                label="Ny lokation"
                variant="standard"
                value={form.newLocation}
                onChange={(e) => updateState('newLocation', e.target.value)}
              />
              )}
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel required>Kategori</InputLabel>
                <Select
                  required
                  style={{ maxHeight: '100px' }}
                  value={form.category}
                  onChange={(e) => updateState('category', e.target.value)}
                  autoWidth
                  label="Kategori"
                  MenuProps={{ disableScrollLock: true, PaperProps: { sx: { maxHeight: 250 } } }}
                >
                  {categorySelect.map((obj) => (
                    <MenuItem key={obj} value={obj}>{obj}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              {form.category === '- Tilføj ny kategori -' && (
              <TextField
                inputProps={{ maxLength: 255 }}
                required
                label="Ny kategori"
                variant="standard"
                value={form.newCategory}
                onChange={(e) => updateState('newCategory', e.target.value)}
              />
              )}
            </div>
            <div className="formRow">
              <TextField
                inputProps={{ maxLength: 255 }}
                label="Kort beskrivelse"
                multiline
                rows={3}
                variant="standard"
                required
                value={form.shortDesc}
                onChange={(e) => updateState('shortDesc', e.target.value)}
                sx={{ width: '25%', marginRight: '5%' }}
              />
              <TextField
                label="Fuld beskrivelse"
                multiline
                rows={3}
                variant="standard"
                required
                value={form.desc}
                onChange={(e) => updateState('desc', e.target.value)}
                sx={{ width: '50%', marginRight: '5%' }}
              />
            </div>
            <div className="formRow">
              <TextField
                label="Billede-URL"
                variant="standard"
                value={form.image}
                onChange={(e) => updateState('image', e.target.value)}
                sx={{ width: '30%', marginRight: '5%' }}
              />
            </div>
            <div className="formButton">
              <Button variant="contained" endIcon={<SendIcon />} type="submit">
                Opret
              </Button>
              <Button variant="contained" endIcon={<SendIcon />} onClick={resetForm}>
                Ryd felter
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TabProgram;
