import React from "react";
import { Autocomplete } from "@mui/material";
import TextField from "@mui/material/TextField";
import { ListItemText } from "@mui/material";

const BostonAutocomplete = ({
  options,
  getOptionLabel,
  onChange,
  label,
  required,
  width,
  renderOption,
  value,
}) => {
  return (
    <Autocomplete
      options={options}
      value={value}
      getOptionLabel={getOptionLabel}
      onChange={onChange}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          label={label}
          name={label}
          required={required}
        />
      )}
      renderOption={renderOption}
      //   sx={{ width: width || 300 }} // Use dynamic width
    />
  );
};

export default BostonAutocomplete;
