import React from 'react';
import {BasicButton} from './styles';

const Button = ({type, children}) => (
  <BasicButton type={type}>
     {children}
  </BasicButton>
)

export default Button;