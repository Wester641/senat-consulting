import React from 'react';

import {Link} from 'react-router-dom'

import fe1 from '../../images/icon/10.png'
import fe2 from '../../images/icon/2.png'
import fe3 from '../../images/icon/7.png'

import './style.css'

const PricingSection = (props) => {

    return(
        <div className="pricing-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="section-title-1 text-center">
                            <h2>Pricing Table</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="pricing-item">
                            <div className="pricing-header">
                                <div className="circuler-price">
                                    <i className="fi flaticon-courthouse"> <img src={fe1} alt=""/></i>
                                </div>
                                <p>Started Plan</p>
                            </div>
                            <div className="pricing-body">
                                <h2><sup>$</sup>120<span>month</span></h2>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                <Link to="/practice" className="theme-btn">Order Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="pricing-item">
                            <div className="pricing-header">
                                <div className="circuler-price">
                                    <i className="fi flaticon-courthouse"> <img src={fe3} alt=""/></i>
                                </div>
                                <p>Basic Plan</p>
                            </div>
                            <div className="pricing-body">
                                <h2><sup>$</sup>150<span>month</span></h2>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                <Link to="/practice" className="theme-btn">Order Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="pricing-item">
                            <div className="pricing-header">
                                <div className="circuler-price">
                                    <i className="fi flaticon-courthouse"> <img src={fe2} alt=""/></i>
                                </div>
                                <p>Advanced Plan</p>
                            </div>
                            <div className="pricing-body">
                                <h2><sup>$</sup>180<span>month</span></h2>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                <Link to="/practice" className="theme-btn">Order Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
     )
        
}

export default PricingSection;
