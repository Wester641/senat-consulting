import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../../images/logo/logo.png';
import './style.css';

const FooterSection = () => {
    const { t } = useTranslation();
    return (
        <div className="footer-area">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-logo">
                                <Link to="/"><img src={logo} alt="" /></Link>
                            </div>
                            <p>{t('slide1.text')}</p>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-link">
                                <h3>{t('navHome')}</h3>
                                <ul>
                                    <li><Link to="/">{t('navHome')}</Link></li>
                                    <li><Link to="/practice">{t('navServices')}</Link></li>
                                    <li><Link to="/about">{t('navAbout')}</Link></li>
                                    <li><Link to="/case-stadies">{t('navComments')}</Link></li>
                                    <li><Link to="/blog-fullwidth">{t('navBlog')}</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-practice bd-0">
                                <h3>{t('navServices')}</h3>
                                <ul>
                                    <li><Link to="/practice-details/1">{t('navSubServices1')}</Link></li>
                                    <li><Link to="/practice-details/2">{t('navSubServices2')}</Link></li>
                                    <li><Link to="/practice-details/3">{t('navSubServices3')}</Link></li>
                                    <li><Link to="/practice-details/4">{t('navSubServices4')}</Link></li>
                                    <li><Link to="/practice-details/5">{t('navSubServices5')}</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="widget newsletter-widget">
                                <div className="widget-title">
                                    <h3>{t('newsletter.title')}</h3>
                                </div>
                                <p>{t('newsletter.text')}</p>
                                <form>
                                    <div className="input-1">
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder={t('newsletter.placeholder')}
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
                                    {t('footerPrivacy')} | © 2025{' '}
                                    <Link to="/">Senat Consulting</Link>. {t('footerRights')}
                                </span>
                            </div>
                            <div className="col-lg-6 col-md-4 col-sm-3 col-12">
                                <ul className="d-flex">
                                    <li>
                                        <Link to="/"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><i className="fa fa-linkedin" aria-hidden="true"></i></Link>
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
