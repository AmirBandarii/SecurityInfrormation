import React from 'react';
import './info.css';
import Navbar from '../Navbar';
import img from './img8.jpg';

export default function CrossSite() {
  return (
    <div>
      <img className='Text-img' src = {img} alt='Lock' />
    <Navbar/>
    <div className='Artical'>
    <article>
    <img className='Text-img' src = {img} alt='Lock' />
    <h1 className='debug-center'>Cross Site Scripting </h1>
    <p className='TextColor'>
    Cross-Site Scripting (XSS) attacks are a type of injection in which malicious scripts are injected into otherwise benign and trusted websites. XSS attacks occur when an attacker uses a web application to send malicious code, typically in the form of a browser side script, to a different end user. Flaws that allow these attacks to succeed are quite widespread and occur anywhere a web application uses input from a user within the output it generates without validating or encoding it. The flaws that allow these attacks to succeed are quite common, and they occur whenever a web application uses user input within the output it generates without validating or encoding it. An attacker can use XSS to deliver a malicious script to an unwary user. The browser of the end user has no way of knowing that the script should not be trusted and will execute it anyway. Because the malicious script believes the script came from a trusted source, it has access to any cookies, session tokens, or other sensitive information stored by the browser and used with that site. These scripts can even rewrite the HTML page's content. 
XSS (Cross-Site Scripting) attacks occur when:
1.Data enters a Web application from an untrustworthy source, most commonly a web request.
2.The data is included in dynamic content that is sent to a web user without being validated for malicious content.
Malicious content sent to the web browser is frequently in the form of a JavaScript segment, but it can also be HTML, Flash, or any other type of code that the browser can execute. The variety of XSS attacks is nearly limitless, but they commonly include sending private data to the attacker, such as cookies or other session information, redirecting the victim to web content controlled by the attacker, or performing other malicious operations on the user's machine under the guise of the vulnerable site.
      </p>
    </article>
    </div>
    </div>
  );
}