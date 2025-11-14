import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import fe1 from '../../images/icon/9.png';
import fe2 from '../../images/icon/2.png';
import fe3 from '../../images/icon/1.png';

import './style.css';

const PricingSection = (props) => {
    const { t } = useTranslation();

    return (
        <div className="pricing-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="section-title-1 text-center">
                            <h2>{t('pricingPage.sectionTitle')}</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {/* Начальный план */}
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="pricing-item">
                            <div className="pricing-header">
                                <div className="circuler-price">
                                    <i className="fi flaticon-courthouse"><img src={fe1} alt={t('pricingPage.starterPlan.title')} /></i>
                                </div>
                                <p>{t('pricingPage.starterPlan.title')}</p>
                            </div>
                            <div className="pricing-body">
                                <h2><sup>{t('pricingPage.currency')}</sup>{t('pricingPage.starterPlan.price')}<span>{t('pricingPage.perMonth')}</span></h2>
                                <p>{t('pricingPage.starterPlan.description')}</p>
                                <Link to="/practice" className="theme-btn">{t('pricingPage.orderButton')}</Link>
                            </div>
                        </div>
                    </div>

                    {/* Базовый план */}
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="pricing-item">
                            <div className="pricing-header">
                                <div className="circuler-price">
                                    <i className="fi flaticon-courthouse"><img src={fe3} alt={t('pricingPage.basicPlan.title')} /></i>
                                </div>
                                <p>{t('pricingPage.basicPlan.title')}</p>
                            </div>
                            <div className="pricing-body">
                                <h2><sup>{t('pricingPage.currency')}</sup>{t('pricingPage.basicPlan.price')}<span>{t('pricingPage.perMonth')}</span></h2>
                                <p>{t('pricingPage.basicPlan.description')}</p>
                                <Link to="/practice" className="theme-btn">{t('pricingPage.orderButton')}</Link>
                            </div>
                        </div>
                    </div>

                    {/* Продвинутый план */}
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="pricing-item">
                            <div className="pricing-header">
                                <div className="circuler-price">
                                    <i className="fi flaticon-courthouse"><img src={fe2} alt={t('pricingPage.advancedPlan.title')} /></i>
                                </div>
                                <p>{t('pricingPage.advancedPlan.title')}</p>
                            </div>
                            <div className="pricing-body">
                                <h2><sup>{t('pricingPage.currency')}</sup>{t('pricingPage.advancedPlan.price')}<span>{t('pricingPage.perMonth')}</span></h2>
                                <p>{t('pricingPage.advancedPlan.description')}</p>
                                <Link to="/practice" className="theme-btn">{t('pricingPage.orderButton')}</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default PricingSection;