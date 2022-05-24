import React from 'react';
import './App.css';
import Form from './Form';
import LoginForm from './LoginForm';
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import { render } from '@testing-library/react';
import FormSignup from './FormSignup';
import FormLog from './FormLog';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Injection from './components/pages/Injection';
import Authentication from './components/pages/Authentication';
import FormSuccess from './FormSuccess';
import ProductHome from './ProductHome';
import SensitiveData from './components/pages/SensitiveData';
import XXE from './components/pages/XXE';
import AbouteMe from './AbouteMe';
import SM from './components/pages/SM';
import MyPage from './components/pages/MyPage';
import BAC from './components/pages/BAC';
import CroosSite from './components/pages/CrossSite';
import ILAM from './components/pages/ILAM';
import InsecureD from './components/pages/InsecureD';
import UCWDKV from './components/pages/UCWKV';
import AboutMeSuccesses from './AboutMeSucsses';


function App() {
  return (
      
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<FormLog/>}/>
    <Route path="/Home" element={<Home/>}/>
    <Route path="/Form" element={<Form />}/>
    <Route path = "/Injection" element={<Injection/>}/>
    <Route path = "/Authentication" element={<Authentication/>}/>
    <Route path = "/FormSuccess" element = {<FormSuccess/>}/>
    <Route path = "/ProductHome" element = {<ProductHome/>} />
    <Route path = "/SensetiveData" element = {<SensitiveData/>}/>
    <Route path = "/XXE" element = {<XXE/>}/>
    <Route path = "/SM" element = {<SM/>}/>
    <Route path = "/BAC" element = {<BAC/>}/>
    <Route path = "/ILAM" element = {<ILAM/>}/>
    <Route path = "/UCWKV" element = {<UCWDKV/>}/>
    <Route path = "/InsecureD" element = {<InsecureD/>}/>
    <Route path = "/CrossSite" element = {<CroosSite/>}/>
    <Route path = "/AbouteMe" element = {<AbouteMe/>}/>
    <Route path = "/MyPage" element = {<MyPage/>}/>
    <Route path = "/AboutMeSucsses" element = {<AboutMeSuccesses/>}/>

    </Routes>
    </BrowserRouter>
   
    );
}

export default App