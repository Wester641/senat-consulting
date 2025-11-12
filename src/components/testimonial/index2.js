import React from 'react';
import './style.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContactForm3 from '../CommentForm3';
import { useTranslation } from "react-i18next";

const Testimonial2 = () => {
    const { t } = useTranslation();
    
    return (
        <div className="container">
            <div className="col-lg-12 col-md-12">
                <div className="contact-area contact-area-2 contact-area-3">
                    <div className="section-title-1 text-center">
                        <h2>{t("CommentForm3.formTitle")}</h2>
                    </div>
                    <ContactForm3 />
                </div>
            </div>
        </div>
    );
};

export default Testimonial2;