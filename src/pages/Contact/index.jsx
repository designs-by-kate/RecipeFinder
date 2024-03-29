import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
import emailjs from 'emailjs-com';
import LinkedIn from '../../assets/linkedinIcon.png';
import GitHub from '../../assets/githubIcon.png';
import Email from '../../assets/emailIcon.png';
import './style.css'

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Extract form values
    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const message = form.current.message.value;

    // Basic form validation
    if (!name || !email || !message) {
      alert('Please fill in all required fields (Name, Email, and Message) before sending.');
      return;
    }

    emailjs
      .sendForm('service_syw1zis', 'template_5g1djlf', form.current, {
        publicKey: 'OaJqMMFzpoPFoGtMd',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          // Clear input fields and text area
          form.current.reset();
          // Display success pop-up message
          alert('Email sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          // Display failure alert
          alert('Unable to send email. Please try again or use the provided email links.');
        },
      );
  };

  return (
    <div id="contact" className="customContainer">
      <div className="text">
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
        <ul className="links">
          <li className="link">
            <img src={Email} alt="Email icon" />
            <a href="mailto:katepospiech@hotmail.com">katepospiech@hotmail.com</a>
          </li>
          <li className="link">
            <img
              src={LinkedIn}
              alt="LinkedIn icon"
            />
            <a href="https://www.linkedin.com/in/kate-pospiech-3b8846290/">linkedin.com/KatePospiech</a>
          </li>
          <li className="link">
            <img src={GitHub} alt="Github icon" />
            <a href="https://github.com/designs-by-kate">github.com/Designs-By-Kate</a>
          </li>
        </ul>
      </div>
      <div className="contactForm">
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}

export default Contact;