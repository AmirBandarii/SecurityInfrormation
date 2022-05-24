import React from 'react';
import './info.css';
import Navbar from '../Navbar';
import img from './img8.jpg';


export default function BAC() {
  return (
    <div>
      <img className='Text-img' src = {img} alt='Lock' />
    <Navbar/>
    <div className='Artical'>
    <article>
    <img className='Text-img' src = {img} alt='Lock' />
    <h1 className='debug-center'>Broken Access Control  </h1>
    <p className='TextColor'>
    Access control enforces policy by preventing users from acting beyond the scope of their intended permissions. Failures typically result in unauthorized information disclosure, data modification or destruction, or performing a business function beyond the user's capabilities. By circumventing access control checks by modifying the URL, internal application state, or HTML page, or simply by employing a custom API attack tool.
Allowing the primary key to be changed to another's users record, permitting viewing or editing someone else's account. Privilege elevation. Acting as a user while not logged in, or acting as an administrator while logged in as a user.
Metadata manipulation, such as replaying or tampering with a JSON Web Token (JWT) access control token, or manipulating a cookie or hidden field to elevate privileges, or abusing JWT invalidation. Unauthorized API access is possible due to a CORS misconfiguration.
As an unauthenticated user, force browsing to authenticated pages or privileged pages. Accessing API with missing POST, PUT, and DELETE access controls.
In a SQL call to access account information, the application uses unverified data:
 pstmt.setString(1, request.getParameter("acct"));
  ResultSet results = pstmt.executeQuery();
An attacker simply modifies the browser's acct parameter to send any account number they want. If the attacker is not properly verified, he or she can gain access to any user's account.
http://example.com/app/accountInfo?acct=notmyacct
      </p>
    </article>
    </div>
    </div>
  );
}