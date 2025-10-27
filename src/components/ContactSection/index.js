import React, { forwardRef } from 'react';
import ContactForm from '../CommentForm';
import './style.css';
import { contactProps } from '../../utils/Props';

const ContactSection = forwardRef((props, ref) => {
    return (
        <div className="contact-area section-padding" ref={ref}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="contact-text">
                            <h2>{contactProps.sectionTitle}</h2>
                            <p>{contactProps.description}</p>

                            <div className="contact-sub">
                                <div className="contact-icon">
                                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                                </div>
                                <div className="contact-c">
                                    <h4>{contactProps.addressTitle}</h4>
                                    <span>{contactProps.address}</span>
                                </div>
                            </div>

                            <div className="contact-sub">
                                <div className="contact-icon">
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                </div>
                                <div className="contact-c">
                                    <h4>{contactProps.phoneTitle}</h4>
                                    <span>{contactProps.phone}</span>
                                </div>
                            </div>

                            <div className="contact-sub">
                                <div className="contact-icon">
                                    <i className="fa fa-envelope-o" aria-hidden="true"></i>
                                </div>
                                <div className="contact-c">
                                    <h4>{contactProps.emailTitle}</h4>
                                    <span>{contactProps.email}</span>
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
