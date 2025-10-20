import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



class SimpleSlider2 extends Component {
    render() {
        var settings = {
            dots: true,
            arrows: true,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2500,
            fade: true
        };
        return (
            <section className="hero hero-slider-wrapper hero-style-1">
                <div className="hero-slider">
                    <Slider {...settings}>
                        <div className="slide2 slide">
                            <div className="container">
                                <div className="row">
                                    <div className="col col-lg-8 slide-caption">
                                        <h2>Не остановимся, пока не выиграем!</h2>
                                        <p>Мы готовим позицию, защищаем ваши интересы и говорим на языке закона.</p>
                                        <div className="btns">
                                            <div className="btn-style"><Link to="/">Связаться с нами</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="slide3 slide">
                            <div className="container">
                                <div className="row">
                                    <div className="col col-lg-8 slide-caption">
                                        <h2>Ваше здоровье — наш приоритет</h2>
                                        <p> Оказываем правовую помощь в делах о возмещении вреда, причинённого травмами, ДТП или несчастными случаями.</p>
                                        <div className="btns">
                                            <div className="btn-style"><Link to="/">Получить консультацию</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="slide1 slide">
                            <div className="container">
                                <div className="row">
                                    <div className="col col-lg-8 slide-caption">
                                        <h2>Начните бизнес без головной боли!</h2>
                                        <p>Подбираем оптимальную форму собственности, оформляем документы и открываем компанию</p>
                                        <div className="btns">
                                            <div className="btn-style"><Link to="/">Записаться на встречу</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        );
    }
}

export default SimpleSlider2;