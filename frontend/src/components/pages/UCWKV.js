import React from 'react';
import './info.css';
import Navbar from '../Navbar';
import img from './img8.jpg';


export default function UCWKV() {
  return (
    <div>
      <img className='Text-img' src = {img} alt='Lock' />
    <Navbar/>
    <div className='Artical'>
    <article>
    <img className='Text-img' src = {img} alt='Lock' />
    <h1 className='debug-center'>Using Components with Known Vulnerabilities</h1>
    <p className='TextColor'>
    Web development has expanded at an exponential rate, thanks in part to the open-source revolution. 
    By integrating open-source development tools, frameworks, and languages, developers can create rich 
    and complex applications for little cost and 
    effort. Security researchers and testers
     typically use automated tools to identify 
     compromised or vulnerable components, after
      which they publish their findings on issue 
      trackers, security advisories, or the National
       Vulnerability Database (NVD). Any skilled 
       attacker who discovers this information can 
       use it to exploit specific application surfaces. 
       Organizations recognize that no application, open or closed source, can be completely secure. Most security flaws are discovered by security researchers and DevSecOps teams after an application has already been deployed. These experts typically document and publish their findings in order for patches to be applied. Attackers typically search these publications for components with known vulnerabilities that have not been patched, as well as organizations using outdated versions of these plugins. 
The use of obsolete libraries is also aided by the absence of a version standardization system. As a result, most open-source developers and owners fail to specify vulnerable versions of their products. Furthermore, libraries use different version numbering systems that are not understood by all developer team members, which complicates code pulling and deployment. The vendors also use disparate vulnerability reporting tools, making it impossible for teams to search for discovered vulnerabilities in a centralized, organized pool.

      </p>
    </article>
    </div>
    </div>
  );
}