import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import team_1 from '../../images/team/1.jpg';
import team_2 from '../../images/team/2.jpg';
import team_3 from '../../images/team/3.jpg';
import team_4 from '../../images/team/4.jpg';
import team_5 from '../../images/team/5.jpg';
import team_6 from '../../images/team/6.jpg';

class TeamSection2 extends Component {
    render() {

        return (
            <div className="team-area section-padding">
                <div className="container">
                    <div className="col-l2">
                        <div className="section-title-1  text-center">
                            <span>Meet Our Experts</span>
                            <h2>Qualified Attorneys</h2>
                        </div>
                    </div>
                    <div className="team-active owl-carousel">
                        <div className="team-item">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className="team-single">
                                        <div className="team-img">
                                            <img src={team_1} alt=""/>
                                            <div className="social-1st">
                                                <ul>
                                                    <li><Link to="/"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                                                    <li><Link to="/"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                                                    <li><Link to="/"><i className="fa fa-linkedin" aria-hidden="true"></i></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="team-content">
                                            <h4>Lily Watson</h4>
                                            <span>Family Lawyer</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className="team-single">
                                        <div className="team-img">
                                            <img src={team_2} alt=""/>
                                            <div className="social-1st">
                                                <ul>
                                                    <li><Link to="/"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                                                    <li><Link to="/"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                                                    <li><Link to="/"><i className="fa fa-linkedin" aria-hidden="true"></i></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="team-content">
                                            <h4>Willam Stephen</h4>
                                            <span>Criminal Lawyer</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className="team-single">
                                        <div className="team-img">
                                             <img src={team_3} alt=""/>
                                            <div className="social-1st">
                                                <ul>
                                                    <li><Link to="/"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                                                    <li><Link to="/"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                                                    <li><Link to="/"><i className="fa fa-linkedin" aria-hidden="true"></i></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="team-content">
                                            <h4>Eshan Golly</h4>
                                            <span>Business Lawyer</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="team-item">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className="team-single">
                                        <div className="team-img">
                                            <img src={team_4} alt=""/>
                                            <div className="social-1st">
                                                <ul>
                                                    <li><Link to="/"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                                                    <li><Link to="/"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                                                    <li><Link to="/"><i className="fa fa-linkedin" aria-hidden="true"></i></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="team-content">
                                            <h4>Daniel Dambeldor</h4>
                                            <span>Family Lawyer</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className="team-single">
                                        <div className="team-img">
                                            <img src={team_5} alt=""/>
                                            <div className="social-1st">
                                                <ul>
                                                    <li><Link to="/"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                                                    <li><Link to="/"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                                                    <li><Link to="/"><i className="fa fa-linkedin" aria-hidden="true"></i></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="team-content">
                                            <h4>Darcy Alec</h4>
                                            <span>Criminal Lawyer</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className="team-single">
                                        <div className="team-img">
                                            <img src={team_6} alt=""/>
                                            <div className="social-1st">
                                                <ul>
                                                    <li><Link to="/"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                                                    <li><Link to="/"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                                                    <li><Link to="/"><i className="fa fa-linkedin" aria-hidden="true"></i></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="team-content">
                                            <h4>Alecgander Harry</h4>
                                            <span>Business Lawyer</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className="btn-style"><Link to="/Attorneys">See All Attorneys</Link></div>
                </div>
            </div>
        </div>
        );
    }
}

export default TeamSection2;            