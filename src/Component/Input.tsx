import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function Input() {
  const [name, setName] = React.useState('');
  const onChange = (event) => {
    setName(event.target.value);
    console.log(name)
  }

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '22ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        value={name}
        color="warning"
        label="Enter your name"
        onChange={onChange}
        variant="outlined"
      />
    </Box>
  );
}