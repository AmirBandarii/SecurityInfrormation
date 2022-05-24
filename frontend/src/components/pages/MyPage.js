import React from 'react'
import Navbar from '../Navbar'
import './MyPage.css'
import { Row, Col,Button,Form } from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { updateProfile } from '../../actions/userAction';
import Loading from "../../components/ErrorMessage";
import ErrorMessage from '../../components/ErrorMessage';
import {useNavigate } from 'react-router-dom';
import Axios from 'axios';

const MyPage = () => {
  const [ipDetails, setIpDetails] = useState([]);
  const [lat, setLat] = useState(22.5726);
  const [lon, setLon] = useState(88.3832);
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  let history=useNavigate();

const dispatch = useDispatch();

const userLogin = useSelector((state) => state.userLogin);
const {userInfo} = userLogin;
const userUpdate = useSelector((state)=> state.userUpdate);
const{loading, error, success} = userUpdate;

useEffect(() => {
  Axios.get('https://ipapi.co/json/').then((res) => {
    setIpDetails(res.data);
    setLat(res.data.latitude);
    setLon(res.data.longitude);
  });
}, [])



useEffect(() => {
if (userInfo) {
  console.log("is working!");
  setName(userInfo.username);
  setEmail(userInfo.email);
} else {
  console.log("not working!")
  history("/");
}
}, [history, userInfo]);

const submitHandler = (e) => {
  e.preventDefault();

  dispatch(updateProfile({ username, email, password }));
};

  return (
    <div>
        <Navbar/>
        <div className='EnviromentEdit'>
        <h1 className='EditProfile'>EDIT PROFILE</h1>
        <br/>
        <>
        <div className='Right'>
<h4 className='IPedit'>IP ADDRESS</h4>
<h1 className='mapEdit' id= "ip">{ipDetails.ip}</h1>
<h4 className='IPedit'>APPROXIMATE LOCATION: </h4>

<p className='mapEdit'>{ipDetails.city},{ipDetails.region},
{ipDetails.country_name}.</p>

<h4 className='IPedit'>Internet Service Provider(ISP):</h4>

<p className='mapEdit'>{ipDetails.org}</p>

</div>
 </>
        <Row className='profileContainer'>
<Col md={6} className="FormStyle">
  <Form onSubmit={submitHandler}>
              {loading && <Loading />}
              {success && (
                <ErrorMessage variant="success">
                  Updated Successfully
                </ErrorMessage>
              )}
              {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
              <Form.Group controlId="username">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  value={username}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>{" "}
              <br/>
              <Button type="submit" varient="primary">
                Update
              </Button>
            </Form>
          </Col>
        </Row>
      
        </div>   
    </div>
  );
};
export default MyPage;