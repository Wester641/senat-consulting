import React from 'react';
import ContactForm2 from '../CommentForm2';
import address from '../../images/about/address.jpg';
import './style.css';

const Contactpage = () => {
    return (
        <div className="contact-page-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-12">
                        <div className="contact-page-item">
                            <h2>Наши контакты</h2>
                            <p>Мы предоставляем профессиональные юридические услуги для физических лиц и организаций. Наша команда опытных юристов готова помочь вам с консультациями, подготовкой документов и представлением интересов в суде. Свяжитесь с нами любым удобным способом и получите квалифицированную помощь в решении ваших правовых вопросов.</p>
                            <div className="adress">
                                <h3>Адрес</h3>
                                <span>г. Бишкек, ул. Ибраимова,103/1а Первый этаж</span>
                            </div>
                            <div className="phone">
                                <h3>Номер телефона</h3>
                                <span>+996 (707) 967-711</span>
                                <span>+996 (707) 967-711</span>
                            </div>
                            <div className="email">
                                <h3>Электронная Почта</h3>
                                <span>guljamal.muni@gmail.com</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12">
                        <div className="contact-area contact-area-2 contact-area-3">
                            <h2>Форма быстрого контакта</h2>
                            <ContactForm2 />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="contact-map">
                            <div className="map-links">
                                <a 
                                    href="http://2gis.kg/bishkek/firm/70000001101156993/center/74.61802482604982,42.879077532561865/zoom/16?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=bigMap" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="map-link-btn"
                                >
                                    Посмотреть на карте Бишкека
                                </a>
                                
                                <a 
                                    href="http://2gis.kg/bishkek/center/74.61802,42.878519/zoom/16/routeTab/rsType/bus/to/74.61802,42.878519╎Intellect IT & Business College?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=route" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="map-link-btn route-btn"
                                >
                                    Найти проезд до Intellect IT & Business College - Senat Consulting
                                </a>
                            </div>
                            
                            <h3>Улица Ибраимова, 103/1а, Бишкек</h3>
                            <a
                                href="https://2gis.kg/bishkek/geo/70030076493877457/74.618063%2C42.878776?m=74.618691%2C42.878209%2F18.24"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={address} width="100%" height="500px" alt="Адрес" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Contactpage;
