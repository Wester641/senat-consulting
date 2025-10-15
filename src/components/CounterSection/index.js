import React from 'react';
import con1 from '../../images/counter/img-1.png'
import './style.css'

const CounterSection = () => {

    return(
        <div className="counter-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="counter-img">
                            <img src={con1} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="counter-grids">
                            <div className="grid">
                                <div>
                                    <h2><span>95</span>%</h2>
                                </div>
                                <p>Cases Won</p>
                            </div>
                            <div className="grid">
                                <div>
                                    <h2><span>863</span></h2>
                                </div>
                                <p>Trusted Client</p>
                            </div>
                            <div className="grid">
                                <div>
                                    <h2><span>126</span>+</h2>
                                </div>
                                <p>Dedicated Lawyer</p>
                            </div>
                            <div className="grid">
                                <div>
                                    <h2><span>25</span>%</h2>
                                </div>
                                <p>Case Dismissed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     )
        
}

export default CounterSection;
