import React, { Component } from 'react';

class ФормаКомментария2 extends Component {

    состояние = {
        имя: '',
        почта: '',
        номер: '',
        адрес: '',
        заметки: '',
        ошибка: {}
    }


    обработчикИзменения = (е) => {
        const ошибка = this.состояние.ошибка;
        ошибка[е.target.name] = ''

        this.setState({
            [е.target.name]: е.target.value,
            ошибка
        })
    }

    обработчикОтправки = (е) => {
        е.preventDefault();

        const { имя,
            почта,
            номер,
            адрес,
            заметки, ошибка } = this.состояние;

        if (имя === '') {
            ошибка.имя = "Пожалуйста, введите ваше имя";
        }
        if (почта === '') {
            ошибка.почта = "Пожалуйста, введите вашу почту";
        }
        if (номер === '') {
            ошибка.номер = "Пожалуйста, введите ваш номер";
        }
        if (адрес === '') {
            ошибка.адрес = "Пожалуйста, введите ваш адрес";
        }
        if (заметки === '') {
            ошибка.заметки = "Пожалуйста, введите вашу заметку";
        }


        if (ошибка) {
            this.setState({
                ошибка
            })
        }
        if (ошибка.имя === '' && ошибка.почта === '' && ошибка.почта === '' && ошибка.номер === '' && ошибка.адрес === '' && ошибка.заметки === '') {
            this.setState({
                имя: '',
                почта: '',
                номер: '',
                адрес: '',
                заметки: '',
                ошибка: {}
            })
        }
    }

    render() {

        const { имя,
            почта,
            номер,
            адрес,
            заметки, ошибка } = this.состояние;

        return (
            <form onSubmit={this.обработчикОтправки}>
                <div className="contact-form form-style row">
                    <div className="col-12 col-lg-6">
                        <input type="text" value={имя} onChange={this.обработчикИзменения} placeholder="Ваше имя*" id="fname" name="имя" />
                        <p>{ошибка.имя ? ошибка.имя : ''}</p>
                    </div>
                    <div className="col-12  col-lg-6">
                        <input type="email" placeholder="Ваша почта" onChange={this.обработчикИзменения} value={почта} id="email" name="почта" />
                        <p>{ошибка.почта ? ошибка.почта : ''}</p>
                    </div>
                    <div className="col col-lg-6">
                        <input type="text" placeholder="Телефон" onChange={this.обработчикИзменения} value={номер} id="number" name="номер" />
                        <p>{ошибка.номер ? ошибка.номер : ''}</p>
                    </div>
                    <div className="col-12  col-lg-6">
                        <input type="text" placeholder="Ваш адрес" onChange={this.обработчикИзменения} value={адрес} id="adress" name="адрес" />
                        <p>{ошибка.адрес ? ошибка.адрес : ''}</p>
                    </div>
                    <div className="col-12 col-sm-12">
                        <textarea className="contact-textarea" value={заметки} onChange={this.обработчикИзменения} placeholder="Сообщение" name="заметки"></textarea>
                        <p>{ошибка.заметки ? ошибка.заметки : ''}</p>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="theme-btn">Записаться</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default ФормаКомментария2;