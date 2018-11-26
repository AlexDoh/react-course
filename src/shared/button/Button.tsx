import * as React from 'react';

const Button = ({ onButtonClick, label }): JSX.Element => (
  <a
    href=''
    onClick={onButtonClick}
    className='button'
  >
    {label}
  </a>
);

export default Button;