import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
// import { makeStyles } from '@mui/styles';

const DropDown = (props)  => {
  const [value, setValue] = React.useState('');
  const data = props.data

  const handleChange = (event) => {
    props.onChange(event.target.value)
    setValue(event.target.value);
  };

  return (
    <div>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id={props.label + 'dropdown-label'} >{props.label}</InputLabel>
        <Select
          labelId={props.label + 'dropdown-label'}
          id={props.label + 'dropdown'}
          value={value}
          onChange={handleChange}
        >
            {Object.keys(data).map((val,ind)=>
               <MenuItem value={data[val]}>{val}</MenuItem>
            )}
        </Select>
      </FormControl>
    </div>
  );
}

export default DropDown;