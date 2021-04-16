// import React,{useState} from "react";
import "./ContactUsForm.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";


const ContactUsForm = () => {
  
  // const [fname, setFname] = useState('')
  // const [lname, setLname] = useState('')
  // const [email, setEmail] = useState('')
  // const [tell, setTell] = useState('')
  // const [message, setMessage] = useState('')
  // const [buttonText, setButtonText] = useState('Send ')

  // // handle first name
  // const handleFname = (e) => {
  //     setFname(e.target.value)
  //     console.log(fname)
  // }
  // const handleLname = (e) => {
  //     setLname(e.target.value)
  //     console.log(fname)
  // }
  // const handleEmail = (e) => {
  //     setEmail(e.target.value)
  //     console.log(fname)
  // }
  // const handleTell = (e) => {
  //     setTell(e.target.value)
  //     console.log(fname)
  // }
  // const handleMessage = (e) => {
  //     setMessage(e.target.value)
  //     console.log(fname)
  // }

  
  return (
    <div className="contact-us-form">
      <div className="contact-us-form-banner">
        <h2 className="contact-us-form-banner-h2">Let's Communicate</h2>
        <p className="contact-us-form-banner-p">
          Reach us for any enquiries / suggestions
        </p>
      </div>

      <form className="the-contact-form" action="https://formsubmit.co/ken.wadhwa@940aircargo.com" method="POST">
          <div className="the-contact-form-content">
            <div className="contact-left-form">
              <label className="contact-us-label">Your Name</label>
              <input className="input-contactus-form" placeholder="Enter your Name..." type="text" name="name" required/>
              
              <label className="contact-us-label">Your Email</label>
              <input className="input-contactus-form" placeholder="Enter your Email..." type="email" name="email" required/>
              
              <label className="contact-us-label">Tel Number</label>
              <input className="input-contactus-form" placeholder="Enter your Phone number..." type="tel" name="tel" required/>
            </div>
            <div className="contact-right-form">
              <label className="contact-us-label">Your message here</label>
              <textarea className="textarea-contactus-form" type="text" name="text" required/>
            </div>
          </div>
          <div className="contact-button-area">
            <button className="contact-form-button" type="submit">
              Send
              <FontAwesomeIcon icon={faPaperPlane}/>
            </button>
          </div>
      </form>
      <div className="contactus-map">
      

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7271019092773!2d36.91454361486872!3d-1.3400679360654641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f13573c31ea6b%3A0xbe036855123ceb34!2s940%20air%20cargo!5e0!3m2!1sen!2ske!4v1616757961532!5m2!1sen!2ske" 
          className="contact-map-iframe"
          title="940 air location"
          height="450" 
          style={{border:0}}
          allowfullscreen="" 
          loading="lazy">
      
          </iframe>
      </div>

      {/* <form className="the-contact-us-form" >
        <div className="the-contact-us-form-elements">
          <label className="the-contact-us-form-labels">First Name*</label>
          <input
            className="the-contact-us-form-input"
            type="text"
            placeholder="Enter your first name here..."
            value={fname}
            onChange={handleFname}
            required
          />
          <br />

          <label className="the-contact-us-form-labels">Last name*</label>
          <input
            className="the-contact-us-form-input"
            type="text"
            placeholder="Enter your last name here..."
            value={lname}
            onChange={handleLname}
            required
          />
          <br />

          <label className="the-contact-us-form-labels">Email*</label>
          <input
            className="the-contact-us-form-input"
            type="email"
            placeholder="Enter your email name here..."
            value={email}
            onChange={handleEmail}
            required
          />
          <br />

          <label className="the-contact-us-form-labels">Telephone Number</label>
          <input
            className="the-contact-us-form-input"
            type="text"
            value={tell}
            onChange={handleTell}
            placeholder="Enter your mobile number name here..."
          />
          <br />

          <label className="the-contact-us-form-labels">Your Message*</label>
          <textarea placeholder="Type your message here..." required value={message} onChange={handleMessage} />
        </div>

        <button type="submit" className="contact-us-form-button">
          {buttonText} <FontAwesomeIcon icon={faPaperPlane}/>
        </button>
      </form> */}
    </div>
  );
};

export default ContactUsForm;
