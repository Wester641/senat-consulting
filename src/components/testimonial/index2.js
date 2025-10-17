import React, { Component } from 'react';
import Slider from "react-slick";
import './style.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonialImg_1 from '../../images/testimonials/img-1.jpg';
import testimonialImg_2 from '../../images/testimonials/img-2.jpg';
import testimonialImg_3 from '../../images/testimonials/img-3.jpg';
import ContactForm3 from '../CommentForm3';


class Testimonial2 extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 1200,
            slidesToShow: 2,
            arrows: false,
            margin: 50,
            autoplay: true,
            slidesToScroll: 1,
            centerPadding: 30,
            focusOnSelect: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <>
                <div className="testimonial-area section-padding">
                    <div className="container">
                        <div className="section-title-1 text-center">
                            <h2>Нам доверяют</h2>
                        </div>
                        <div className="testimonial-active">
                            <Slider {...settings}>
                                <div className="my-testimonial">
                                    <div className="inner-content">
                                        <div className="content">
                                            <div className="image-box"><img src={testimonialImg_1} alt="" /></div>
                                            <div className="quote-icon"><i className="fi flaticon-right-quote"></i></div>
                                            <h4>David Millar</h4>
                                            <div className="designation">CEO of American BDS</div>
                                            <div className="text">The greatest discovery of all time is that a person can changes his futures by some merely changing his attitude & some life style.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="my-testimonial">
                                    <div className="inner-content">
                                        <div className="content">
                                            <div className="image-box"><img src={testimonialImg_2} alt="" /></div>
                                            <div className="quote-icon"><i className="fi flaticon-right-quote"></i></div>
                                            <h4>Ketly William</h4>
                                            <div className="designation">CEO, of details</div>
                                            <div className="text">The greatest discovery of all time is that a person can changes his futures by some merely changing his attitude & some life style.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="my-testimonial">
                                    <div className="inner-content">
                                        <div className="content">
                                            <div className="image-box"><img src={testimonialImg_3} alt="" /></div>
                                            <div className="quote-icon"><i className="fi flaticon-right-quote"></i></div>
                                            <h4>Aliza Anne</h4>
                                            <div className="designation">CEO</div>
                                            <div className="text">The greatest discovery of all time is that a person can changes his futures by some merely changing his attitude & some life style.</div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="col-lg-12 col-md-12">
                        <div className="contact-area contact-area-2 contact-area-3">
                            <div className="section-title-1 text-center">
                                <h2>Вы можете оставить свой отзыв</h2>
                            </div>
                            <ContactForm3 />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Testimonial2;            