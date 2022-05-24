import React from 'react';
import './AboutMeSucces.css';
import {Link} from "react-router-dom";

export default function AboutMeSucsses() {
  return (
    <div>
        <h1 className='sucssesEdit'>Your submission has been<br/>  successful! </h1>
        <p className='sucessesText'>Thanks! I have recived your submission,and I'll be in touch really soon</p>
        <br/>
        <Link to = '/AbouteMe'>
        <div class="text-center">
      <button type="button" class="btn btn-primary">Go Back</button>
    </div>
    </Link>
   
    </div>
  )
}
