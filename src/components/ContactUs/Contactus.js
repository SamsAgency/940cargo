import React from 'react'
import './ContactUs.css'
import Mainnav from './../mainnav/Mainnav';
import Footer from '../main/footer/Footer';
import ContactUsForm from './ContactUsForm/ContactUsForm';

const Contactus = () => {
    return (
        <div className="contact-us">
            <Mainnav/>
            <ContactUsForm/>
            <Footer/>
        </div>
    )
}

export default Contactus
