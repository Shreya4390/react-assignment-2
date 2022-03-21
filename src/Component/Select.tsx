import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './index.css';

export default function BasicSelect() {
  const [category, setCategory] = React.useState('');

  const onChange = (event) => {
    setCategory(event.target.value);
    console.log(category)
  };

  return (
    <Box className='select-container'>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label"  color="warning">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Category"
          onChange={onChange}
          color="warning"
        >
          <MenuItem value={'general'} >General</MenuItem>
          <MenuItem value={'obc'}>OBC</MenuItem>
          <MenuItem value={'st'}>ST</MenuItem>
          <MenuItem value={'sc'}>SC</MenuItem>
          <MenuItem value={'other'}>Other</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}