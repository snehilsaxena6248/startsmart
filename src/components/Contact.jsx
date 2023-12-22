import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_44ogkz6', 'template_fmwv5nq', form.current, 'wKQqn1h1YsTxqREFm')
      .then((result) => {
          console.log(result.text);
         alert('Message Send');
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <div>
    <div className='heading'>Contact Us</div>

    <div className='con1'>
    
      
      <div className='map'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28892.38178173768!2d75.8325332!3d25.1509772!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f8503ba4d378f%3A0xa034977712855d22!2sPack%20Plast%20Industries!5e0!3m2!1sen!2sin!4v1703226642798!5m2!1sen!2sin" width="600" height="450"  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      
      </div>
      <div className='con2' > 
      
      <form ref={form} onSubmit={sendEmail}>
      <div className="ro">
<div className="me">

      <label> First Name</label>
      <input type="text" name="fname" required />
      </div>
<div className="me">

      <label> Last Name</label>
      <input type="text" name="lname" required/>
      </div>
      <br />
      </div>
      
      <div className="ro">
      <div className="me">

      <label>Email</label>
      <input type="email" name="email" required />
      </div>
<div className="me">

      <label>Phone</label>
      <input type="text" name="phone" required/>
      </div>
      <br />
      </div>
      <div className="ro">
<div className="me">
      <label>Message</label>
      <input type="text" name="message" required /><br />
      </div>
      </div>
      <input type="submit" value="Send Message" />
    </form>
    </div>
    </div>
    </div>
  )
}

export default Contact