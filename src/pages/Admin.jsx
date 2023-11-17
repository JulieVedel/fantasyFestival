import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import BasicTabs from '../components/AdminLoggedIn';
import '../styling/admin.css';

function Admin() {
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [page, setPage] = useState('loginPage');
  const [errorText, setErrorText] = useState(<br />);

  const handleClick = () => {
    setLoading(true);
    if (userName === '' || password === '') {
      setErrorText('Brugernavn og password er ikke udfyldt korrekt');
      setLoading(false);
      return;
    }
    fetch('http://localhost:8000/admin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userName,
        password,
      }),
    }).then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data.status === true) {
          setPage('pageLoggedIn');
        } else {
          setErrorText(data.error);
        }
      });
  };

  if (page === 'loginPage') {
    return (
      <div className="loginInput">
        <h1>Login som admin</h1>
        <br />
        <br />
        <div>
          <TextField
            disabled={loading}
            label="Brugernavn"
            variant="filled"
            value={userName}
            onInput={(e) => setUserName(e.target.value)}
            required
          />
          <br />
          <br />
          <TextField
            disabled={loading}
            label="Password"
            type="password"
            variant="filled"
            value={password}
            onInput={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <br />
          <Button
            type="submit"
            onClick={handleClick}
            disabled={loading}
            variant="outlined"
          >
            <span>Login</span>
          </Button>
          <p id="errorText">{errorText}</p>
        </div>
      </div>
    );
  }

  if (page === 'pageLoggedIn') {
    return (
      <div>
        <BasicTabs />
      </div>
    );
  }
}

export default Admin;
