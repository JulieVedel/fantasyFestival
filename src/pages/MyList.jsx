import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

function MyList() {
  const [myList, setMyList] = useState([]);
  const [dates, setDates] = useState([]);
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (localStorage.getItem('myList') !== null) {
      const list = JSON.parse(localStorage.getItem('myList'));

      list.sort((a, b) => {
        const timeA = a.time_start.toUpperCase();
        const timeB = b.time_start.toUpperCase();
        if (timeA.length < timeB.length) {
          return -1;
        }
        if (timeA.length > timeB.length) {
          return 1;
        }
        if (timeA < timeB) {
          return -1;
        }
        if (timeA > timeB) {
          return 1;
        }
        return 0;
      });

      list.sort((a, b) => {
        const dateA = a.program_date.toUpperCase();
        const dateB = b.program_date.toUpperCase();

        if (dateA < dateB) {
          return -1;
        }
        if (dateA > dateB) {
          return 1;
        }
        return 0;
      });

      const datelist = [];
      list.forEach((activity) => {
        if (!datelist.includes(activity.program_date)) {
          datelist.push(activity.program_date);
        }
      });
      setDates(datelist);

      setMyList(list);
    }
  }, []);

  const clearMyList = () => {
    localStorage.clear();
    setMyList([]);
    setDates([]);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    console.log('send', email);
    setEmail('');
  };

  return (
    <div className="adminItem">
      <div style={{ minWidth: '100%' }}>
        <Typography variant="h3" component="h2">Min liste</Typography>
        {dates.length > 0 ? (
          <div>
            <p>Du kan sende din gemte liste på e-mail, så du kan finde den igen.</p>
            <form onSubmit={sendEmail}>
              <TextField
                label="E-mail"
                type="email"
                variant="outlined"
                value={email}
                onInput={(e) => setEmail(e.target.value)}
              />
              <Button type="submit">Send til e-mail</Button>
            </form>
            {dates.map((date) => (
              <div key={date}>
                <br />
                <Typography variant="h5" component="h2">{date}</Typography>
                <TableContainer component={Paper}>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ fontWeight: 'bold' }}>Tidspunkt</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }}>Titel</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }}>Lokation</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }}>Beskrivelse</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {myList.map((row) => (
                        row.program_date === date ? (
                          <TableRow
                            key={row.program_id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            <TableCell component="th" scope="row">
                              {`${row.time_start} - ${row.time_end}`}
                            </TableCell>
                            <TableCell>{row.title}</TableCell>
                            <TableCell>{row.program_location}</TableCell>
                            <TableCell>{row.short_description}</TableCell>
                          </TableRow>
                        ) : null
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            ))}
            <div className="buttons">
              <br />
              <Button onClick={clearMyList}>Slet min liste</Button>
            </div>
          </div>
        ) : (
          <div>
            <h4>Du har ikke nogen aktiviteter på din liste.</h4>
            <div className="buttons">
              <Button onClick={() => { window.location.href = '/program'; }}>Gå til program</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyList;
