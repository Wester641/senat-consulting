import React, { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import ContactForm from '../CommentForm';
import './style.css';


const ContactSection = forwardRef((props, ref) => {
    const { t } = useTranslation();

    return (
        <div className="contact-area section-padding" ref={ref}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="contact-text">
                            <h2>{t("contactSection.title")}</h2>
                            <p>
                               {t("contactSection.text")}
                            </p>
                            <div className="contact-sub">
                                <div className="contact-icon">
                                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                                </div>
                                <div className="contact-c">
                                    <h4>{t("contactSection.addressLabel")}</h4>
                                    <span>{t("contactSection.address")}</span>
                                </div>
                            </div>

                            <div className="contact-sub">
                                <div className="contact-icon">
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                </div>
                                <div className="contact-c">
                                    <h4>{t("contactSection.phoneLabel")}</h4>
                                    <span>{t("contactSection.phone")}</span>                                  
                                </div>
                            </div>

                            <div className="contact-sub">
                                <div className="contact-icon">
                                    <i className="fa fa-envelope-o" aria-hidden="true"></i>
                                </div>
                                <div className="contact-c">
                                    <h4>{t("contactSection.emailLabel")}</h4>
                                    <span>{t("contactSection.email")}</span>
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
