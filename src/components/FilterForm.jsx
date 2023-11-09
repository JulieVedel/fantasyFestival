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
      { value: 'Alle kategorier', label: 'Alle lokationer' },
      { value: 'Dragehulen', label: 'Dragehulen' },
      { value: 'Mørkekammeret', label: 'Mørkekammeret' },
    ],
    dato: [
      { value: 'Alle kategorier', label: 'Alle dage' },
      { value: 'tirs. 7. nov. 2023', label: 'tirs. 7. nov. 2023' },
      { value: 'ons. 8. nov. 2023', label: 'ons. 8. nov. 2023' },
    ],
    tidspunkt: [
      { value: 'Alle kategorier', label: 'Alle tidspunkter' },
      { value: 'Formiddag', label: 'Formiddag' },
      { value: 'Eftermiddag', label: 'Eftermiddag' },
    ],
    tilmelding: [
      { value: 'Alle kategorier', label: 'Alle' },
      { value: true, label: 'Kræver tilmelding' },
      { value: false, label: 'Kræver ikke tilmelding' },
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

  const setDate = (date) => {
    setFilters((prevState) => ({
      ...prevState,
      Dato: date,
    }));
  };

  const setTime = (time) => {
    setFilters((prevState) => ({
      ...prevState,
      Tidspunkt: time,
    }));
  };

  const setRegister = (register) => {
    setFilters((prevState) => ({
      ...prevState,
      Tilmelding: register,
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
      <FilterSelect
        label="Dato"
        value={filters.Dato}
        setValue={setDate}
        list={list.dato}
      />
      <FilterSelect
        label="Tidspunkt"
        value={filters.Tidspunkt}
        setValue={setTime}
        list={list.tidspunkt}
      />
      <FilterSelect
        label="Tilmelding"
        value={filters.Tilmelding}
        setValue={setRegister}
        list={list.tilmelding}
      />
    </div>
  );
}

export default FilterForm;
