import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './index.css';

export default function BasicButtons() {
  return (
    <div className='btn-container'>
      <Stack spacing={2}>
        <Button variant="contained" color="warning">Submit</Button>
      </Stack>
    </div>
  );
}