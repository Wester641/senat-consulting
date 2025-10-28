import React, { useState } from 'react';
import { useTranslation } from "react-i18next";

function ContactForm() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        events: '',
        notes: ''
    });

    const [error, setError] = useState({});

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (error[name]) {
            setError(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const newError = {};

        if (formData.name === '') {
            newError.name = t("contactForm.errorName");
        }
        if (formData.email === '') {
            newError.email = t("contactForm.errorEmail");
        }
        if (formData.number === '') {
            newError.number = t("contactForm.errorNumber");
        }
        if (formData.events === '') {
            newError.events = t("contactForm.errorEvents");
        }

        if (Object.keys(newError).length > 0) {
            setError(newError);
        } else {
            setFormData({
                name: '',
                email: '',
                number: '',
                events: '',
                notes: ''
            });
            setError({});
        }
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="contact-form form-style row">
                <div className="col-12 col-lg-6">
                    <input
                        type="text"
                        value={formData.name}
                        onChange={changeHandler}
                        placeholder={t("contactForm.namePlaceholder")}
                        id="fname"
                        name="name"
                    />
                    <p style={{ color: 'red' }}>{error.name}</p>
                </div>
                <div className="col col-lg-6">
                    <input
                        type="text"
                        placeholder={t("contactForm.phonePlaceholder")}
                        onChange={changeHandler}
                        value={formData.number}
                        id="number"
                        name="number"
                    />
                    <p style={{ color: 'red' }}>{error.number}</p>
                </div>
                <div className="col-12 col-lg-6">
                    <input
                        type="email"
                        placeholder={t("contactForm.emailPlaceholder")}
                        onChange={changeHandler}
                        value={formData.email}
                        id="email"
                        name="email"
                    />
                    <p style={{ color: 'red' }}>{error.email}</p>
                </div>
                <div className="col col-lg-6">
                    <select
                        className="form-control"
                        onChange={changeHandler}
                        value={formData.events}
                        name="events"
                    >
                        <option disabled value="">{t("contactForm.eventPlaceholder")}</option>
                        <option value="1">{t("contactForm.event1")}</option>
                        <option value="2">{t("contactForm.event2")}</option>
                        <option value="3">{t("contactForm.event3")}</option>
                        <option value="4">{t("contactForm.event4")}</option>
                        <option value="5">{t("contactForm.event5")}</option>
                    </select>
                    <p style={{ color: 'red' }}>{error.events}</p>
                </div>
                <div className="col-12 col-sm-12">
                    <textarea
                        className="contact-textarea"
                        value={formData.notes}
                        onChange={changeHandler}
                        placeholder={t("contactForm.commentsPlaceholder")}
                        name="notes"
                    ></textarea>
                    <p style={{ color: 'red' }}>{error.notes ? error.notes : ''}</p>
                </div>
                <div className="col-12">
                    <button type="submit" className="theme-btn">{t("contactForm.submitButton")}</button>
                </div>
            </div>
        </form>
    );
}

export default ContactForm;
