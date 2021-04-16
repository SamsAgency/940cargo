import React from 'react'
import './Ground.css'
import Mainnav from './../mainnav/Mainnav';
import Footer from './../main/footer/Footer';
import GroundBanner from './Gound-banner/Groundbanner';
import Trucking from './Trucking/Trucking';
import Door from './Door/Door';
import Temperature from './Temperature/Temperature';
import Air from './Air/Air';
import Sea from './Sea/Sea';
import Aircharter from './AirCharter/Aircharter';

const Ground = () => {
    return (
        <div className="Ground">
            <Mainnav/>
            <GroundBanner/>
            <div className="ground-content">
                <Trucking/>
                <Door/>
                <Temperature/>
                <Air/>
                <Aircharter/>
                <Sea/>
                
            </div>
            <Footer/>
        </div>
    )
}

export default Ground
