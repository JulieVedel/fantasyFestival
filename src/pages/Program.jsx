import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import programData from '../program.json';
import ProgramItem from '../components/ProgramItem';
import FilterForm from '../components/FilterForm';

function Program() {
  const [list, setList] = useState(programData);
  const [filters, setFilters] = useState(
    {
      category: 'Alle kategorier',
      program_location: 'Alle lokationer',
      program_date: 'Alle dage',
      times: 'Alle tidspunkter',
      registration: 'Alle aktiviteter',
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
    if (filters[filter] !== ('Alle kategorier') && filters[filter] !== ('Alle lokationer') && filters[filter] !== ('Alle dage') && filters[filter] !== ('Alle tidspunkter') && filters[filter] !== ('Alle aktiviteter')) {
      if (filter === 'times') {
        filteredList = filteredList.filter((obj) => obj[`${(filter.toLowerCase())}`].includes(filters[filter]));
      } else {
        filteredList = filteredList.filter((obj) => obj[`${(filter.toLowerCase())}`] === filters[filter]);
      }
    }
  });

  function resetFilters() {
    setFilters({
      category: 'Alle kategorier',
      program_location: 'Alle lokationer',
      program_date: 'Alle dage',
      times: 'Alle tidspunkter',
      registration: 'Alle aktiviteter',
    });
  }

  return (
    <div>
      <div className="formField">
        <FilterForm filters={filters} setFilters={setFilters} />
        <Button variant="outlined" onClick={resetFilters}>Reset</Button>
      </div>
      {filteredList.map((obj) => (
        <ProgramItem key={obj.program_id} item={obj} />
      ))}
    </div>
  );
}

export default Program;
