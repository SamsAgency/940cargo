import React from "react";
import "./AboutTabContent.css";
import achievement from  "../../../../assets/Partners Logos-01.jpg"
import client from "../../../../assets/Achievements (3).jpg"
import map from "../../../../assets/Achievements (1).jpg"

const AboutTabvission = () => {
  return (
    <div className="about-tab-contents">
      <h2 className="about-tab-contents-h2">Achievements</h2>
      <p className="about-tab-contents-p">
        Our achievements from previous projects speaks for itself where
        provision of logistics is concerned in Africa, in Kenya and relief work
        logistics. We ensure every detail is taken care of to ensure the task is
        not only accomplished but the accomplishment leaves all parties involved
        happy and satisfied.
      </p>
      <img className="about-partners-achievement" src={achievement} alt="our partners"/>
      <br/>
      <img className="about-partners-achievement" src={client} alt="our partners"/>
      <br/>
      <img className="about-partners-achievement" src={map} alt="our partners"/><br/><br/>
    </div>
  );
};

export default AboutTabvission;
