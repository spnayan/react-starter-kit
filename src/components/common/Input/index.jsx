import React from 'react';
import './input.css';

const Input = (props) => {
  const { name, onChange, type, placeholder, errors } = props;
  return (
    <>
      <label className="label" htmlFor="input-field">
        {placeholder}
        <input type={type} placeholder={placeholder} name={name} onChange={onChange} />
        {errors[name] && <span>{errors[name]}</span>}
      </label>
    </>
  );
};

export default Input;
