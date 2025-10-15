import React from 'react';
import ContactForm from '../CommentForm'
import './style.css'



const ContactSection = () => {

    return(
        <div className="contact-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="contact-text">
                            <h2>Are You Interest To Contact With Us?</h2>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC.</p>
                            <div className="contact-sub">
                                <div className="contact-icon">
                                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                                </div>
                                <div className="contact-c">
                                    <h4>Our Location</h4>
                                    <span>245 King Street, Touterie Victoria 8520 Australia</span>
                                </div>
                            </div>
                            <div className="contact-sub">
                                <div className="contact-icon">
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                </div>
                                <div className="contact-c">
                                    <h4>Phone</h4>
                                    <span>0-123-456-7890</span>
                                </div>
                            </div>
                            <div className="contact-sub">
                                <div className="contact-icon">
                                    <i className="fa fa-envelope-o" aria-hidden="true"></i>
                                </div>
                                <div className="contact-c">
                                    <h4>Email</h4>
                                    <span>sample@gmail.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-7 col-md-12 col-sm-12">
                        <div className="contact-content">
                            <div className="contact-form">
                                    <ContactForm/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     )
        
}

export default ContactSection;
