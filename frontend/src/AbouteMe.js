import './AboutMe.css';
import Navbar from './components/Navbar';
import emailjs from 'emailjs-com';
import {useForm} from 'react';
import { useNavigate } from 'react-router-dom';

export default function AbouteMe() {
  const history = useNavigate();
  function sendEmail(e) {
  e.preventDefault();
  emailjs.sendForm('service_u5cmyzh','template_x1cqmm5',e.target,'RDpZ6OgSWR8yR3RXp'
  ).then(res=>{
 history("/AboutMeSucsses");   
  }).catch(err=>console.log(err));
  }
  return (
      <div className='bgColorp'>
        <Navbar />
        
    <div className='container'>
    
<h1>About</h1>
<p>SecurityInfo is my first experience in Full stack websites with JS platforms (Node.js,React.js and MongoDB). On this website, I added my research about OWASP and website vulnerability and a product page in which users can add packages and calculate the total price.  </p>
<p>My name is Amir Hossein Bandari,
I'm an IT student at the European University of Armenia. I will be happy if you share your ideas about my work by contacting me.</p>
<div>
<h1 style ={{marginTop:'25px'}}>Contact Me</h1>
<form className='row ' style={{margin:"15px 50px 50px 50px" , width:"50%" , textAlign:"center", display:"inline-block"}}
onSubmit = {sendEmail}> 

<label>Full Name</label>
<input  type = 'text' name='name' className='form-control'/>

<label>Email</label>
<input type="email" name="user-email" className='form-control'/>

<label>Message</label>
<textarea name='message' rows='4' className='form-control' />

<input  type='submit'  value='send' className='form-control btn btn-primary' style={{marginTop:"30px"}} />

</form>
</div>
</div>
    </div>
  )
}
