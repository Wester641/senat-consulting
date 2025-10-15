import React from 'react';
import {Link} from 'react-router-dom'
import logo from '../../images/logo/logo.png'
import './style.css'

const FooterSection = () => {

    return(
        <div className="footer-area">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-logo">
                                <Link to="/"><img src={logo} alt=""/></Link>
                            </div>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature</p>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-link">
                                <h3>Quick Link</h3>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/">Practice Area</Link></li>
                                    <li><Link to="/">Our Team</Link></li>
                                    <li><Link to="/">Recent Case</Link></li>
                                    <li><Link to="/">Our Blog</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-practice bd-0">
                                <h3>Practice Area</h3>
                                <ul>
                                    <li><Link to="/">Family Law</Link></li>
                                    <li><Link to="/">Criminal Law</Link></li>
                                    <li><Link to="/">Parsonal Injury</Link></li>
                                    <li><Link to="/">Real Estate Law</Link></li>
                                    <li><Link to="/">Business Law</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="widget newsletter-widget">
                                <div className="widget-title">
                                    <h3>Newsletter</h3>
                                </div>
                                <p>Samsa was a travelling salesman and above it there hung a picture that he had recently</p>
                                <form>
                                    <div className="input-1">
                                        <input type="email" className="form-control" placeholder="Email Address *" required/>
                                    </div>
                                    <div className="submit clearfix">
                                        <button type="submit"><i className="fa fa-envelope-o" aria-hidden="true"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom-content">
                        <div className="row">
                            <div className="col-lg-6 col-md-8 col-sm-9 col-12">
                                <span>Privacy Policy | © 2020 <Link to="/">Kazi</Link>. All rights reserved</span>
                            </div>
                            <div className="col-lg-6 col-md-4 col-sm-3 col-12">
                                <ul className="d-flex">
                                    <li><Link to="/"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                                    <li><Link to="/"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                                    <li><Link to="/"><i className="fa fa-linkedin" aria-hidden="true"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     )
        
}

export default FooterSection;
