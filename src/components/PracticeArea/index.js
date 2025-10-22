import React from 'react';

import pr1 from '../../images/icon/4.png'
import pr2 from '../../images/icon/5.png'
import pr3 from '../../images/icon/6.png'
import pr4 from '../../images/icon/7.png'
import pr5 from '../../images/icon/8.png'
import pr6 from '../../images/icon/9.png'

import './style.css'

const PracticeArea = ( props ) => {

    return(
        <div className={`practice-area  ptb-100-70 ${props.subclass}`}>
            <div className="container">
                <div className="col-12">
                    <div className="section-title-1 text-center">
                        <span>Услуги</span>
                        <h2>Чем мы можем вам помочь</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="practice-section">
                            <div className="practices-wrapper">
                                <div className="practices-icon-wrapper">
                                    <div className="practice-dot">
                                        <div className="dots"></div>
                                    </div>
                                    <i className="fi"><img src={pr1} alt=""/></i>
                                </div>
                                <div className="practice-content">
                                    <h2>Суды и споры</h2>
                                    <p>
                                        «Не остановимся, пока не выиграем!»
                                        Мы готовим позицию, защищаем ваши интересы и говорим на языке закона.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="practice-section">
                            <div className="practices-wrapper">
                                <div className="practices-icon-wrapper">
                                    <div className="practice-dot">
                                        <div className="dots dots-2"></div>
                                    </div>
                                    <i className="fi"><img src={pr2} alt=""/></i>
                                </div>
                                <div className="practice-content">
                                    <h2>Личная травма</h2>
                                    <p>
                                        «Ваше здоровье — наш приоритет.»
                                        Оказываем правовую помощь в делах о возмещении вреда, причинённого травмами, ДТП или несчастными случаями.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="practice-section">
                            <div className="practices-wrapper">
                                <div className="practices-icon-wrapper">
                                    <div className="practice-dot">
                                        <div className="dots"></div>
                                    </div>
                                    <i className="fi"><img src={pr3} alt=""/></i>
                                </div>
                                <div className="practice-content">
                                    <h2>Регистрация бизнеса</h2>
                                    <p>
                                        «Начните бизнес без головной боли!»
                                        Подбираем оптимальную форму собственности, оформляем документы и открываем компанию
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="practice-section">
                            <div className="practices-wrapper">
                                <div className="practices-icon-wrapper">
                                    <div className="practice-dot">
                                        <div className="dots"></div>
                                    </div>
                                    <i className="fi"><img src={pr4} alt=""/></i>
                                </div>
                                <div className="practice-content">
                                    <h2>Договоры</h2>
                                    <p>
                                        «Чтобы слово имело силу.»
                                        Составляем договоры, которые защищают ваши интересы
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="practice-section">
                            <div className="practices-wrapper">
                                <div className="practices-icon-wrapper">
                                    <div className="practice-dot">
                                        <div className="dots"></div>
                                    </div>
                                    <i className="fi"><img src={pr5} alt=""/></i>
                                </div>
                                <div className="practice-content">
                                    <h2>Организация проектов и фестивалей</h2>
                                    <p>
                                        Поможем выиграть тендер и провести мероприятия на высшем уровне 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="practice-section">
                            <div className="practices-wrapper">
                                <div className="practices-icon-wrapper">
                                    <div className="practice-dot">
                                        <div className="dots"></div>
                                    </div>
                                    <i className="fi"><img src={pr6} alt=""/></i>
                                </div>
                                <div className="practice-content">
                                    <h2>Сопровождение бизнеса</h2>
                                    <p>
                                        «Вы строите — мы страхуем риски»
                                        Абонентское сопровождение позволяет освободиться от найма штатного юриста и получить команду экспертов сразу 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     )
        
}

export default PracticeArea;
