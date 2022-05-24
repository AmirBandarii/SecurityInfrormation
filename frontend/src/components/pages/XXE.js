import React from 'react';
import './info.css';
import Navbar from '../Navbar';
import img from './img8.jpg';

export default function XXE() {
  return (
    <div>
     <img className='Text-img' src = {img} alt='Lock' />
    <Navbar/>
    <div className='Artical'>
    <article>
    <img className='Text-img' src = {img} alt='Lock' />
    <h1 className='debug-center'>XML External Entities </h1>
    <p className='TextColor'>
    An XML External Entity attack is a type of attack against an application that parses XML input. This attack occurs when XML input containing a reference to an external entity is processed by a weakly configured XML parser. This attack may lead to the disclosure of confidential data, denial of service, server side request forgery, port scanning from the perspective of the machine where the parser is located, and other system impacts.
The XML 1.0 standard defines the structure of an XML document. The standard defines a concept called an entity, which is a storage unit of some type. There are a few different types of entities, external general/parameter parsed entity often shortened to external entity, that can access local or remote content via a declared system identifier. The system identifier is assumed to be a URI that can be dereferenced (accessed) by the XML processor when processing the entity. The XML processor then replaces occurrences of the named external entity with the contents dereferenced by the system identifier. If the system identifier contains tainted data and the XML processor dereferences this tainted data, the XML processor may disclose confidential information normally not accessible by the application. Similar attack vectors apply the usage of external DTDs, external stylesheets, external schemas, etc. which, when included, allow similar external resource inclusion style attacks.
Using file: schemes or relative paths in the system identifier, attackers can expose local files that may contain sensitive data such as passwords or private user data. An attacker might use this trusted application to pivot to other internal systems, potentially releasing other internal content via http(s) requests or executing a CSRF attack on any unprotected internal services, because the assault occurs relative to the application parsing the XML document. In some cases, a client-side memory corruption vulnerability in an XML processor library can be exploited by dereferencing a malicious URI, potentially allowing arbitrary code execution under the application account. Other attacks can get access to local resources that may not stop returning data, posing a risk to application availability if there are too many threads or processes running.

      </p>
    </article>
    </div>
    </div>

  );
}