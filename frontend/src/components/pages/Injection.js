import React from 'react'
import './info.css'
import Navbar from '../Navbar';
import img from './img8.jpg';




export default function Injection() {
  return (
    <div>
     <img className='Text-img' src = {img} alt='Lock' />
      <Navbar/>
      <div className='Artical'>
        <article>
        <img className='Text-img' src = {img} alt='Lock' />
      <h1 className='debug-center'>INJECTION</h1>
      <p className='TextColor'>
      The number one vulnerability in web application security risks (OWASP) is Injection. The most common injection attacks will happen 
        in SQL which is called SQL injection. Most of the web apps have communication with a database, the database has all of the information 
        about users who had an account on the specific website. Hackers can use some kind of malicious code on the sign-up page to trick the 
        back-end database to return all of this data. A lot of different things could happen from these injection attacks like stealing important 
        passwords, Credit Card numbers, or any sensitive data. A couple of things that we can do to guard against attacks is a concept called 
        query parameterization. A query is a request from the database to give us specific information which we asked from the database table 
        and in the front-end part we need to separate the sequel statements from any kind of parameters in the database. Also making limitations 
        for writing user names and passwords can secure our website like using characters in the user name and having a strong password with 
        capital and small letters.
        Let’s bring one example for how sql and web app will communication when we type something and click submit, a post request goes off, 
        one language like PHP receives this and constructs an SQL query but says give me any roads that have the thing which we typed and then 
        asks the database for all of those rows and then will show result on a screen. In some situation an attacker can rapidly increase an SQL 
        injection attack to compromise the underlying server or other back-end or or perform denial of service attack. If a user wants to buy 
        anything like toys from shopping websites, a user should access something like products then choose the toys part. In database will be 
        like this: SELECT * FROM products where category = 'toys' AND released = 1 
        In this database query released = 1 will hide products that are not released and for unreleased products will use 0.
        Browser requests will be like https::/insecure_website.com/products? Category=toyss
        Let’s bring one example for how sql and web app will communication when we type something and click submit, a post request goes off, 
        one language like PHP receives this and constructs an SQL query but says give me any roads that have the thing which we typed and then 
        asks the database for all of those rows and then will show result on a screen. In some situation an attacker can rapidly increase an SQL 
        injection attack to compromise the underlying server or other back-end or or perform denial of service attack. If a user wants to buy 
        anything like toys from shopping websites, a user should access something like products then choose the toys part. In database will be 
        like this: SELECT * FROM products where category = 'toys' AND released = 1 
        In this database query released = 1 will hide products that are not released and for unreleased products will use 0.
        Browser requests will be like https::/insecure_website.com/products? Category=toyss
        The database doesn’t do any defense against SQL injection attacks and if the hacker uses like 
        https://insecure-website.com/products?category=toys '– which in SQL will be select * from products where category = 'toys'--' and released = 1 
        after double dash sequence it will be define as a comment and all products are displayed including unreleased products going further 
        the attacker can cause the application to display all the products in any categories and they don’t know about to do this the attacker 
        can send this attack which is
        https://insecur-website.com/ products ? Category = toys' 
        +or+1=1--’ and released = 1 
        </p>
      </article>
      
      </div>
    </div>
  )
}
