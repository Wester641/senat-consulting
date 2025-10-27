import React from 'react';

import fe1 from '../../images/icon/1.png'
import fe2 from '../../images/icon/2.png'
import fe3 from '../../images/icon/3.png'

import './style.css'
import { featuresProps } from '../../utils/Props';


const Features = ( ) => {

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
                                <p>{featuresProps.title1}</p>
                                <h3>{featuresProps.text1}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="features-item-2">
                            <div className="features-icon">
                                <i className="fi"><img src={fe2} alt=""/></i>
                            </div>
                            <div className="features-content">
                                <p>{featuresProps.title2}</p>
                                <h3>{featuresProps.text2}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="features-item-2">
                            <div className="features-icon">
                                <i className="fi"><img src={fe3} alt=""/></i>
                            </div>
                            <div className="features-content">
                                <p>{featuresProps.title3}</p>
                                <h3>{featuresProps.text3}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     )
        
}

export default Features;
