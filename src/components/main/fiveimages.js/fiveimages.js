import React from 'react'
import './fiveimages.css'
import truck from "../../../assets/Website images-07.jpg"
import heli from "../../../assets/Website images-15.jpg"
import container from "../../../assets/container.jpg"
import shipping from "../../../assets/shipping.jpg"
import planes from "../../../assets/model-planes-1566822_1920.jpg"


const fiveimages = () => {
    return (
        <div className="five-images">
            <div className="five-images-left">
                <img className="five-images-left-img" src={container} alt="some text"/>
            </div>
            <div className="five-images-right">
                <div className='five-image-fragmentation'>
                    <img className="five-images-right-img" src={truck} alt="sometext"/>
                    <img className="five-images-right-img" src={heli} alt="sometext"/>
                </div>
                <div className='five-image-fragmentation'>
                    <img className="five-images-right-img" src={shipping} alt="sometext"/>
                    <img className="five-images-right-img" src={planes} alt="sometext"/>
                </div>
            </div>

        </div>
    )
}

export default fiveimages
