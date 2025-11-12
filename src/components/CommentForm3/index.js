import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from "react-i18next";
import { supabase } from '../../integrationSupabase/client';

function ContactForm3() {
    const { t } = useTranslation();
    const [statusMessage, setStatusMessage] = useState('');
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm({
        defaultValues: {
            name: '',
            phoneNumber: '',
            companyName: '',
            notes: ''
        },
        mode: 'onBlur'
    });

    const onSubmit = async (formData) => {
        setStatusMessage(t('CommentForm3.sending', { defaultValue: 'Отправка...' }));

        const commentData = {
            name: formData.name,
            phone_number: formData.phoneNumber,
            company_name: formData.companyName,
            notes: formData.notes
        };

        const { data, error } = await supabase
            .from('comments')
            .insert([commentData])
            .select();

        if (error) {
            console.error("Ошибка Supabase:", error);
            setStatusMessage(`${t('CommentForm3.error', { defaultValue: 'Ошибка отправки:' })} ${error.message}`);
        } else {
            console.log("Данные Supabase успешно вставлены:", data);
            setStatusMessage(t('CommentForm3.success', { defaultValue: 'Сообщение успешно отправлено!' }));
            reset();
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="contact-form form-style row">

                <div className="col-12 col-sm-12">
                    <textarea
                        className="contact-textarea"
                        placeholder={t('CommentForm3.messagePlaceholder', { defaultValue: 'Сообщение' })}
                        {...register('notes', {
                            required: t('CommentForm3.messageRequired', { defaultValue: 'Сообщение обязательно' }),
                            maxLength: {
                                value: 1000,
                                message: t('CommentForm3.messageMaxLength', { defaultValue: 'Сообщение не должно быть более 1000 символов' })
                            }
                        })}
                    ></textarea>
                    {errors.notes && <span style={{ color: 'red', fontSize: '12px' }}>{errors.notes.message}</span>}
                </div>

                <div className="col-12 col-lg-12">
                    <input
                        type="text"
                        placeholder={t('CommentForm3.companyPlaceholder', { defaultValue: 'Название вашей компании' })}
                        id="company_name"
                        {...register('companyName', {
                            maxLength: {
                                value: 150,
                                message: t('CommentForm3.companyMaxLength', { defaultValue: 'Название компании не должно быть более 150 символов' })
                            }
                        })}
                    />
                    {errors.companyName && <span style={{ color: 'red', fontSize: '12px' }}>{errors.companyName.message}</span>}
                </div>

                <div className="col-6 col-lg-6">
                    <input
                        type="text"
                        placeholder={t('CommentForm3.namePlaceholder', { defaultValue: 'Ваше имя*' })}
                        id="fname"
                        {...register('name', {
                            required: t('CommentForm3.nameRequired', { defaultValue: 'Имя обязательно' }),
                            minLength: {
                                value: 2,
                                message: t('CommentForm3.nameMinLength', { defaultValue: 'Имя должно быть минимум 2 символа' })
                            },
                            maxLength: {
                                value: 100,
                                message: t('CommentForm3.nameMaxLength', { defaultValue: 'Имя не должно быть более 100 символов' })
                            },
                            pattern: {
                                value: /^[а-яА-ЯёЁa-zA-Z\s'-]+$/,
                                message: t('CommentForm3.namePattern', { defaultValue: 'Имя может содержать только буквы, пробелы и дефисы' })
                            }
                        })}
                    />
                    {errors.name && <span style={{ color: 'red', fontSize: '12px' }}>{errors.name.message}</span>}
                </div>

                <div className="col col-lg-6">
                    <input
                        type="tel"
                        placeholder={t('CommentForm3.phonePlaceholder', { defaultValue: 'Номер телефона' })}
                        id="phone_number"
                        {...register('phoneNumber', {
                            required: t('CommentForm3.phoneRequired', { defaultValue: 'Номер телефона обязателен' }),
                            pattern: {
                                value: /^[\d\s\-\+\(\)]+$/,
                                message: t('CommentForm3.phonePattern', { defaultValue: 'Неверный формат телефона' })
                            },
                            minLength: {
                                value: 10,
                                message: t('CommentForm3.phoneMinLength', { defaultValue: 'Телефон должен быть минимум 10 символов' })
                            }
                        })}
                    />
                    {errors.phoneNumber && <span style={{ color: 'red', fontSize: '12px' }}>{errors.phoneNumber.message}</span>}
                </div>

                <div className="col-12">
                    <button type="submit" className="theme-btn" disabled={isSubmitting}>
                        {isSubmitting 
                            ? t('CommentForm3.submitting', { defaultValue: 'Отправка...' }) 
                            : t('CommentForm3.submitButton', { defaultValue: 'Отправить' })
                        }
                    </button>
                </div>

                {statusMessage && <p style={{ marginTop: '10px' }}>{statusMessage}</p>}
            </div>
        </form>
    );
}

export default ContactForm3;