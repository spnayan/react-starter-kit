import React, { useState } from 'react';
import useForm from '@Hooks/useForm';
import Input from '@Components/common/Input/index';
import validate from './validateForm';
import './form.css';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formSuccess = () => {
    setIsSubmitted(true);
  };
  const { values, errors, handleChange, handleSubmit } = useForm(formSuccess, validate);
  console.log('Form Values ', values);

  const inputs = [
    {
      id: 1,
      name: 'fullName',
      type: 'text',
      placeholder: 'Full Name',
    },
    {
      id: 2,
      name: 'address',
      type: 'text',
      placeholder: 'Address',
    },
    {
      id: 3,
      name: 'email',
      type: 'text',
      placeholder: 'Email',
    },
    {
      id: 4,
      name: 'contact',
      type: 'text',
      placeholder: 'Contact',
    },
    {
      id: 5,
      name: 'photo',
      type: 'file',
      placeholder: 'Photo',
    },
    {
      id: 6,
      name: 'cv',
      type: 'file',
      placeholder: 'CV',
    },
    {
      id: 7,
      name: '',
      type: 'submit',
      placeholder: '',
    },
  ];
  return (
    <div className="form-container">
      <div className="form-header">
        <h3>New Here?</h3>
        <h6>“There is a lot of adventures out there, waiting for us to live them!”</h6>
        <h5>Join us now !</h5>
      </div>
      <div className="form-details">
        {isSubmitted ? (
          <div className="form-submitted">
            <h5>Form Submitted Successfully!</h5>
            <h6>{`Hello ${values.fullName}! `}</h6>
            <span>{`Verify your email by clicking the link sent to ${values.email}`}</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {inputs.map((input) => {
              return <Input key={input.id} {...input} onChange={handleChange} errors={errors} />;
            })}
          </form>
        )}
      </div>
    </div>
  );
};

export default Form;
