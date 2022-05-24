import React from 'react'
import './info.css'
import Navbar from '../Navbar'
import img from './img8.jpg';




export default function SensitiveData() {
  return (
    <div >
   <img className='Text-img' src = {img} alt='Lock' />
    <Navbar/>
    <div className='Artical'>
    <article>
    <img className='Text-img' src = {img} alt='Lock' />
    <h1 className='debug-center'>Sensitive Data Exposure</h1>
    <p className='TextColor'>
    Any information that should be kept safe from unwanted access is considered sensitive data. Personal identifying information (PII) such as Social Security numbers, financial information, and login passwords all fall under the category of sensitive data.  Users are at risk of having sensitive data exposed if this data is acquired by an attacker as a consequence of a data breach. Data breaches that expose confidential credentials can cost millions of dollars, as well as ruining a company's brand. 
Mobile device usage has skyrocketed in the twenty-first century. As a result, banks, hospitals, retail, and a variety of other businesses have made it their mission to develop an online presence that is both user-friendly and efficient, with applications to match. 
The term "data exposure" has become well-known all throughout the world. Because billions of individuals are at risk of sensitive data leakage, security should be at the top of the deployment priority list. This is not the case, as developers scramble to match the expectations imposed by the digital conversion push. Attackers are aware that fast-paced development cycles are prone to vulnerabilities, therefore they look for those they may use in an application assault. Nearly 3.5 billion people were affected by two of the greatest breaches in the last century, the largest of which went unnoticed for three years. Attacks that obtain access to a system and are let to rummage around in unauthorized places undetected can inflict a lot of harm and jeopardize an organization's integrity. When a company is the victim of a data breach, it suffers. Even when breaches are fixed, users begin to perceive them as untrustworthy or unprotected, making them more unwilling to share sensitive information. Client confidence is critical to an organization's success, and without it, it would almost certainly fail. When a data breach reaches mass proportions and affects millions of people, it attracts media attention. Negative connotations with brand security and media exposure damage a company's reputation and can last for years.
      </p>
    </article>
    </div>
    </div>
  )
}
