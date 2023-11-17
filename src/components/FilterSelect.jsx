import Select from '@mui/material/Select';
import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

function FilterSelect({
  label, value, setValue, list,
}) {
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-simple-select-standard-label">{label}</InputLabel>
      <Select
        MenuProps={{ disableScrollLock: true }}
        labelId="demo-simple-select-standard-label"
        value={value}
        onChange={handleChange}
        label={label}
      >
        {list.map((listValue) => (
          <MenuItem
            key={listValue}
            value={listValue}
          >
            {listValue.toString()}
          </MenuItem>
        ))}
      </Select>
    </FormControl>

  );
}

export default FilterSelect;
