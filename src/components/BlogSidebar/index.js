import React from 'react';
import {Link} from 'react-router-dom'
import ins1 from '../../images/instragram/1.jpg'
import ins2 from '../../images/instragram/2.jpg'
import ins3 from '../../images/instragram/3.jpg'
import ins4 from '../../images/instragram/4.jpg'
import ins5 from '../../images/instragram/5.jpg'
import ins6 from '../../images/instragram/6.jpg'


import rp1 from '../../images/case-studies-details/1.jpg'
import rp2 from '../../images/case-studies-details/2.jpg'
import rp3 from '../../images/case-studies-details/3.jpg'

import './style.css'

const BlogSidebar = () => {

    const SubmitHandler = (e) =>{
       e.preventDefault()
    }

    return(
        <div className="blog-right-bar practice-details-area case-stadies-details-area">
            <div className="row">
                <div className="col-lg-12 col-12">
                    <div className="widget search-widget">
                        <form onSubmit={SubmitHandler}>
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
                                <li><Link to="/blog-single">Family Law</Link></li>
                                <li><Link to="/blog-single">Criminal Law</Link></li>
                                <li><Link to="/blog-single">Business Law</Link></li>
                                <li><Link to="/blog-single">Personal Injury</Link></li>
                                <li><Link to="/blog-single">Education Law</Link></li>
                                <li><Link to="/blog-single">Drugs Crime</Link></li>
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
                                    <img src={rp1} alt=""/>
                                </div>
                                <div className="details">
                                    <p>Actual teachings of the great explorer of the truth, </p>
                                </div>
                            </div>
                            <div className="post">
                                <div className="img-holder">
                                    <img src={rp2} alt=""/>
                                </div>
                                <div className="details">
                                    <p>The truth, the master-builder of human happiness</p>
                                </div>
                            </div>
                            <div className="post post3">
                                <div className="img-holder">
                                    <img src={rp3} alt=""/>
                                </div>
                                <div className="details">
                                    <p>Explorer of the truth, the master-builder of human happiness</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 col-md-6 col-12 col-g">
                    <div className="widget tag-widget">
                        <h3>Tags</h3>
                        <ul>
                            <li><Link to="/blog-single">Attorney</Link></li>
                            <li><Link to="/blog-single">Lawyer</Link></li>
                            <li><Link to="/blog-single">Accident</Link></li>
                            <li><Link to="/blog-single">Consultation</Link></li>
                            <li><Link to="/blog-single">Fraud</Link></li>
                            <li><Link to="/blog-single">Car</Link></li>
                            <li><Link to="/blog-single">Law</Link></li>
                            <li><Link to="/blog-single">Immigration</Link></li>
                            <li><Link to="/blog-single">Criminal</Link></li>
                            <li><Link to="/blog-single">Business</Link></li>
                            <li><Link to="/blog-single">Corporate</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-12 col-md-6 col-12">
                    <div className="widget instagram">
                        <h3>Instagram</h3>
                        <ul className="d-flex">
                            <li><Link to="/blog-single"><img src={ins1} alt=""/></Link></li>
                            <li><Link to="/blog-single"><img src={ins2} alt=""/></Link></li>
                            <li><Link to="/blog-single"><img src={ins3} alt=""/></Link></li>
                            <li><Link to="/blog-single"><img src={ins4} alt=""/></Link></li>
                            <li><Link to="/blog-single"><img src={ins5} alt=""/></Link></li>
                            <li><Link to="/blog-single"><img src={ins6} alt=""/></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
     )
        
}

export default BlogSidebar;
