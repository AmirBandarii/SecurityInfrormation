import React, { useState } from 'react';
import './Form.css';
import LoginForm from './LoginForm';
import {Link,useNavigate } from 'react-router-dom';

const FormLog = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
     
        <div className='form-content-left'>
          <img className='form-img' src='img/img-5.jpg' alt='success' />
        </div>
        {!isSubmitted ? (
          <LoginForm submitForm={submitForm} />
        ) : (
          <Home />
        )}
      </div>
    </>
  );
};

export default FormLog;