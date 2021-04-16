import React from 'react'
import './footer.css'
import logo from '../../../assets/940 air cargo logo.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator, faGlobeAfrica, faUserAlt, faUserAltSlash } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagramSquare, faLinkedinIn, faTwitterSquare} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="footer">
            <div className="upper-footer">
                <div className="footer-logo">
                    <img className="footer-image" src={logo} alt='logo'/>
                </div>
            
                <div className="footer-middle">
                    <h2>Contacts</h2>
                    <p>Emails:<br/> info@940aircargo.com <br/> ken.wadhwa@940aircargo.com</p>
                    <p>Phones:<br/> Phone 1:  +254 020 243 2584 <br/> Phone 2:  +254 777 794 001</p>
                </div>

                <div className="footer-right">
                    <h2>Address</h2>
                    <p>FIT Building, 1st floor,</p>
                    <p>JKIA Cargo Village</p>
                    <p>Second Freight Lane</p>
                    <h2>Check our social media</h2>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/940AirCargo-105957861566593/" rel="noreferrer" target="_blank" ><FontAwesomeIcon className="social-btns" icon={faFacebookSquare} size="2x" /> </a>
                        <a href="https://twitter.com/940aircargo?s=11" rel="noreferrer" target="_blank" ><FontAwesomeIcon className="social-btns" icon={faTwitterSquare} size="2x" /></a>
                        <a href="https://www.instagram.com/940aircargo/?igshid=1nu0ezzs22ho7" rel="noreferrer" target="_blank" ><FontAwesomeIcon className="social-btns" icon={faInstagramSquare} size="2x" /></a>
                        <a href="https://www.linkedin.com/company/940-air-cargo/about/" rel="noreferrer" target="_blank" ><FontAwesomeIcon className="social-btns" icon={faLinkedinIn} size="2x" /></a>
                    </div>
                </div>
            </div>

            <hr width="90%" />

            <div className="lower-footer">
                <ul className="footer-nav">
                    <Link to={'/customer-resources'} className="footer-nav-list"> <FontAwesomeIcon icon={faCalculator}/> Logistics formula</Link>
                    <Link to={'/customer-resources'} className="footer-nav-list"> <FontAwesomeIcon icon={faUserAlt}/> Terms & Condition</Link>
                    <Link to={'/customer-resources'} className="footer-nav-list"> <FontAwesomeIcon icon={faGlobeAfrica}/> Past perfomance</Link>
                </ul>
            </div>
        </div>
    )
}

export default Footer
