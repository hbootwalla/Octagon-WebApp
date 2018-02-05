import React, { Component } from 'react';
import './FormErrors.css';

export const FormErrors = ({formErrors}) =>

<div className='formErrors'>
<ul>
    {Object.keys(formErrors).map((fieldName, i) => {
    if(formErrors[fieldName].length > 0){
      return (
        <li key={i} className="errorLine text-danger" >{fieldName} {formErrors[fieldName]}</li>
      )        
    } else {
      return '';
    }
  })}
  </ul>
</div>

export default FormErrors;

