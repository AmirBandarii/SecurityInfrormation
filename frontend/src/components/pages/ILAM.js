import React from 'react';
import './info.css';
import Navbar from '../Navbar';
import img from './img8.jpg';

export default function ILAM() {
  return (
    <div>
      <img className='Text-img' src = {img} alt='Lock' />
    <Navbar/>
    <div className='Artical'>
    <article>
    <img className='Text-img' src = {img} alt='Lock' />
    <h1 className='debug-center'>Insufficient Logging and Monitoring </h1>
    <p className='TextColor'>
    Insufficient Logging and Monitoring
Logs provide insight into the activities of a company. The generation of logs and audit trails enables an organization to troubleshoot, track events, detect incidents, and meet regulatory requirements. Missing security critical information logs or a lack of proper log format, context, storage, security, and timely response to detect an incident or breach are examples of insufficient logging and monitoring.
Logs are an essential component of incident response. An organization may be caught off guard by a breach that goes undetected, resulting in irreversible regulatory, financial, and legal issues. Proper log management will result in faster breach detection and mitigation, saving the company time, money, and reputation.
Confidentiality: Logs contain sensitive information that an attacker can access.
Integrity: Allowing sanitized input into log files allows attackers to corrupt log files, inject unexpected input, and change entries.
Availability: Logging everything can overload the system, resulting in denial of service; business disruption may occur as a result of a security incident or breach.
Non-repudiation: The source of the attack may be untraceable, resulting in system compromise and future attacks. 
Accountability: Audit trails are missing.
      </p>
    </article>
    </div>
    </div>

  );
}