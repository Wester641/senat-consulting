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
                                        <h2>We Fight For Your Justice As Like A Friend.</h2>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words </p>
                                        <div className="btns">
                                            <div className="btn-style"><Link to="/">Contact us now</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slide3 slide">
                            <div className="container">
                                <div className="row">
                                    <div className="col col-lg-8 slide-caption">
                                        <h2>We Fight For Your Justice As Like A Friend.</h2>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words </p>
                                        <div className="btns">
                                            <div className="btn-style"><Link to="/">Contact us now</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slide1 slide">
                            <div className="container">
                                <div className="row">
                                    <div className="col col-lg-8 slide-caption">
                                        <h2>We Fight For Your Justice As Like A Friend.</h2>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words </p>
                                        <div className="btns">
                                            <div className="btn-style"><Link to="/">Contact us now</Link></div>
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