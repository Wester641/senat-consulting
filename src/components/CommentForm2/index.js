import { useState } from 'react';

function ContactForm2() {
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
            newError.name = "Please enter your name";
        }
        if (formData.email === '') {
            newError.email = "Please enter your email";
        }
        if (formData.number === '') {
            newError.number = "Please enter your number";
        }
        if (formData.adress === '') {
            newError.adress = "Please enter your address";
        }
        if (formData.notes === '') {
            newError.notes = "Please enter your note";
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
                        placeholder="Ваше имя*" 
                        id="fname" 
                        name="name" 
                    />
                    <p style={{ color: 'red' }}>{error.name ? error.name : ''}</p>
                </div>
                <div className="col-12 col-lg-6">
                    <input 
                        type="email" 
                        placeholder="Ваш адрес электронной почты" 
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
                        placeholder="Номер телефона" 
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
                        placeholder="Ваш адрес" 
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
                        placeholder="Сообщение" 
                        name="notes"
                    ></textarea>
                    <p style={{ color: 'red' }}>{error.notes ? error.notes : ''}</p>
                </div>
                <div className="col-12">
                    <button type="submit" className="theme-btn">Appointment</button>
                </div>
            </div>
        </form>
    );
}

export default ContactForm2;