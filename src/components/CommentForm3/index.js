import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { supabase } from '../../integrationSupabase/client';

function ContactForm3() {
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
        setStatusMessage('Отправка...');

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
            setStatusMessage(`Ошибка отправки: ${error.message}`);
        } else {
            console.log("Данные Supabase успешно вставлены:", data);
            setStatusMessage('Сообщение успешно отправлено!');
            reset();
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="contact-form form-style row">
                <div className="col-12 col-lg-12">
                    <input
                        type="text"
                        placeholder="Ваше имя*"
                        id="fname"
                        {...register('name', {
                            required: 'Имя обязательно',
                            minLength: {
                                value: 2,
                                message: 'Имя должно быть минимум 2 символа'
                            },
                            maxLength: {
                                value: 100,
                                message: 'Имя не должно быть более 100 символов'
                            },
                            pattern: {
                                value: /^[а-яА-ЯёЁa-zA-Z\s'-]+$/,
                                message: 'Имя может содержать только буквы, пробелы и дефисы'
                            }
                        })}
                    />
                    {errors.name && <span style={{ color: 'red', fontSize: '12px' }}>{errors.name.message}</span>}
                </div>

                <div className="col col-lg-12">
                    <input
                        type="tel"
                        placeholder="Номер телефона"
                        id="phone_number"
                        {...register('phoneNumber', {
                            required: 'Номер телефона обязателен',
                            pattern: {
                                value: /^[\d\s\-\+\(\)]+$/,
                                message: 'Неверный формат телефона'
                            },
                            minLength: {
                                value: 10,
                                message: 'Телефон должен быть минимум 10 символов'
                            }
                        })}
                    />
                    {errors.phoneNumber && <span style={{ color: 'red', fontSize: '12px' }}>{errors.phoneNumber.message}</span>}
                </div>

                <div className="col-12 col-lg-12">
                    <input
                        type="text"
                        placeholder="Название вашей компании"
                        id="company_name"
                        {...register('companyName', {
                            maxLength: {
                                value: 150,
                                message: 'Название компании не должно быть более 150 символов'
                            }
                        })}
                    />
                    {errors.companyName && <span style={{ color: 'red', fontSize: '12px' }}>{errors.companyName.message}</span>}
                </div>

                <div className="col-12 col-sm-12">
                    <textarea
                        className="contact-textarea"
                        placeholder="Сообщение"
                        {...register('notes', {
                            required: 'Сообщение обязательно',
                            maxLength: {
                                value: 1000,
                                message: 'Сообщение не должно быть более 1000 символов'
                            }
                        })}
                    ></textarea>
                    {errors.notes && <span style={{ color: 'red', fontSize: '12px' }}>{errors.notes.message}</span>}
                </div>

                <div className="col-12">
                    <button type="submit" className="theme-btn" disabled={isSubmitting}>
                        {isSubmitting ? 'Отправка...' : 'Отправить'}
                    </button>
                </div>

                {statusMessage && <p style={{ marginTop: '10px' }}>{statusMessage}</p>}
            </div>
        </form>
    );
}

export default ContactForm3;