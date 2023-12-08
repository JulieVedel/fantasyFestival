import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ProgramItem from '../components/ProgramItem';
import FilterForm from '../components/FilterForm';

const defaultValues = ['Alle kategorier', 'Alle lokationer', 'Alle dage', 'Alle tidspunkter', 'Alle aktiviteter'];

function Program() {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState(
    {
      category: defaultValues[0],
      program_location: defaultValues[1],
      program_date: defaultValues[2],
      //times: defaultValues[3],
      registration: defaultValues[4],
    },
  );

  useEffect(() => {
    fetch('http://localhost:8000/program')
      .then((res) => res.json())
      .then((data) => {
        setList(data.list);
      });
  }, []);

  let filteredList = list;
  Object.keys(filters).forEach((filter) => {
    if (defaultValues.includes(filters[filter])) return;
    filteredList = filteredList.filter((obj) => obj[`${(filter.toLowerCase())}`] === filters[filter]);

/*     if (filter === 'times') {
      filteredList = filteredList.filter((obj) => obj[`${(filter.toLowerCase())}`].includes(filters[filter]));
    } else {
      filteredList = filteredList.filter((obj) => obj[`${(filter.toLowerCase())}`] === filters[filter]);
    } */
  });

  if (list.length === 0) {
    return (
      <div>loading...</div>
    );
  }

  if (filteredList.length > 0) {
    filteredList = filteredList.filter((obj) => {
      if (obj.speaker !== null) {
        return obj.title.toLowerCase().includes(search.toLowerCase())
         || obj.speaker.toLowerCase().includes(search.toLowerCase());
      }
      return obj.title.toLowerCase().includes(search.toLowerCase());
    });
  }

  const resetFilters = () => {
    setFilters({
      category: 'Alle kategorier',
      program_location: 'Alle lokationer',
      program_date: 'Alle dage',
      //times: 'Alle tidspunkter',
      registration: 'Alle aktiviteter',
    });
    setSearch('');
  };

  const downloadProgram = () => {
    fetch('http://localhost:8000/downloadProgram')
      .then((res) => {
        res.blob()
          .then((blob) => {
            const filename = res.headers.get('Content-Disposition').split('filename=')[1].replace(/"/g, '');
            const fileURL = window.URL.createObjectURL(blob);
            const alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = filename;
            alink.click();
          });
      });
  };

  return (
    <div>
      <div className="formField adminContent">
        <FilterForm
          filters={filters}
          setFilters={setFilters}
          search={search}
          setSearch={setSearch}
        />
        <div className="buttons">
          <Button variant="contained" onClick={resetFilters}>Ryd filtere</Button>
          <Button variant="contained" onClick={downloadProgram}>Download program</Button>
        </div>
        <hr />
        {filteredList.length === 0 && (
        <div className="centered">
          <Typography variant="body2">Ingen resultater med disse filtre</Typography>
        </div>
        )}

        {filteredList.map((obj) => (
          <ProgramItem key={obj.program_id} item={obj} />
        ))}
      </div>

    </div>
  );
}

export default Program;
