import React, { Component } from 'react';

class ContactForm extends Component {

    state = {
        name: '',
        email: '',
        number: '',
        events: '',
        notes: '',
        error: {}
    }


    changeHandler = (e) => {
        const error = this.state.error;
        error[e.target.name] = ''

        this.setState({
            [e.target.name]: e.target.value,
            error
        })
    }

    subimtHandler = (e) => {
        e.preventDefault();

        const { name,
            email,
            number,
            events,
            notes, error } = this.state;

        if (name === '') {
            error.name = "Пожалуйста, введите свое имя";
        }
        if (email === '') {
            error.email = "Пожалуйста, введите свой адрес электронной почты";
        }
        if (number === '') {
            error.number = "Выберите номер вашего номера";
        }
        if (events === '') {
            error.events = "Выберите список событий";
        }
        if (notes === '') {
            error.notes = "Пожалуйста, введите вашу заметку";
        }


        if (error) {
            this.setState({
                error
            })
        }
        if (error.name === '' && error.email === '' && error.email === '' && error.number === '' && error.events === '' && error.notes === '') {
            this.setState({
                name: '',
                email: '',
                number: '',
                events: '',
                notes: '',
                error: {}
            })
        }
    }

    render() {

        const { name,
            email,
            number,
            events,
            notes, error } = this.state;

        return (
            <form onSubmit={this.subimtHandler}>
                <div className="contact-form form-style row">
                    <div className="col-12 col-lg-6">
                        <input type="text" value={name} onChange={this.changeHandler} placeholder="Ваше Имя*" id="fname" name="name" />
                        <p>{error.name ? error.name : ''}</p>
                    </div>
                    <div className="col col-lg-6">
                        <input type="text" placeholder="Номер телефона" onChange={this.changeHandler} value={number} id="number" name="number" />
                        <p>{error.number ? error.number : ''}</p>
                    </div>
                    <div className="col-12  col-lg-6">
                        <input type="email" placeholder="Ваша почта" onChange={this.changeHandler} value={email} id="email" name="email" />
                        <p>{error.email ? error.email : ''}</p>
                    </div>
                    <div className="col col-lg-6">
                        <select className="form-control" onChange={this.changeHandler} value={events} name="events">
                            <option disabled value="">Суды и споры</option>
                            <option value="1">Регистрация бизнеса</option>
                            <option value="2">Договоры</option>
                            <option value="3">Сопровождение бизнеса</option>
                            <option value="4">Организация проектов и фестивалей</option>
                            <option value="5">Личная травма</option>
                        </select>
                        <p>{error.events ? error.events : ''}</p>
                    </div>
                    <div className="col-12 col-sm-12">
                        <textarea className="contact-textarea" value={notes} onChange={this.changeHandler} placeholder="Комментарии" name="notes"></textarea>
                        <p>{error.notes ? error.notes : ''}</p>
                    </div>
                    <div className="col-12">
                            <button type="submit" className="theme-btn">Записаться</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default ContactForm;