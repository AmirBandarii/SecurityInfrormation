import React from 'react'
import './info.css'
import Navbar from '../Navbar'
import img from './img8.jpg';


export default function Authentication()
{
    return (
      <div>
         <img className='Text-img' src = {img} alt='Lock' />
      <Navbar/>
      <div className='Artical'>
      <article>
      <img className='Text-img' src = {img} alt='Lock' />
      <h1 className='debug-center'>Broken Authentication</h1>
      <p className='TextColor'>
      Nowadays most websites make it possible for each user to have a private account of the specific website to save or send messages to other users. These accounts should be secure from any person who can harm or steal data by access to their accounts without any permission. Authentication is the process of verifying identity of client who want access to the private account Is the process of confirming that a person, entity, or website is who they say they are. 
In the context of web applications, is generally accomplished by submitting a username or ID, as well as one or more pieces of secret information that should only be known by a specific user.
Session Management is the technique through which a server keeps track of the status of a client. 
 This allows a server to remember how to respond to subsequent requests throughout a transaction. 
A session identifier is kept on the server and can be transferred back and forth between the client and the server while sending and receiving requests. Sessions should be one-of-a-kind for each user and computationally challenging to forecast. Anything that allows someone to log in to an account they aren't meant to have access to is known as broken authentication. It signifies that a website or program has flaws that allow an attacker to bypass typical security measures and get unauthorized access. Essentially, they are attempting to log into a victim's account as if it were their own, with all of the account's typical features and functionality. 
They can execute acts under the pretext of the user's identity and may be able to examine sensitive personal and financial information because they are impersonating the user. Authentication can be compromised in a variety of ways. We may be working with passwords, session IDs, keys, user account information, and other sensitive information. To get fraudulent access to user accounts, an attacker can automatically inject hacked username/password pairs into a website. They frequently enter a large number of different credentials into the app and check to see if any of them match an existing account. They might then be able to take control of the account. 
Many major websites, including social media platforms, e-commerce websites, and even some financial institutions' websites, have been hacked in the past. They make the compromised email addresses and passwords available for sale every time a significant password breach occurs. This information is used by hackers and criminal organizations. Credential stuffing is performed using the leaked credentials by attackers.
The things that can lead to authentication failure are listed below:
1.	Weak usernames and passwords
2.	Attacks on session fixation.
3.	URL rewriting.
4.	Identities aren't safeguarded when stored
5.	Unencrypted connections are used to send personal information to customers.

        </p>
      </article>
      </div>
      </div>
      
      )
}