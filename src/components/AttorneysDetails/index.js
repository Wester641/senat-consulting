import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import ContactForm2 from '../CommentForm2'
import './style.css'
import cd_1 from '../../images/Attorneys-single/img-1.jpg';
import cd_5 from '../../images/studies/1.jpg';
import cd_6 from '../../images/studies/2.jpg';
import cd_7 from '../../images/studies/3.jpg';


class AttorneysDetails extends Component {

    render() {

        return (
            <div className="Attorneys-content-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="Attorneys-area">
                                <div className="container att-s">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="Attorneys-info">
                                                <div className="Attorneys-content">
                                                    <h3>Important Information</h3>
                                                </div>
                                                <div className="info-outer">
                                                    <ul className="info">
                                                        <li><span>Positon: </span> Siniour Lawyer</li>
                                                        <li><span>Practice Area: </span>Family Lawyer, Criminal Defence, Personal Injury</li>
                                                        <li><span>Experience: </span>10 Years</li>
                                                        <li><span>Address: </span>Nayra Park, 365 B Grand Ave, Los Angeles, CA 10872</li>
                                                        <li><span>Phone: </span>0800.123.456</li>
                                                        <li><span>Email: </span>youremail@gmail.com</li>
                                                        <li><span>Fax: </span>6985231456</li>
                                                    </ul>
                                                    <ul className="social">
                                                        <li><Link to="/"><i className="fa fa-facebook"></i></Link></li>
                                                        <li><Link to="/"><i className="fa fa-twitter"></i></Link></li>
                                                        <li><Link to="/"><i className="fa fa-linkedin"></i></Link></li>
                                                        <li><Link to="/"><i className="fa fa-google-plus" aria-hidden="true"></i></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="exrienense-img">
                                <img src={cd_1} alt=""/>
                            </div>
                            <div className="exrienense-section">
                                <h2>Personal Experience</h2>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                                <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, </p>
                            </div>
                            <div className="education-section">
                                <h2>Education</h2>
                                <span><i className="fa fa-caret-right" aria-hidden="true"></i>Admization Institute of Law andTechnology, Juzment School of Management,Cambridge</span>
                                <span><i className="fa fa-caret-right" aria-hidden="true"></i>Academy University School of Law, Boston, MA</span>
                                <span><i className="fa fa-caret-right" aria-hidden="true"></i>The Syntify High School Of New York</span>
                                <span><i className="fa fa-caret-right" aria-hidden="true"></i>Education & Court Admissions</span>
                            </div>
                            <div className="language">
                                <h2>Language</h2>
                                <p>French(fluent), English (fluent), Greek , chinese.</p>
                            </div>

                            <h2>Participated Case</h2>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="studies-item">
                                        <div className="studies-single">
                                            <img src={cd_5} alt=""/>
                                        </div>
                                        <div className="overlay-text">
                                            <div className="text-inner">
                                                <p className="sub">Corporate</p>
                                                <h3>General Service</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="studies-item">
                                        <div className="studies-single">
                                            <img src={cd_6} alt=""/>
                                        </div>
                                        <div className="overlay-text">
                                            <div className="text-inner">
                                                <p className="sub">General</p>
                                                <h3>Personal Issue</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="studies-item">
                                        <div className="studies-single">
                                            <img src={cd_7} alt=""/>
                                        </div>
                                        <div className="overlay-text">
                                            <div className="text-inner">
                                                <p className="sub">Business</p>
                                                <h3>Business Accounting</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="contact-area contact-area-2">
                                    <h2>Contact Me</h2>
                                          <ContactForm2/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default AttorneysDetails;