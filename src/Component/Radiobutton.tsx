import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import './index.css';

export default function Radiobuttons() {
  const [gender, setGender] = React.useState('');
  const styles={
    color:'#434853'
  }
  const onChange = (event) => {
    setGender(event.target.value);
    console.log(gender)
  }

  return (
    <div className="radio-container">
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="female" color="warning"  style={styles} control={<Radio />} label="Female" onChange={onChange} />
          <FormControlLabel value="male" color="warning"  style={styles} control={<Radio />} label="Male" onChange={onChange} />
          <FormControlLabel value="other" color="warning"  style={styles} control={<Radio />} label="Other" onChange={onChange} />
        </RadioGroup>
      </FormControl>
    </div>
  );
}