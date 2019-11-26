import React from 'react';
import { FaUserAlt } from "react-icons/fa";

import InputText from './InputText';

export default function(props) {
  return (
    <InputText className={'sp-form-icon'} {...props}>
      <FaUserAlt className={'sp-icon'} />
    </InputText>
  )
}