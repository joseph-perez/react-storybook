import React from 'react';
import {default as MaterialButton} from '@mui/material/Button';


const Button = ({ variant="contained", size, label, ...props }) => {
  return (
    <MaterialButton variant={variant} size={size}>{label}</MaterialButton>
  );
};

export default Button;