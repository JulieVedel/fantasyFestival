import React from 'react';
import FilterSelect from './FilterSelect';

function FilterForm({ filters, setFilters }) {
  const list = {
    kategori: [
      { value: 'Alle kategorier', label: 'Alle kategorier' },
      { value: 'Fantasyfilm og TV-serier', label: 'Fantasyfilm og TV-serier' },
      { value: 'Bedst til børn', label: 'Bedst til børn' },
    ],
    lokation: [
      { value: 'Alle kategorier', label: 'Alle kategorier' },
      { value: 'Dragehulen', label: 'Dragehulen' },
      { value: 'Mørkekammeret', label: 'Mørkekammeret' },
    ],
  };

  const setCategory = (category) => {
    setFilters((prevState) => ({
      ...prevState,
      Kategori: category,
    }));
  };

  const setLocation = (location) => {
    setFilters((prevState) => ({
      ...prevState,
      Lokation: location,
    }));
  };

  return (
    <div>
      <FilterSelect
        label="Kategori"
        value={filters.Kategori}
        setValue={setCategory}
        list={list.kategori}
      />
      <FilterSelect
        label="Lokation"
        value={filters.Lokation}
        setValue={setLocation}
        list={list.lokation}
      />
    </div>
  );
}

export default FilterForm;
