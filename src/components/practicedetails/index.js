import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import pr_1 from '../../images/practice/2.jpg';
import pr_2 from '../../images/practice/3.jpg';
import pr_3 from '../../images/practice/4.jpg';

class PracticDetails extends Component {

    render() {
        return (
            <div className="practice-details-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-12 p-p">
                            <div className="row">
                                <div className="col-lg-12 col-md-6 col-12">
                                    <div className="field-section">
                                        <div className="field-img">
                                            <img src={pr_1} alt=""/>
                                        </div>
                                        <div className="field-content">
                                            <h3><span>8</span> лет опыта в этой сфере</h3>
                                            <div className="btns">
                                                <div className="btn-style">
                                                    <Link to="/contact">Связаться с нами</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6 col-12">
                                    <div className="practice-catagory-item">
                                        <div className="widget-title">
                                            <h3 className="text-left">Категории</h3>
                                        </div>
                                        <div className="practice-section">
                                            <ul>
                                                <li><Link to="/practice-details">Суды и споры</Link></li>
                                                <li><Link to="/practice-details">Регистрация бизнеса</Link></li>
                                                <li><Link to="/practice-details">Договоры</Link></li>
                                                <li><Link to="/practice-details">Сопровождение бизнеса</Link></li>
                                                <li><Link to="/practice-details">Организация проектов и фестивалей</Link></li>
                                                <li><Link to="/practice-details">Личные травмы</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8 col-12">
                            <div className="practice-section-img">
                                <img src={pr_2} alt=""/>
                            </div>
                            <div className="practice-section-text">
                                <h2>Суды и споры</h2>
                                <h5>«Не остановимся, пока не выиграем!»</h5>
                                <p>
                                    Мы готовим позицию, защищаем ваши интересы и говорим на языке закона.
                                    Наша команда тщательно анализирует каждую деталь дела, чтобы добиться
                                    наилучшего результата для клиента. Мы представляем интересы в судах
                                    всех инстанций и обеспечиваем комплексную юридическую поддержку.
                                </p>
                                <p>
                                    Наша цель — не просто выиграть процесс, а найти оптимальное решение
                                    вашей правовой проблемы. Мы помогаем урегулировать споры, снизить
                                    риски и защитить репутацию. Работая с нами, вы можете быть уверены,
                                    что ваши интересы под надежной защитой.
                                </p>
                            </div>

                            <div className="organigation-area">
                                <div className="organaigation-img">
                                    <img src={pr_3} alt=""/>
                                </div>
                                <div className="organigation-text">
                                    <h2>Наши направления работы</h2>
                                    <span><i className="fa fa-check-square-o" aria-hidden="true"></i> Обжалование решений прокуратуры и суда</span>
                                    <span><i className="fa fa-check-square-o" aria-hidden="true"></i> Подготовка уголовно-процессуальных документов</span>
                                    <span><i className="fa fa-check-square-o" aria-hidden="true"></i> Жилищные и долевые споры</span>
                                    <span><i className="fa fa-check-square-o" aria-hidden="true"></i> Представление интересов в судах всех инстанций</span>
                                    <span><i className="fa fa-check-square-o" aria-hidden="true"></i> Досудебное урегулирование и медиация</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PracticDetails;
