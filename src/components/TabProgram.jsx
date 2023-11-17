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

const locations = [
  'Dragehulen',
  'Alkymistens Tårnværelse',
  'Mørkekammeret',
  'Tilføj ny lokation',
];

const categories = [
  'Fantasyfilm og TV-serier',
  'Foredrag og debat',
  'Bedst til børn',
  'Tilføj ny kategori',
];

function TabProgram() {
  const [fileName, setFileName] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('2024-09-14');
  const [startTime, setStartTime] = useState('10:00');
  const [endTime, setEndTime] = useState('11:00');
  const [registration, setRegistration] = useState(false);
  const [location, setLocation] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [category, setCategory] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [shortDesc, setShortDesc] = useState('');
  const [desc, setDesc] = useState('');
  const [speaker, setSpeaker] = useState('');

  useEffect(() => {
    fetch('http://localhost:8000/programPDF')
      .then((res) => res.json())
      .then((data) => {
        setFileName(data.fileName);
      });
  }, []);

  function checkLocation() {
    if (location === 'Tilføj ny lokation') {
      return (
        <TextField label="Ny lokation" variant="standard" value={newLocation} onChange={(e) => setNewLocation(e.target.value)} />
      );
    }
    return null;
  }

  function checkCategory() {
    if (category === 'Tilføj ny kategori') {
      return (
        <TextField label="Ny kategori" variant="standard" value={newCategory} onChange={(e) => setNewCategory(e.target.value)} />
      );
    }
    return null;
  }

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

  function resetForm() {
    setFileName('');
    setTitle('');
    setDate('2024-09-14');
    setStartTime('10:00');
    setEndTime('11:00');
    setRegistration(false);
    setLocation('');
    setNewLocation('');
    setCategory('');
    setNewCategory('');
    setShortDesc('');
    setDesc('');
    setSpeaker('');
  }

  const handleSubmit = () => {
    const newActivity = {
      title,
      date,
      startTime,
      endTime,
      registration,
      location,
      category,
      shortDesc,
      desc,
      speaker,
    };
    newActivity.location = newActivity.location === 'Tilføj ny lokation' ? newLocation : newActivity.location;
    newActivity.category = newActivity.category === 'Tilføj ny kategori' ? newCategory : newActivity.category;
    newActivity.speaker = newActivity.speaker === '' ? null : newActivity.speaker;

    newActivity.times = getTimes(newActivity.startTime, newActivity.endTime);

    fetch('http://localhost:8000/newActivity', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ newActivity }),
    });

    resetForm();
  };

  return (
    <div>
      <div>
        <Typography variant="h6" gutterBottom>{`Programmet: ${fileName}`}</Typography>
        <Stack direction="row" spacing={2}>
          <Button component="label" variant="contained">
            Upload nyt program
            <input
              type="file"
              hidden
            />
          </Button>
          <Button component="label" variant="contained">
            Åben programmet
          </Button>
        </Stack>
      </div>

      <div className="newActivityForm">
        <Typography variant="h6" gutterBottom>Tilføj ny aktivitet til programmet</Typography>
        <TextField
          label="Title"
          variant="standard"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <FormControlLabel
          control={<Checkbox defaultChecked={registration} />}
          onChange={(e) => setRegistration(e.target.checked)}
          label="Kræver tilmelding?"
        />
        <br />
        <TextField
          label="Dato"
          variant="standard"
          type="date"
          defaultValue={date}
          required
          onChange={(e) => setDate(e.target.value)}
        />
        <TextField
          label="Starttid"
          variant="standard"
          type="time"
          defaultValue={startTime}
          required
          onChange={(e) => setStartTime(e.target.value)}
        />
        <TextField
          label="Sluttid"
          variant="standard"
          type="time"
          defaultValue={endTime}
          required
          onChange={(e) => setEndTime(e.target.value)}
        />
        <br />
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel required>Lokation</InputLabel>
          <Select
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            autoWidth
            label="Lokation"
          >
            {locations.map((obj) => (
              <MenuItem key={obj} value={obj}>{obj}</MenuItem>
            ))}
          </Select>
        </FormControl>
        {checkLocation()}
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel required>Kategori</InputLabel>
          <Select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            autoWidth
            label="Kategori"
          >
            {categories.map((obj) => (
              <MenuItem key={obj} value={obj}>{obj}</MenuItem>
            ))}
          </Select>
        </FormControl>
        {checkCategory()}
        <br />
        <TextField
          label="Kort beskrivelse"
          multiline
          maxRows={4}
          variant="standard"
          required
          value={shortDesc}
          onChange={(e) => setShortDesc(e.target.value)}
        />
        <TextField
          label="Fuld beskrivelse"
          multiline
          maxRows={4}
          variant="standard"
          required
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <TextField
          label="Foredragsholder"
          variant="standard"
          value={speaker}
          onChange={(e) => setSpeaker(e.target.value)}
        />
        <br />
      </div>
      <Button variant="contained" endIcon={<SendIcon />} onClick={handleSubmit}>
        Opret
      </Button>
    </div>
  );
}

export default TabProgram;
