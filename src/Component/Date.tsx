import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import './index.css';

export default function Date() {
  const [date, setDate] = React.useState('');

  const onChange = (event) => {
    setDate(event.target.value);
    console.log(date)
  }
  return (
    <Box className="date-container">
      <Stack component="form" noValidate spacing={3}>
        <TextField
          id="date"
          label="Birthday"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          color="warning"
          value={date}
          onChange={onChange}
        />
      </Stack>
    </Box>
  );
}