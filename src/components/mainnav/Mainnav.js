import React from 'react'
import './Mainnav.css'
import {NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faHeadset, faHome,  faShippingFast } from "@fortawesome/free-solid-svg-icons";
import LOGO from '../../assets/940 air cargo logo.png'

const Mainnav = () => {
    return (
        <div className="main-nav">
            <div className="main-nav-logo">
                <NavLink to="/">
                 <img className="main-nav-logo-img" src={LOGO} alt="940 air logo"/>
                </NavLink>
            </div>
            <ul className="main-nav-ul">
                <NavLink to ="/" className="main-nav-li"><FontAwesomeIcon icon={faHome} /> Home</NavLink><hr/>
                <NavLink to ="/about" className="main-nav-li"> <FontAwesomeIcon icon={faAddressCard} /> About</NavLink><hr/>
                <NavLink to ="/services" className="main-nav-li"> <FontAwesomeIcon icon={faShippingFast} /> Services</NavLink><hr/>
                <NavLink to ="/contact" className="main-nav-li"> <FontAwesomeIcon icon={faHeadset} /> Contact</NavLink> <hr/>
            </ul>
            
        </div>
    )
}

export default Mainnav
