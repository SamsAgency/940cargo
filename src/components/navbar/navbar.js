import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBlog, faFileAlt, faFileInvoice } from '@fortawesome/free-solid-svg-icons'

const navbar = () => {
    return (
        <div className="navbar">
            <h2 className="navbar-logo">NINE FORTY AIR</h2>
            <ul className="navbar-ul">
                <Link to='/blogs' className="navbar-li"><FontAwesomeIcon icon={faBlog} /> Blogs</Link>
                <Link to='/contact' className="navbar-li"> <FontAwesomeIcon icon={faFileAlt}/> Request a quote</Link>
                <Link to="/customer-resources" className="navbar-li"> <FontAwesomeIcon icon={faFileInvoice}/> Customer resources</Link>
            </ul>
        </div>
    )
}

export default navbar
