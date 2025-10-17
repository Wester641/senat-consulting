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
                                <p>Забронируйте свою</p>
                                <h3>Встречу</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="features-item-2">
                            <div className="features-icon">
                                <i className="fi"><img src={fe2} alt=""/></i>
                            </div>
                            <div className="features-content">
                                <p>Получите бесплатно</p>
                                <h3>Советы эксперта</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="features-item-2">
                            <div className="features-icon">
                                <i className="fi"><img src={fe3} alt=""/></i>
                            </div>
                            <div className="features-content">
                                <p>Легко начать</p>
                                <h3>С нами</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     )
        
}

export default Features;
