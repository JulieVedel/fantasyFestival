import React, { useState } from 'react';
import programData from '../program.json';
import ProgramItem from '../components/ProgramItem';
import FilterForm from '../components/FilterForm';

function Program() {
  const [list, setList] = useState(programData);
  const [filters, setFilters] = useState(
    {
      Kategori: 'Alle kategorier',
      Lokation: 'Alle kategorier',
    },
  );

  let filteredList = list;
  Object.keys(filters).forEach((filter) => {
    if (filters[filter] !== 'Alle kategorier') {
      filteredList = filteredList.filter((obj) => obj[`${(filter.toLowerCase())}`] === filters[filter]);
    }
  });

  return (
    <div>
      <div className="formField">
        <FilterForm filters={filters} setFilters={setFilters} />
      </div>
      {filteredList.map((obj) => (
        <ProgramItem item={obj} />
      ))}
    </div>
  );
}

export default Program;
