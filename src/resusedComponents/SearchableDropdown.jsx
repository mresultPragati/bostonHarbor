import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const SearchableDropdown = ({ label, width, options }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (event, newValue) => {
    setSelectedOption(newValue);
    // add logic
  };

  return (
    <Autocomplete
      disablePortal
      id="searchable-dropdown"
      options={options}
      getOptionLabel={(option) => option.label} // Set the label to show in the dropdown
      onChange={handleChange}
      sx={{ width: width ? width : 300 }}
      renderInput={(params) => (
        <TextField {...params} label={label} variant="outlined" />
      )}
    />
  );
};

export default SearchableDropdown;
