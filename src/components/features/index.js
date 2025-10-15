import React from 'react';

import fe1 from '../../images/icon/1.png'
import fe2 from '../../images/icon/2.png'
import fe3 from '../../images/icon/3.png'

import './style.css'

const Features = () => {

    return(
        <div className="features-area ">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 col-p">
                        <div className="features-item-2">
                            <div className="features-icon">
                                <i className="fi"><img src={fe1} alt=""/></i>
                            </div>
                            <div className="features-content">
                                <p>Book Your</p>
                                <h3>Appointment</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="features-item-2">
                            <div className="features-icon">
                                <i className="fi"><img src={fe2} alt=""/></i>
                            </div>
                            <div className="features-content">
                                <p>Get Free</p>
                                <h3>Expert Advice</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="features-item-2">
                            <div className="features-icon">
                                <i className="fi"><img src={fe3} alt=""/></i>
                            </div>
                            <div className="features-content">
                                <p>You Can Easily</p>
                                <h3>Join Our Team</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     )
        
}

export default Features;
