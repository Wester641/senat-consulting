import React, { useState } from 'react';
import { supabase } from '../../integrationSupabase/client';



function ContactForm3() {

    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [notes, setNotes] = useState('');
    const [statusMessage, setStatusMessage] = useState('');


    const SubmitHandler = async (e) => {
        e.preventDefault();

        setStatusMessage('Отправка...');

        const commentData = {
            name: name,
            phone_number: phoneNumber,
            company_name: companyName,
            notes: notes
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


            setName('');
            setPhoneNumber('');
            setCompanyName('');
            setNotes('');
        }
    }


    return (
        <form onSubmit={SubmitHandler}>
            <div className="contact-form form-style row">
                <div className="col-12 col-lg-12">

                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your Name*"
                        id="fname"
                        name="name"
                    />
                </div>

                <div className="col col-lg-12">
                    <input
                        type="number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Phone number"
                        id="phone_number"
                        name="phone_number"
                    />
                </div>
                <div className="col-12  col-lg-12">
                    <input
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="Your company name"
                        id="company_name"
                        name="company_name"
                    />
                </div>
                <div className="col-12 col-sm-12">
                    <textarea
                        className="contact-textarea"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Message"
                        name="notes"
                    ></textarea>
                </div>
                <div className="col-12">
                    <button type="submit" className="theme-btn">Submit</button>
                </div>

                {statusMessage && <p style={{ marginTop: '10px' }}>{statusMessage}</p>}
            </div>
        </form>
    )
}

export default ContactForm3