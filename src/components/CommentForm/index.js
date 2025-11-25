import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import "./style1.css";

function ContactForm() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service_type: '',
        comment: ''
    });

    const [serviceTypes, setServiceTypes] = useState([]);
    const [error, setError] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const serviceTypeMapping = {
        '1': 'court_disputes',
        '2': 'business_registration',
        '3': 'contracts',
        '4': 'business_support',
        '5': 'project_organization',
        '6': 'personal_injury'
    };

    useEffect(() => {
        fetchServiceTypes();
    }, []);

    const fetchServiceTypes = async () => {
        try {
            console.log('Fetching service types...');
            const response = await fetch('https://api.senatconsulting.com/api/service-types/');
            console.log('Service types response status:', response.status);
            
            if (response.ok) {
                const data = await response.json();
                console.log('Service types data:', data);
                setServiceTypes(data);
            } else {
                console.error('Failed to fetch service types:', response.status, response.statusText);
            }
        } catch (err) {
            console.error('Error fetching service types:', err);
        }
    };

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
        if (submitStatus) {
            setSubmitStatus(null);
        }
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        const newError = {};

        if (formData.name.trim() === '') {
            newError.name = t("contactForm.errorName");
        }
        if (formData.email.trim() === '') {
            newError.email = t("contactForm.errorEmail");
        }
        if (formData.phone.trim() === '') {
            newError.phone = t("contactForm.errorNumber");
        }
        if (formData.service_type === '') {
            newError.service_type = t("contactForm.errorEvents");
        }

        if (Object.keys(newError).length > 0) {
            setError(newError);
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch('https://api.senatconsulting.com/api/consultation/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    service_type: serviceTypeMapping[formData.service_type] || formData.service_type,
                    comment: formData.comment
                })
            });

            if (response.ok) {
                const data = await response.json();
                setSubmitStatus({
                    type: 'success',
                    message: t("contactForm.successMessage") || 'Ваша заявка успешно отправлена!'
                });
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    service_type: '',
                    comment: ''
                });
                setError({});
            } else {
                const errorData = await response.json();
                setSubmitStatus({
                    type: 'error',
                    message: t("contactForm.errorMessage") || 'Произошла ошибка при отправке. Попробуйте позже.'
                });
            }
        } catch (err) {
            console.error('Submit error:', err);
            setSubmitStatus({
                type: 'error',
                message: t("contactForm.errorMessage") || 'Произошла ошибка при отправке. Попробуйте позже.'
            });
        } finally {
            setIsSubmitting(false);
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
                        disabled={isSubmitting}
                        style={{ backgroundColor: '#EBEBEB' }}
                    />
                    {error.name && <p style={{ color: 'red' }}>{error.name}</p>}
                </div>
                <div className="col col-lg-6">
                    <input
                        type="text"
                        placeholder={t("contactForm.phonePlaceholder")}
                        onChange={changeHandler}
                        value={formData.phone}
                        id="phone"
                        name="phone"
                        disabled={isSubmitting}
                        style={{ backgroundColor: '#EBEBEB' }}
                    />
                    {error.phone && <p style={{ color: 'red' }}>{error.phone}</p>}
                </div>
                <div className="col-12 col-lg-6">
                    <input
                        type="email"
                        placeholder={t("contactForm.emailPlaceholder")}
                        onChange={changeHandler}
                        value={formData.email}
                        id="email"
                        name="email"
                        disabled={isSubmitting}
                        style={{ backgroundColor: '#EBEBEB' }}
                    />
                    {error.email && <p style={{ color: 'red' }}>{error.email}</p>}
                </div>
                <div className="col col-lg-6">
                    <select
                        className="form-control"
                        onChange={changeHandler}
                        value={formData.service_type}
                        name="service_type"
                        disabled={isSubmitting}
                        style={{ backgroundColor: '#EBEBEB' }}
                    >
                        <option disabled value="">{t("contactForm.eventPlaceholder")}</option>
                        <option value="1">{t("contactForm.event1")}</option>
                        <option value="2">{t("contactForm.event2")}</option>
                        <option value="3">{t("contactForm.event3")}</option>
                        <option value="4">{t("contactForm.event4")}</option>
                        <option value="5">{t("contactForm.event5")}</option>
                        <option value="6">{t("contactForm.event6") || "Личная травма"}</option>
                    </select>
                    {error.service_type && <p style={{ color: 'red' }}>{error.service_type}</p>}
                </div>
                <div className="col-12 col-sm-12">
                    <textarea
                        className="contact-textarea"
                        value={formData.comment}
                        onChange={changeHandler}
                        placeholder={t("contactForm.commentsPlaceholder")}
                        name="comment"
                        disabled={isSubmitting}
                        style={{ backgroundColor: '#EBEBEB' }}
                    ></textarea>
                </div>
                
                {submitStatus && (
                    <div className="col-12">
                        <div style={{
                            padding: '10px',
                            marginBottom: '10px',
                            borderRadius: '4px',
                            backgroundColor: submitStatus.type === 'success' ? '#d4edda' : '#f8d7da',
                            color: submitStatus.type === 'success' ? '#155724' : '#721c24',
                            border: `1px solid ${submitStatus.type === 'success' ? '#c3e6cb' : '#f5c6cb'}`
                        }}>
                            {submitStatus.message}
                        </div>
                    </div>
                )}

                <div className="col-12">
                    <button 
                        type="submit" 
                        className="theme-btn"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (t("contactForm.submittingButton") || 'Отправка...') : t("contactForm.submitButton")}
                    </button>
                </div>
            </div>
        </form>
    );
}

export default ContactForm;