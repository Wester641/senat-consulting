import { useState } from 'react';

function ContactForm() {
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
            newError.name = "Пожалуйста, введите свое имя";
        }
        if (formData.email === '') {
            newError.email = "Пожалуйста, введите свой адрес электронной почты";
        }
        if (formData.number === '') {
            newError.number = "Выберите номер вашего номера";
        }
        if (formData.events === '') {
            newError.events = "Выберите список событий";
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
            console.log('Форма успешно отправлена');
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
                        placeholder="Ваше Имя*" 
                        id="fname" 
                        name="name" 
                    />
                    <p style={{ color: 'red' }}>{error.name ? error.name : ''}</p>
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
                        type="email" 
                        placeholder="Ваша почта" 
                        onChange={changeHandler} 
                        value={formData.email} 
                        id="email" 
                        name="email" 
                    />
                    <p style={{ color: 'red' }}>{error.email ? error.email : ''}</p>
                </div>
                <div className="col col-lg-6">
                    <select 
                        className="form-control" 
                        onChange={changeHandler} 
                        value={formData.events} 
                        name="events"
                    >
                        <option disabled value="">Суды и споры</option>
                        <option value="1">Регистрация бизнеса</option>
                        <option value="2">Договоры</option>
                        <option value="3">Сопровождение бизнеса</option>
                        <option value="4">Организация проектов и фестивалей</option>
                        <option value="5">Личная травма</option>
                    </select>
                    <p style={{ color: 'red' }}>{error.events ? error.events : ''}</p>
                </div>
                <div className="col-12 col-sm-12">
                    <textarea 
                        className="contact-textarea" 
                        value={formData.notes} 
                        onChange={changeHandler} 
                        placeholder="Комментарии" 
                        name="notes"
                    ></textarea>
                    <p style={{ color: 'red' }}>{error.notes ? error.notes : ''}</p>
                </div>
                <div className="col-12">
                    <button type="submit" className="theme-btn">Записаться</button>
                </div>
            </div>
        </form>
    );
}

export default ContactForm;