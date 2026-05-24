import emailjs from '@emailjs/browser';
import { useState } from 'react';
import "./pictureSlider.css"


function Email() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission logic here
    const templateParams = {
      email: email,
      first_name: firstName,
      last_name: lastName
    };
    emailjs.send('service_9fkd1hl', 'template_gy5u7td', templateParams, '_eAgcDVLeUjPgnrqP')
      .then((response) => {        
        console.log('Email sent successfully!', response.status, response.text);
        alert(`Thank you for cementing your legacy ${firstName} ${lastName}!`);
      }, (err) => {       
         console.error('Failed to send email. Error:', err);
      });
  };

  return (
    <>
      <div id="rsvp">
        <h2 id="rsvp">RSVP List</h2>
        <div className="rsvp-container">
        <p>Do you want to be the first to know about everyhting #WORLDCUP2026? If so, you need to join our legacy email list. Once signed up you'll get access to exclusives like reduced ticket prices, meal plans and tourist attractions!</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Enter your last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button className="slider-btn" type="submit">Join List</button>
        </form>
        </div>
    </div> 
    </>
  )
}

export default Email
