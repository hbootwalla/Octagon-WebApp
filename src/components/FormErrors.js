import React, { Component } from 'react';
import './FormErrors.css';

export const FormErrors = ({formErrors}) => {
return (formErrors.length > 0 &&
  <div className='formErrors'>
    <p className="errorLine"><i class="fa fa-exclamation-triangle"></i>&nbsp; &nbsp;{formErrors}</p>
  </div>
)};
export default FormErrors;

