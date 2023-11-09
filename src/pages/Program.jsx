import React, { useState } from 'react';
import Button from '@mui/material/Button';
import programData from '../program.json';
import ProgramItem from '../components/ProgramItem';
import FilterForm from '../components/FilterForm';

function Program() {
  const [list, setList] = useState(programData);
  const [filters, setFilters] = useState(
    {
      Kategori: 'Alle kategorier',
      Lokation: 'Alle kategorier',
      Dato: 'Alle kategorier',
      Tidspunkt: 'Alle kategorier',
      Tilmelding: 'Alle kategorier',
    },
  );

  let filteredList = list;
  Object.keys(filters).forEach((filter) => {
    if (filters[filter] !== ('Alle kategorier')) {
      if (filter === 'Tidspunkt') {
        console.log(filters[filter]);
        filteredList = filteredList.filter((obj) => obj[`${(filter.toLowerCase())}`].includes(filters[filter]));
      } else {
        filteredList = filteredList.filter((obj) => obj[`${(filter.toLowerCase())}`] === filters[filter]);
      }
    }
  });

  function resetFilters() {
    setFilters({
      Kategori: 'Alle kategorier',
      Lokation: 'Alle kategorier',
      Dato: 'Alle kategorier',
      Tidspunkt: 'Alle kategorier',
      Tilmelding: 'Alle kategorier',
    });
  }

  return (
    <div>
      <div className="formField">
        <FilterForm filters={filters} setFilters={setFilters} />
        <Button variant="outlined" onClick={resetFilters}>Reset</Button>
      </div>
      {filteredList.map((obj) => (
        <ProgramItem item={obj} />
      ))}
    </div>
  );
}

export default Program;
