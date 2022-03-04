import React from 'react';
import TextField from '@mui/material/TextField';
import './index.scss';

const TextInputComponent = (props) => {
  return (
    <div className='textinput-component-css'>
        <TextField {...props} fullWidth></TextField>
    </div>
  )
}

export default TextInputComponent;