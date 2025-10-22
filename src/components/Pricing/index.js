import React from 'react';
import { Link } from 'react-router-dom';

import fe1 from '../../images/icon/9.png';
import fe2 from '../../images/icon/2.png';
import fe3 from '../../images/icon/1.png';

import './style.css';

const PricingSection = (props) => {

    return (
        <div className="pricing-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="section-title-1 text-center">
                            <h2>Наши услуги и цены</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {/* Начальный план */}
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="pricing-item">
                            <div className="pricing-header">
                                <div className="circuler-price">
                                    <i className="fi flaticon-courthouse"><img src={fe1} alt="Начальный план" /></i>
                                </div>
                                <p>Начальный план</p>
                            </div>
                            <div className="pricing-body">
                                <h2><sup>сом</sup>5000<span>/мес</span></h2>
                                <p>Консультация по базовым юридическим вопросам, подготовка стандартных документов и поддержка при несложных делах.</p>
                                <Link to="/practice" className="theme-btn">Заказать</Link>
                            </div>
                        </div>
                    </div>

                    {/* Базовый план */}
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="pricing-item">
                            <div className="pricing-header">
                                <div className="circuler-price">
                                    <i className="fi flaticon-courthouse"><img src={fe3} alt="Базовый план" /></i>
                                </div>
                                <p>Базовый план</p>
                            </div>
                            <div className="pricing-body">
                                <h2><sup>сом</sup>7000<span>/мес</span></h2>
                                <p>Расширенная юридическая поддержка, включая подготовку документов, представительство в судах первой инстанции и консультации по спорам.</p>
                                <Link to="/practice" className="theme-btn">Заказать</Link>
                            </div>
                        </div>
                    </div>

                    {/* Продвинутый план */}
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="pricing-item">
                            <div className="pricing-header">
                                <div className="circuler-price">
                                    <i className="fi flaticon-courthouse"><img src={fe2} alt="Продвинутый план" /></i>
                                </div>
                                <p>Продвинутый план</p>
                            </div>
                            <div className="pricing-body">
                                <h2><sup>сом</sup>10000<span>/мес</span></h2>
                                <p>Полный юридический пакет: защита интересов в сложных делах, судебные апелляции, комплексное сопровождение бизнеса и частных клиентов.</p>
                                <Link to="/practice" className="theme-btn">Заказать</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default PricingSection;
