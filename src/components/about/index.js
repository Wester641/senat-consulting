import React from 'react';
import VideoModal from '../ModalVideo'
import { Link } from 'react-router-dom'
import abimg1 from '../../images/about/img-2.png'
import abimg2 from '../../images/about/img-1.png'

import './style.css'
import { aboutProps } from '../../utils/Props';

const AboutSection = () => {

    return (
        <div className="about-style-2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-12 col-m">
                        <div className="about-img">
                            <img src={abimg1} alt="" />
                            <VideoModal />
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="about-content">
                            <div className="section-title">
                                <h2>{aboutProps.title}</h2>
                            </div>
                            <p>
                                <h1 className="company-title">{aboutProps.companyTitle}</h1>
                                {aboutProps.description1}
                            </p>
                            <p>{aboutProps.description2}</p>
                            <div className="btns">
                                <div className="btn-style"><Link to={"/about"}>{aboutProps.buttonText}</Link></div>
                            </div>
                            <div className="signature">
                                <img src={abimg2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )

}

export default AboutSection;
