import React, { forwardRef } from 'react';
import ContactForm from '../CommentForm';
import './style.css';


const ContactSection = forwardRef((props, ref) => {
    return (
        <div className="contact-area section-padding" ref={ref}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="contact-text">
                            <h2>Хотите связаться с нами?</h2>
                            <p>
                                Если у вас есть вопросы, требуется юридическая консультация
                                или вы хотите обсудить ваше дело — заполните форму, и мы свяжемся с вами в ближайшее время.
                            </p>
                            <div className="contact-sub">
                                <div className="contact-icon">
                                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                                </div>
                                <div className="contact-c">
                                    <h4>Наш адрес</h4>
                                    <span>г. Бишкек, ул. Ибраимова,103/1а Первый этаж</span>
                                </div>
                            </div>
                            <div className="contact-sub">
                                <div className="contact-icon">
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                </div>
                                <div className="contact-c">
                                    <h4>Телефон</h4>
                                    <span>+996 (707) 967-711</span>
                                </div>
                            </div>
                            <div className="contact-sub">
                                <div className="contact-icon">
                                    <i className="fa fa-envelope-o" aria-hidden="true"></i>
                                </div>
                                <div className="contact-c">
                                    <h4>Электронная почта</h4>
                                    <span>guljamal.muni@gmail.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-7 col-md-12 col-sm-12">
                        <div className="contact-content">
                            <div className="contact-form">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default ContactSection;
