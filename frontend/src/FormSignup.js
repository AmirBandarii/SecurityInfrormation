import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import FormLog from './FormLog';
import { useState, useEffect } from 'react';
import { Form } from "react-bootstrap";
import axios from "axios";
import Loading from './components/Loading';
import ErrorMessage from './components/ErrorMessage';
import { useDispatch, useSelector } from 'react-redux';
import { register } from './actions/userAction';


const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
const[email, setEmail] = useState("");
const[username, setuserName] = useState("");
const[ConfirmPassword, setConfirmPassword] = useState("");
const[password, setPassword] = useState("");
const[message, setMessage] = useState(null);
let history=useNavigate();
const userRegister = useSelector((state) => state.userRegister);
const {loading, error, userInfo} = userRegister;
//const userInfo = localStorage.getItem("userInfo");
useEffect(()=>{

if(userInfo){
  history("/Home");
}
},[history, userInfo]);
const dispatch = useDispatch();


const submitHandler =async(e) => {
e.preventDefault();
if(password !== ConfirmPassword){
  setMessage("Passwords do not match")
}
else {
dispatch(register(username,email,password))
}
};

  return (
    <div className='form-content-right'>
{message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
{loading && <Loading />}
{error &&<ErrorMessage varient="danger">{error}</ErrorMessage> }
      <Form onSubmit={submitHandler} className='form' noValidate>
        <h1>
          Get started with us today! Create your account by filling out the
          information below.
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={username}
            onChange= {(e) => setuserName(e.target.value)}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={email}
            onChange= {(e) => setEmail(e.target.value)}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={password}
            onChange= {(e) => setPassword(e.target.value)}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            value={ConfirmPassword}
            onChange= {(e) => setConfirmPassword(e.target.value)}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Sign in
        </button>
        <span className='form-input-login'>
          Already have an account? <Link to ="/">Sign up</Link>
          
        </span>
      </Form>
    </div>
  );
};

export default FormSignup;

//if(password !== ConfirmPassword){
  //setMessage("Passwords Do not Match");
//}