import React, {useState} from 'react'
import './AboutTabs.css'
import AboutTabvission from './AboutTabsContent/AboutTabvission';
import AboutTabwhyus from './AboutTabsContent/AboutTabwhyus';
import AboutTabmission from './AboutTabsContent/AboutTabmission';

const AboutTabs = () => {

    const [tabType, setTabType] = useState('whyus')

    const switchTabs = () => {
        if (tabType === "vision") {
            return <AboutTabvission/>
        } 
        if (tabType === "whyus"){
            return <AboutTabwhyus/>
        } 
        if (tabType === "mission") {
            return <AboutTabmission/>
        } 
    }

    return (
        <div className="about-tabs">
            <div className="about-tabs-head">
                <button onClick={()=>setTabType('whyus')} className="about-tab-head-button">Why us</button><hr/>
                <button onClick={()=>setTabType('vision')} className="about-tab-head-button">Achievements</button><hr/>
                <button onClick={()=>setTabType('mission')} className="about-tab-head-button">Mission</button><hr/>
            </div>
            {
                switchTabs()
            }
        </div>
    )
}

export default AboutTabs
