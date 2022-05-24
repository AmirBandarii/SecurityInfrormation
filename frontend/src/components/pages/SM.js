import React from 'react';
import './info.css';
import Navbar from '../Navbar';
import img from './img8.jpg';


export default function SM() {
  return (
    <div >
      <img className='Text-img' src = {img} alt='Lock' />
    <Navbar/>
    <div className='Artical'>
    <article>
    <img className='Text-img' src = {img} alt='Lock' />
    <h1 className='debug-center'>Security Misconfiguration</h1>
    <p className='TextColor'>
    Security measures that are incorrectly configured or left insecure, putting your systems and data at risk, are known as security misconfigurations. In other words, any poorly documented configuration changes, default settings, or a technical failure across any component in your endpoints could result in a misconfiguration. Some of the most common security misconfigurations include not disabling debugging processes on apps before deploying them to the production environment, not letting applications automatically update with the latest patches, forgetting to disable default features, as well as a host of other little things that can spell big trouble down the road.

Hackers always searched for the most popular security misconfigurations like:
1.	Default accounts with well-known passwords are not disabled.
2.	Debugging capabilities that disclose stack traces or other error messages to users are left on in production.
3.	Unnecessary or default features, such as ports, services, pages, accounts, or privileges, are left enabled.
4.	Using insecure values for security headers or not using them at all

      </p>
    </article>
    </div>
    </div>
  )
}
