import * as React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Box from '@mui/material/Box';
import './index.css'

export default function Text() {
  const [text, setText] = React.useState('');
  const styles={
    width: '90%'
  }
  const onChange = (event) => {
    setText(event.target.value);
    console.log(text)
  };
  return (
    <Box>
      <TextareaAutosize 
        aria-label="minimum height"
        minRows={5}
        placeholder="Enter text here"
        value={text}
        style={styles}
        onChange={onChange}
      />
    </Box>
  );
}