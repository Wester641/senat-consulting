import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useTranslation } from "react-i18next";

function ContactForm2() {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
        setTimeout(() => {
            window.scrollTo({
                top: 200,
                left: 0,
                behavior: "smooth",
            }
            );
        }, 500);
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        adress: '',
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
            newError.name = t("CommentForm2.errorName");
        }
        if (formData.email === '') {
            newError.email = t("CommentForm2.errorEmail");
        }
        if (formData.number === '') {
            newError.number = t("CommentForm2.errorNumber");
        }
        if (formData.adress === '') {
            newError.adress = t("CommentForm2.errorAddress");
        }
        if (formData.notes === '') {
            newError.notes = t("CommentForm2.errorMessage");
        }

        if (Object.keys(newError).length > 0) {
            setError(newError);
        } else {
            setFormData({
                name: '',
                email: '',
                number: '',
                adress: '',
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
                        placeholder={t("CommentForm2.namePlaceholder")}
                        id="fname"
                        name="name"
                    />
                    <p style={{ color: 'red' }}>{error.name ? error.name : ''}</p>
                </div>
                <div className="col-12 col-lg-6">
                    <input
                        type="email"
                        placeholder={t("CommentForm2.emailPlaceholder")}
                        onChange={changeHandler}
                        value={formData.email}
                        id="email"
                        name="email"
                    />
                    <p style={{ color: 'red' }}>{error.email ? error.email : ''}</p>
                </div>
                <div className="col col-lg-6">
                    <input
                        type="text"
                        placeholder={t("CommentForm2.phonePlaceholder")}
                        onChange={changeHandler}
                        value={formData.number}
                        id="number"
                        name="number"
                    />
                    <p style={{ color: 'red' }}>{error.number ? error.number : ''}</p>
                </div>
                <div className="col-12 col-lg-6">
                    <input
                        type="text"
                        placeholder={t("CommentForm2.addressPlaceholder")}
                        onChange={changeHandler}
                        value={formData.adress}
                        id="adress"
                        name="adress"
                    />
                    <p style={{ color: 'red' }}>{error.adress ? error.adress : ''}</p>
                </div>
                <div className="col-12 col-sm-12">
                    <textarea
                        className="contact-textarea"
                        value={formData.notes}
                        onChange={changeHandler}
                        placeholder={t("CommentForm2.messagePlaceholder")}
                        name="notes"
                    ></textarea>
                    <p style={{ color: 'red' }}>{error.notes ? error.notes : ''}</p>
                </div>
                <div className="col-12">
                    <button type="submit" className="theme-btn">{t("CommentForm2.submitButton")}</button>
                </div>
            </div>
        </form>
    );
}

export default ContactForm2;