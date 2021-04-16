import React from 'react'
import harborOne from "../../../assets/harbor.jpg"
import harborTwo from "../../../assets/harbor1.jpg"
import harborThree from "../../../assets/harbor2.jpg"
import theTruck from "../../../assets/truck.jpg"
import "./News.css"

const News = () => {
    return (
        <div className="main-news">
            <div className="main-news-content">
                <h2 className="main-news-content-h2">Our Articles</h2>
                <p className="main-news-content-p">In Vitro Fertilization (IVF) is the technique used by patients in Assisted Reproduction. 
                    Patients that go on this road of the IVF technique its mostly as a last option and its therefore an invaluable solution.
                    Gametes are transferred or shipped between continents the specialized clinics enlist the services of professional 
                    logistics service providers to ensure that the gametes are successfully transferred.
                    While the success of the IVF procedure is pegged on a lot of variables, logistics is one accept that has to be right from the onset.
                    A logistician has to have an elaborate & meticulous plan that leaves no room for error or assumptions; 
                    its both an art and science that has to be understood. Its an art because your communication, negotiation skills are 
                    at test with people, bureaucratic institutions, choice of equipment,  airlines & cargo handlers. 
                    The science is the ability to maintain the temperature -180'C 's while on transit across continents.
                    </p>
            </div>
            <div className="main-news-content-body">
                <div className="main-news-content-body-left">
                    <img className="main-news-content-body-left-img" src={theTruck} alt="logistics truck"/>
                    
                    <div className="main-news-content-body-contents">
                        <h4 className="main-news-content-body-left-h4">NEWS ARTICLE</h4>
                        <h2 className="main-news-content-body-left-h2">Offer and Acceptance </h2>
                        <p className="main-news-content-body-left-date">20-02-2021</p>
                        <p className="main-news-content-body-left-p">
                            1.2 Pricing and booking information provided via the quotation does not constitute binding 
                            offers on the part of Nine Forty Air Cargo Limited. 1.3 Quotes are the result of ad-hoc 
                            calculations based on the Services requested by Customer in accordance with the Shipment information 
                            provided by Customer. The pricing shown on a quote is related to the particularly requested service package 
                            and is valid for the period stated during the quoting process. A quote provided by Nine Forty Air Cargo Limited 
                            does not include confirmation of details such as but not limited to a particular traffic routing and the use of 
                            particular subcontractors and/or agents, nor...
                        </p>
                    </div>
                </div>
                <div className="main-news-content-body-right">
                    <div className="main-news-content-body-right-cards">
                        <hr/>
                        <div className="main-news-content-body-right-single-card">
                            <img className="main-news-content-body-right-single-card-img" 
                                src={harborOne} alt="harbor one"/>
                            <div className="main-news-content-body-right-single-card-content">
                                <h2 className="main-news-content-body-right-single-card-content-h2">
                                    TRANSPORTATION AND HINDRANCES
                                </h2>
                                <p className="main-news-content-body-right-single-card-content-date">
                                    20-03-2021
                                </p>
                                <p className="main-news-content-body-right-single-card-content-p">
                                    Nine Forty Air Cargo Limited shall carry out its Services with skill 
                                    and care and in accordance with Customer’s instructions as agreed. If Customer’s instructions...
                                </p>
                            </div>
                        </div>

                        <hr/>
                        <div className="main-news-content-body-right-single-card">
                            <img className="main-news-content-body-right-single-card-img" 
                                src={harborTwo} alt="harbor one"/>
                            <div className="main-news-content-body-right-single-card-content">
                                <h2 className="main-news-content-body-right-single-card-content-h2">
                                    DEFINITIONS 
                                </h2>
                                <p className="main-news-content-body-right-single-card-content-date">
                                    21-03-2021
                                </p>
                                <p className="main-news-content-body-right-single-card-content-p">
                                    Affiliate(s) means (1) any corporation or business entity fifty percent (50%) 
                                    or more of the voting stock or voting equity interests of which are owned directly or indirectly by a party;
                                    ...
                                </p>
                            </div>
                        </div>

                        <hr/>
                        <div className="main-news-content-body-right-single-card">
                            <img className="main-news-content-body-right-single-card-img" 
                                src={harborThree} alt="harbor one"/>
                            <div className="main-news-content-body-right-single-card-content">
                                <h2 className="main-news-content-body-right-single-card-content-h2">
                                    Basis of Liability 
                                </h2>
                                <p className="main-news-content-body-right-single-card-content-date">
                                    22-03-2021
                                </p>
                                <p className="main-news-content-body-right-single-card-content-p">
                                    Nine Forty Air Cargo Limited’s liability is based on its general obligation to 
                                    perform its Services in a professional manner and with reasonable skill and care. No Liability for Third Parties 
                                    ...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="main-news-button-section">
                <a href="https://www.linkedin.com/company/940-air-cargo/about/" target="_blank" rel="noreferrer">
                    <button className="news-section-button"> 
                        See all articles
                    </button>
                </a> 
            </div>
        </div>
    )
    
}

export default News
