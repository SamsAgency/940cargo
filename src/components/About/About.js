import React from 'react'
import './About.css'
import Mainnav from './../mainnav/Mainnav';
import Footer from './../main/footer/Footer';
import AboutBanner from './About banner/AboutBanner';
import Leftimgcontent from './../main/leftimgcontent/leftimgcontent';
import SomeQuotes from './SomeQuotes/SomeQuotes';
import AboutTabs from './AboutTabs/AboutTabs';

const About = () => {
    return (
        <div className="about">
            <Mainnav/>
            <AboutBanner/>
            <Leftimgcontent/>
            <SomeQuotes/>
            <AboutTabs/>
            <Footer/>
        </div>
    )
}

export default About
