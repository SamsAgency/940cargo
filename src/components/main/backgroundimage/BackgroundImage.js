import React from 'react'
import "./BackgroundImage.css";
import { Link } from 'react-router-dom';

const BackgroundImage = () => {
    return (
        <div className="background-image-section">
            <div className="background-image-section-content">
                <h2 className="background-image-content-h2">We are here for you</h2>
                <p  className="background-image-content-p">
                    At 940 air, we thrive on delivery of quality services. 
                    940 air cargo provides logistical solutions to local Exporters, Importers and International Organizations within Africa and other parts of the world. At 940 air cargo our Word is our Bond,
                </p>
                <Link to="/about">
                    <button className="background-img-button">
                        More
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default BackgroundImage
