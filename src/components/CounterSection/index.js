import React from 'react';
import con1 from '../../images/counter/img-1.png'
import './style.css'

const CounterSection = () => {

    return (
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
                                <p>Выигранных дел</p>
                            </div>
                            <div className="grid">
                                <div>
                                    <h2><span>86</span></h2>
                                </div>
                                <p>Довольных клиентов</p>
                            </div>
                            <div className="grid">
                                <div>
                                    <h2><span>2</span></h2>
                                </div>
                                <p>Опытных юристов</p>
                            </div>
                            <div className="grid">
                                <div>
                                    <h2><span>25</span>%</h2>
                                </div>
                                <p>Дел прекращено</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CounterSection;
