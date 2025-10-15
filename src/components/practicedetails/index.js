import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import pr_1 from '../../images/practice/2.jpg';
import pr_2 from '../../images/practice/3.jpg';
import pr_3 from '../../images/practice/4.jpg';


class PracticDetails extends Component {

    render() {

        return (
            <div className="practice-details-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-12 p-p">
                            <div className="row">
                                <div className="col-lg-12 col-md-6 col-12">
                                    <div className="field-section">
                                        <div className="field-img">
                                            <img src={pr_1} alt=""/>
                                        </div>
                                        <div className="field-content">
                                            <h3><span>25</span>Years of Experience In This Field</h3>
                                            <div className="btns">
                                                <div className="btn-style"><Link to="/contact">Contact Us Now</Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6 col-12">
                                    <div className="practice-catagory-item">
                                        <div className="widget-title">
                                            <h3 className="text-left">Category</h3>
                                        </div>
                                        <div className="practice-section">
                                            <ul>
                                                <li><Link to="/practice-details">Family Law</Link></li>
                                                <li><Link to="/practice-details">Criminal Law</Link></li>
                                                <li><Link to="/practice-details">Business Law</Link></li>
                                                <li><Link to="/practice-details">Personal Injury</Link></li>
                                                <li><Link to="/practice-details">Education Law</Link></li>
                                                <li><Link to="/practice-details">Drugs Crime</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-12">
                            <div className="practice-section-img">
                                <img src={pr_2} alt=""/>
                            </div>
                            <div className="practice-section-text">
                                <h2>Family Law</h2>
                                <h5>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born </h5>
                                <p>I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, </p>
                                <p>because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? </p>
                            </div>
                            <div className="organigation-area">
                                <div className="organaigation-img">
                                    <img src={pr_3} alt=""/>
                                </div>
                                <div className="organigation-text">
                                    <h2>Family Law Organizations</h2>
                                    <span><i className="fa fa-check-square-o" aria-hidden="true"></i>The master-builder of human happiness.</span>
                                    <span><i className="fa fa-check-square-o" aria-hidden="true"></i>Occasionally circumstances occur in which toil and pain</span>
                                    <span><i className="fa fa-check-square-o" aria-hidden="true"></i>Avoids pleasure itself, because it is pleasure</span>
                                    <span><i className="fa fa-check-square-o" aria-hidden="true"></i>who do not know how to pursue pleasure</span>
                                    <span><i className="fa fa-check-square-o" aria-hidden="true"></i>To take a trivial example, which of us ever undertakes</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default PracticDetails;