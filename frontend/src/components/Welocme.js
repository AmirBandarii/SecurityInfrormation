import { Button } from './Button';
import '../App.css';
import React from "react";
import './Welcome.css';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';



export default function Welocme() {
  return (
    
    <div className="hero-container">
      <Navbar />
        <img src="/img/img6.jpg" />
        <div>
          <br/>
        <h1 className="fontEdit" >WELCOME To <br/>SecurityInfo!</h1>
        </div>
        <div className="hero-btn">
            
        
    </div>
    </div>
  );
}
