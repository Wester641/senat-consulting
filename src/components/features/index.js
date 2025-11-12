import React from 'react';

import fe1 from '../../images/icon/1.png'
import fe2 from '../../images/icon/2.png'
import fe3 from '../../images/icon/3.png'
import { useTranslation } from "react-i18next";
import video1 from "../../images/background/2.mp4";

import './style.css'

const Features = () => {
const { t } = useTranslation();
    

    return(
        <div className="features-area">
            <div className="video-background">
                <video autoPlay loop muted playsInline>
                    <source src={video1} type="video/mp4" />
                </video>
                <div className="video-overlay"></div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 col-p">
                        <div className="features-item-2">
                            <div className="features-icon">
                                <i className="fi"><img src={fe1} alt=""/></i>
                            </div>
                            <div className="features-content">
                              <p>{t("features.bookMeetingTitle")}</p>
                              <h3>{t("features.bookMeetingText")}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="features-item-2">
                            <div className="features-icon">
                                <i className="fi"><img src={fe2} alt=""/></i>
                            </div>
                            <div className="features-content">
                               <p>{t("features.getAdviceTitle")}</p>
                               <h3>{t("features.getAdviceText")}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="features-item-2">
                            <div className="features-icon">
                                <i className="fi"><img src={fe3} alt=""/></i>
                            </div>
                            <div className="features-content">
                                  <p>{t("features.easyStartTitle")}</p>
                                  <h3>{t("features.easyStartText")}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     )
        
}

export default Features;