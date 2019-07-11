import React from 'react';
import './label.scss';

const Label = ({ role, label }) => (
  <span className={`labels ${label}`}>{role}</span>
);

export default Label;