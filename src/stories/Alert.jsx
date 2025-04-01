import React from 'react';
import {default as MaterialAlert} from '@mui/material/Alert';

const Alert = ({ severity }) => (
  <MaterialAlert severity={severity}>This is an alert</MaterialAlert>
);

export default Alert;