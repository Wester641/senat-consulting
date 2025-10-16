import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo/logo.png';
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
                            <p>
                                Наша юридическая команда помогает клиентам решать сложные споры, защищать права и достигать успеха в делах любой сложности.
                            </p>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-link">
                                <h3>Навигация</h3>
                                <ul>
                                    <li><Link to="/">Главная</Link></li>
                                    <li><Link to="/practice">Услуги</Link></li>
                                    <li><Link to="/">Наша команда</Link></li>
                                    <li><Link to="/case-stadies">Отзывы</Link></li>
                                    <li><Link to="/blog-fullwidth">Новости</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-practice bd-0">
                                <h3>Услуги</h3>
                                <ul>
                                    <li><Link to="/">Суды и споры</Link></li>
                                    <li><Link to="/">Регистрация бизнеса</Link></li>
                                    <li><Link to="/">Договоры</Link></li>
                                    <li><Link to="/">Сопровождение бизнеса</Link></li>
                                    <li><Link to="/">Организация проектов и фестивалей</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="widget newsletter-widget">
                                <div className="widget-title">
                                    <h3>Подписка на новости</h3>
                                </div>
                                <p>
                                    Подпишитесь на нашу рассылку, чтобы получать актуальные юридические новости и советы от наших экспертов.
                                </p>
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
                                    Политика конфиденциальности | © 2025{' '}
                                    <Link to="/">Kazi</Link>. Все права защищены
                                </span>
                            </div>
                            <div className="col-lg-6 col-md-4 col-sm-3 col-12">
                                <ul className="d-flex">
                                    <li>
                                        <Link to="/">
                                            <i className="fa fa-facebook" aria-hidden="true"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <i className="fa fa-twitter" aria-hidden="true"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                                        </Link>
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
