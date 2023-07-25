import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const UserContact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3xa7km8', 'template_gh133wo', form.current, 'kb1SkjC3BA-1ti-3n')
      .then((result) => {
          console.log(result.text);
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact">
 
        <h1 className='contactTitle'>Get in Touch</h1>
        <h2 className='subTitle'>Please fill in your details, and one of our representatives will reach out to you soon.</h2>
        <label className='contactLabel' htmlFor="user_name">Name</label>
        <input className='inputContact' type="text" name="user_name" />
        <label className='contactLabel'   htmlFor="user_email" >Email</label>
        <input className='inputContact' type="email" name="user_email"/>
        <textarea name="message" className='message'/>

      <button type='submit' className='button'>Get in Touch</button>

    </form>
  );
};