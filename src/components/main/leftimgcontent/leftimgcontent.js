import React from 'react'
import "./leftimgcontent.css"
import truck from '../../../assets/Website images-01.jpg'

const leftimgcontent = () => {
    return (
        <div className="leftimgcontent">
            <div className="the-left-img">
                <img className="content-section-image" src={truck} alt="shipping"/>
            </div>
            <div className="the-right-content" >
                <h2>About us</h2>
                <h3>What you need to know about us</h3>
                <p>
                    We 940 air cargo provides logistical solutions to local Exporters, Importers and International Organizations 
                    within Africa and other parts of the world. 
                    At 940 air Logistics our Word is our Bond, Results Delivered.
                </p>
                <p>
                    We subscribe to the philosophy that “Success breeds Success.” 
                    As our partners succeed, income is increased, value is created and the long term relationship strengthens. 
                    We have assisted numerous organizations within this region.
                </p>
                <p>
                    We have extensive contacts through out the region and posses the local language advantage to ensure that your 
                    business works smoothly.
                </p>
            </div>
        </div>
    )
}

export default leftimgcontent
