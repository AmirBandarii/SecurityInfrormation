import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductHome from './ProductHome';
import './ProductScreen.css'


    const Itemcard = (props)=>{
  return (
<div className='card'>
  <div className='embed-responsive embed-responsive-16by9'>
  <img  className='card-img-top embed-responsive-item' alt="Card image cap" src={props.img} />
  </div>
  <div className='card-block text-center'>
    <h5 className='card-title'>{props.title}</h5>
    <h5 className='card-title'>$ {props.price}</h5>
    <p className='card-text'>{props.desc}</p>
    <Link to="/" className="btn btn-primary">Add to Cart</Link>
  </div>
  </div>
  );
};

export default Itemcard;