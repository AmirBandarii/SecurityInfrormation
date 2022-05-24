import {Link,useNavigate } from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './Navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Nav, NavDropdown} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useEffect, useState } from 'react';
import checkPropTypes from 'prop-types/checkPropTypes';
import MyPage from './pages/MyPage';
import { useDispatch, useSelector } from 'react-redux';
import {logout} from "../../src/actions/userAction";
import BAC from "./pages/BAC";
 const Navbar = () =>{
  const[clicked,setClicked] = useState(false);
  const history=useNavigate();
//let user = JSON.parse( localStorage.getItem('userInfo'));
const dispatch = useDispatch()
const userLogin = useSelector((state) => state.userLogin);
const{userInfo} = userLogin;

const logoutHandler = () => {
  dispatch(logout());
  history("/Form");
}

  return (
  
    <Nav className= "navbarItems">
   
    <div className="menue-icon" onClick={()=> setClicked(!clicked)}>

    <i className={clicked ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
    

    </div>
    <ul className = { clicked ? 'nav-menu active' : 'nav-menu' }>
        <li>
        
          <Link className = "nav-links" to = '/Home'>
            Home
            </Link>
        </li>
      <li>
      <NavDropdown
      title={
        <span className="nav-links">Topics</span>
    }

      >
      <LinkContainer className="nav-links"  to="/Injection">
           <NavDropdown.Item >Injection</NavDropdown.Item>
             </LinkContainer>
             <LinkContainer className="nav-links" to="/Authentication">
           <NavDropdown.Item >Broken Authentication</NavDropdown.Item>
           </LinkContainer> 
           <LinkContainer className="nav-links" to="/SensetiveData">
           <NavDropdown.Item >Sensitive Data Exposure</NavDropdown.Item>
           </LinkContainer>
           <LinkContainer className="nav-links" to="/XXE">
           <NavDropdown.Item >XML External Entities (XXE)</NavDropdown.Item>
           </LinkContainer>
           <LinkContainer className="nav-links" to="/SM">
           <NavDropdown.Item >Security Misconfiguration</NavDropdown.Item>
           </LinkContainer>
           <LinkContainer className="nav-links" to="/BAC">
           <NavDropdown.Item >Broken Access Control</NavDropdown.Item>
           </LinkContainer>
           <LinkContainer className="nav-links" to="/CrossSite">
           <NavDropdown.Item >Cross-Site Scripting (XSS)</NavDropdown.Item>
           </LinkContainer>
           <LinkContainer className="nav-links" to="/InsecureD">
           <NavDropdown.Item >Insecure Deserialization</NavDropdown.Item>
           </LinkContainer>
           <LinkContainer className="nav-links" to="/UCWKV">
           <NavDropdown.Item >Using Components With Known Vulnerabilities</NavDropdown.Item>
           </LinkContainer>
           <LinkContainer className="nav-links" to="/ILAM">
           <NavDropdown.Item >Insufficient Logging And Monitoring</NavDropdown.Item>
           </LinkContainer>
          </NavDropdown>
        </li>
        <li>
        <Link className = "nav-links" to = '/ProductHome'>
        Products
        </Link>
        </li>
        <li>
        <Link className = "nav-links"  to = '/AbouteMe'>
        About
        </Link>
        </li>
   <li>
      <NavDropdown title={userInfo?.username} >
        <LinkContainer  to='/MyPage'>
      <NavDropdown.Item>Profile</NavDropdown.Item>
      </LinkContainer>
           <NavDropdown.Item onClick = {logoutHandler} >Logout</NavDropdown.Item>
        
          </NavDropdown>
      </li>
    </ul>

     </Nav>
  );
}
export default Navbar;
