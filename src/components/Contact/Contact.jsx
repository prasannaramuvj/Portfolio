import React from 'react'
import './Contact.css'
import './ContactResponsive.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import { toast } from 'react-toastify';





const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "e4a014d2-c448-4ad0-b254-2b0e42a8f9d0");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      // console.log("Success", res);
      toast.success(res.message);
    }
  };



  return (
    <div className="contact" id='contact'>
      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src={theme_pattern} alt="bg-design" className='theme-pallete' />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          {/* <p>Lorem ipsum dolor sit amet.</p> */}
          <div className="contacts-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="mail-icon" />
              <p>prasannaramu2004@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="call image" />
              <p>+91 9360237954</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="location" />
              <p>Thanjavur</p>
            </div>

          </div>
        </div>
        <form onSubmit={onSubmit} action="" className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder='Enter your name' name='name' required />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder='Enter your email' name='email' required />
          <label htmlFor="">Message</label>
          <textarea name="message" id="" placeholder='Enter your message' rows="8"></textarea>
          <button type='submit' className='contact-submit'>Submit Now</button>

        </form>
      </div>
    </div>
  )
}

export default Contact