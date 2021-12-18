import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
  // form values
  const [values, setValues] = useState({ fullName: '', address: '', email: '', contact: '', photo: '', cv: '' });

  // Errors
  const [errors, setErrors] = useState({ fullName: '', address: '', email: '', contact: '', photo: '', cv: '' });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // A method to handle form inputs
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors, callback, isSubmitting]);

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
