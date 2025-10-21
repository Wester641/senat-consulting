import React, { Component } from 'react';
import './style.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContactForm3 from '../CommentForm3';


class Testimonial2 extends Component {
    render() {
        return (
            <>
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