import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './style.css'
import cd_1 from '../../images/case-studies-details/4.jpg';
import cd_2 from '../../images/case-studies-details/1.jpg';
import cd_3 from '../../images/case-studies-details/2.jpg';
import cd_4 from '../../images/case-studies-details/3.jpg';
import cd_5 from '../../images/studies/1.jpg';
import cd_6 from '../../images/studies/2.jpg';
import cd_7 from '../../images/studies/3.jpg';


class CaseDetails extends Component {

    sumitHandler ( e ) {
        e.preventDefault()
    }

    render() {

        return (
            <div className='pr-sub'>
                <div className="practice-details-area case-stadies-details-area section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="practice-section-img practice-section-img-2">
                                    <img src={cd_1} alt=""/>
                                </div>
                                <div className="practice-section-text practice-section-text-2">
                                    <h2>Family Issue</h2>
                                    <h5>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born </h5>
                                    <p>I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, </p>
                                    <p>because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? </p>
                                </div>
                            </div>
                            <div className="col-lg-4 p-p">
                                <div className="row">
                                    <div className="col-lg-12 col-12">
                                        <div className="widget search-widget">
                                            <form onSubmit={this.sumitHandler}>
                                                <div>
                                                    <input type="text" className="form-control" placeholder="Search Post.."/>
                                                    <button type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-6">
                                        <div className="practice-catagory-item">
                                            <div className="widget-title">
                                                <h3 className="text-left">Category</h3>
                                            </div>
                                            <div className="practice-section">
                                                <ul>
                                                    <li><Link to="/case-stadies-details">Family Law</Link></li>
                                                    <li><Link to="/case-stadies-details">Criminal Law</Link></li>
                                                    <li><Link to="/case-stadies-details">Business Law</Link></li>
                                                    <li><Link to="/case-stadies-details">Personal Injury</Link></li>
                                                    <li><Link to="/case-stadies-details">Education Law</Link></li>
                                                    <li><Link to="/case-stadies-details">Drugs Crime</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-6">
                                        <div className="practice-section resent-section practice-catagory-item">
                                            <h3 className="text-left">Recent Case</h3>
                                            <div className="posts">
                                                <div className="post post2">
                                                    <div className="img-holder">
                                                        <img src={cd_2} alt=""/>
                                                    </div>
                                                    <div className="details">
                                                        <p>Actual teachings of the great explorer of the truth, </p>
                                                    </div>
                                                </div>
                                                <div className="post">
                                                    <div className="img-holder">
                                                        <img src={cd_3} alt=""/>
                                                    </div>
                                                    <div className="details">
                                                        <p>The truth, the master-builder of human happiness</p>
                                                    </div>
                                                </div>
                                                <div className="post post3">
                                                    <div className="img-holder">
                                                        <img src={cd_4} alt=""/>
                                                    </div>
                                                    <div className="details">
                                                        <p>Explorer of the truth, the master-builder of human happiness</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="studies-area studies-area-3 section-padding">
                    <div className="container">
                        <div className="col-l2">
                            <div className="section-title section-title2">
                                <h2>Related Case Studies</h2>
                            </div>
                        </div>
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
                    </div>
                </div>
         </div>   

        );
    }
}

export default CaseDetails;