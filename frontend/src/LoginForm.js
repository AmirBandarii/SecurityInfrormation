import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
import { Outlet, Link, useNavigate} from 'react-router-dom';
import Loading from './components/Loading';
import ErrorMessage from './components/ErrorMessage';
import { useState, useEffect } from 'react';
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { login } from './actions/userAction';


const LoginForm = ({submitForm}) => {

    const {  handleSubmit, errors } = useForm(
      submitForm,
      validate
    );
let history=useNavigate();
const userLogin = useSelector((state) => state.userLogin);
const { loading, error, userInfo } = userLogin;
const dispatch = useDispatch();
const noteList = useSelector(state => state.state)

useEffect(()=>{

if(userInfo){
  history("/Home");
}
},[history, userInfo]);
  
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");

 const submitHandler = async(e) => {
   e.preventDefault();
   dispatch(login(email, password));
 };

    return (
        <div className='formLogin-content-right'>
          {error &&<ErrorMessage varient="danger">{error}</ErrorMessage> }
          {loading && <Loading />}
          <Form onSubmit={submitHandler} className='form' noValidate>

            <h1>
              Welcome Back please write your email and password to access your account !
            </h1>
            <div className='form-inputs'>
              <label className='form-label'>Email</label>
              <input
                className='form-input'
                type='email'
                name='email'
                placeholder='Enter your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                //onChange={handleChange}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <p>{errors.password}</p>}
            </div>
            <button className='form-input-btn' type='submit' >
              Sign in
            </button>
            <span className='form-input-login'>
                don't you have an account? please click  <Link to ="/Form">here</Link>
            </span>
            <Outlet/>
          </Form>
        </div>
      );
    };

    export default LoginForm;