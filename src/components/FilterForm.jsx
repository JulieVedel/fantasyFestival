import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import FilterSelect from './FilterSelect';

function FilterForm({
  filters, setFilters, search, setSearch,
}) {
  const [listProgram, setListProgram] = useState({
    category: ['Alle kategorier'],
    location: ['Alle lokationer'],
    date: ['Alle dage'],
    times: ['Alle tidspunkter'],
    registration: ['Alle aktiviteter'],
  });

  useEffect(() => {
    fetch('http://localhost:8000/filter')
      .then((res) => res.json())
      .then((data) => {
        setListProgram(data.list);
      });
  }, []);

  const setCategory = (categoryFilter) => {
    setFilters((prevState) => ({
      ...prevState,
      category: categoryFilter,
    }));
  };

  const setLocation = (locationFilter) => {
    setFilters((prevState) => ({
      ...prevState,
      program_location: locationFilter,
    }));
  };

  const setDate = (dateFilter) => {
    setFilters((prevState) => ({
      ...prevState,
      program_date: dateFilter,
    }));
  };

  const setTime = (timeFilter) => {
    setFilters((prevState) => ({
      ...prevState,
      times: timeFilter,
    }));
  };

  const setRegister = (registerFilter) => {
    setFilters((prevState) => ({
      ...prevState,
      registration: registerFilter,
    }));
  };

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="filters">
      <FilterSelect
        label="Kategori"
        value={filters.category}
        setValue={setCategory}
        list={listProgram.category}
      />
      <FilterSelect
        label="Lokation"
        value={filters.program_location}
        setValue={setLocation}
        list={listProgram.location}
      />
      <FilterSelect
        label="Dato"
        value={filters.program_date}
        setValue={setDate}
        list={listProgram.date}
      />
      <FilterSelect
        label="Tidspunkt"
        value={filters.times}
        setValue={setTime}
        list={listProgram.times}
      />
      <FilterSelect
        label="Tilmelding"
        value={filters.registration}
        setValue={setRegister}
        list={listProgram.registration}
      />
      <br />
      <br />
      <TextField
        label="Søg"
        variant="outlined"
        onChange={handleInputChange}
        debounceTimeout={1000}
      />
    </div>
  );
}

export default FilterForm;
