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
                                        <h2>Мы защищаем ваши права с преданностью и опытом.</h2>
                                        <p>Наши юристы готовы отстаивать ваши интересы в любой ситуации — от консультации до суда. Мы рядом, когда справедливость важнее всего.</p>
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
                                        <h2>Юридическая поддержка, на которую можно положиться.</h2>
                                        <p>Мы предлагаем честный, понятный и профессиональный подход к решению ваших правовых вопросов. Ваше спокойствие — наша ответственность.</p>
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
                                        <h2>Справедливость — наша профессия.</h2>
                                        <p>Мы защищаем интересы клиентов с уверенностью, уважением и знанием закона. Ваша победа — это наша цель.</p>
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