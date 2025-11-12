import React, { Component } from 'react';
import Slider from "react-slick";
import './style.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { supabase } from '../../integrationSupabase/client';
import defaultUser from "../../images/da7ed7b0-5f66-4f97-a610-51100d3b9fd2.jpg"
import video1 from "../../images/background/2.mp4";

class Testimonial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            testimonials: [],
            loading: true
        };
    }

    componentDidMount() {
        this.fetchTestimonials();
    }

    async fetchTestimonials() {
        try {
            const { data, error } = await supabase
                .from('comments')
                .select('name, company_name, notes')
                .eq('approve', true)
                .order('created_at', { ascending: false });

            if (error) {
                console.error('Error fetching testimonials:', error);
                this.setState({ loading: false });
                return;
            }

            this.setState({
                testimonials: data || [],
                loading: false
            });
        } catch (error) {
            console.error('Error:', error);
            this.setState({ loading: false });
        }
    }

    render() {
        const { testimonials, loading } = this.state;

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

        if (loading) {
            return (
                <div className="testimonial-area section-padding">
                    <div className="video-background">
                        <video autoPlay loop muted playsInline>
                            <source src={video1} type="video/mp4" />
                        </video>
                        <div className="video-overlay"></div>
                    </div>
                    <div className="container">
                        <div className="text-center">Loading testimonials...</div>
                    </div>
                </div>
            );
        }

        if (testimonials.length === 0) {
            return (
                <div className="testimonial-area section-padding">
                    <div className="video-background">
                        <video autoPlay loop muted playsInline>
                            <source src={video1} type="video/mp4" />
                        </video>
                        <div className="video-overlay"></div>
                    </div>
                    <div className="container">
                        <div className="text-center">No testimonials available</div>
                    </div>
                </div>
            );
        }

        return (
            <div className="testimonial-area section-padding">
                <div className="video-background">
                    <video autoPlay loop muted playsInline>
                        <source src={video1} type="video/mp4" />
                    </video>
                    <div className="video-overlay"></div>
                </div>

                <div className="container">
                    <div className="testimonial-active">
                        <Slider {...settings}>
                            {testimonials.map((testimonial, index) => (
                                <div className="my-testimonial" key={index}>
                                    <div className="inner-content">
                                        <div className="text">{testimonial.notes}</div>
                                        <div className="content">
                                            <div className="image-box">
                                                <img src={defaultUser} alt="aksd" />
                                            </div>
                                            <div className="quote-icon">
                                                <i className="fi flaticon-right-quote"></i>
                                            </div>
                                            <h4>{testimonial.name}</h4>
                                            <div className="designation">
                                                {testimonial.company_name || 'Компания не указана'}
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}

export default Testimonial;