import React from 'react'
import './main.css'
import Footer from './footer/Footer';
import Banner from './banner/banner';
import Leftimgcontent from './leftimgcontent/leftimgcontent';
import Fiveimages from './fiveimages.js/fiveimages';
import BackgroundImage from './backgroundimage/BackgroundImage';
import Carousel from './carousel/Carousel';
import News from './breakingnews/News';
import RightImgContent from './rightimgcontent/RightImgContent';
import Mainnav from './../mainnav/Mainnav';

const main = () => {
    return (
        <div className="main_content">
            <Mainnav/>
            <Banner/>
            <Leftimgcontent/>
            <Fiveimages/>
            <Carousel/>
            <BackgroundImage/>
            <News/>
            <RightImgContent/>
            <Footer/>
        </div>
    )
}

export default main
