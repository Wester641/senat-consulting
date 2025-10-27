import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo/logo.png';
import { footerTexts } from '../../utils/Props';
import './style.css';

const FooterSection = () => {
    return (
        <div className="footer-area">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-logo">
                                <Link to="/"><img src={logo} alt="" /></Link>
                            </div>
                            <p>{footerTexts.logoDescription}</p>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-link">
                                <h3>{footerTexts.navigationTitle}</h3>
                                <ul>
                                    <li><Link to="/">{footerTexts.navigationLink1}</Link></li>
                                    <li><Link to="/practice">{footerTexts.navigationLink2}</Link></li>
                                    <li><Link to="/">{footerTexts.navigationLink3}</Link></li>
                                    <li><Link to="/case-stadies">{footerTexts.navigationLink4}</Link></li>
                                    <li><Link to="/blog-fullwidth">{footerTexts.navigationLink5}</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-practice bd-0">
                                <h3>{footerTexts.servicesTitle}</h3>
                                <ul>
                                    <li><Link to="/">{footerTexts.service1}</Link></li>
                                    <li><Link to="/">{footerTexts.service2}</Link></li>
                                    <li><Link to="/">{footerTexts.service3}</Link></li>
                                    <li><Link to="/">{footerTexts.service4}</Link></li>
                                    <li><Link to="/">{footerTexts.service5}</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="widget newsletter-widget">
                                <div className="widget-title">
                                    <h3>{footerTexts.newsletterTitle}</h3>
                                </div>
                                <p>{footerTexts.newsletterDescription}</p>
                                <form>
                                    <div className="input-1">
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Ваш email *"
                                            required
                                        />
                                    </div>
                                    <div className="submit clearfix">
                                        <button type="submit">
                                            <i className="fa fa-envelope-o" aria-hidden="true"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom-content">
                        <div className="row">
                            <div className="col-lg-6 col-md-8 col-sm-9 col-12">
                                <span>
                                    {footerTexts.copyrightText}{' '}
                                    <Link to="/">{footerTexts.companyName}</Link>. Все права защищены
                                </span>
                            </div>
                            <div className="col-lg-6 col-md-4 col-sm-3 col-12">
                                <ul className="d-flex">
                                    <li>
                                        <Link to="/"><i className={`fa fa-${footerTexts.socialFacebook}`} aria-hidden="true"></i></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><i className={`fa fa-${footerTexts.socialTwitter}`} aria-hidden="true"></i></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><i className={`fa fa-${footerTexts.socialLinkedin}`} aria-hidden="true"></i></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterSection;
