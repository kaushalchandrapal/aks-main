import React from 'react';
import Button from '@mui/material/Button';
import './index.scss';

const ButtonComponent = (props) => {
  return (
    <div className='button-component-css'>
      <Button {...props}>{props.text}</Button>
    </div>
  );
};

export default ButtonComponent;