import React from 'react';
import { Link } from 'react-router-dom'


import blog1 from '../../images/blog-page/7.jpg'
import blog4 from '../../images/blog-page/6.jpg'


const BlogFullWidth = () => {

    return (
        <div className="blog-page-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-12">
                        <div className="blog-left-bar">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <div className="blog-s2">
                                        <img src={blog1} alt="" />
                                    </div>
                                    <ul className="post-meta">
                                        <li><img src={blog4} alt="" /></li>
                                        <li><Link to="/blog-single">By Aliza anne</Link></li>
                                        <li className="clr">Family Law</li>
                                        <li> Oct 12,2018</li>
                                    </ul>
                                </div>
                                <div className="blog-content-2">
                                    <h2>What lawyer can do for you</h2>
                                    <p>I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.</p>
                                    <Link to="/blog-single">read more..</Link>
                                </div>
                            </div>
                            <div className="blog-item blog-item-2">
                                <div className="blog-img blog-img-2">
                                    <div className="blog-s2">
                                        <div className="blog-content-3">
                                            <ul className="post-meta">
                                                <li><img src={blog4} alt="" /></li>
                                                <li><Link to="/blog-single">By Aliza anne</Link></li>
                                                <li className="clr">Family Law</li>
                                                <li> Oct 12,2018</li>
                                            </ul>
                                            <h2>The things only for you</h2>
                                            <p>I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure,</p>
                                            <Link to="/blog-single">read more..</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default BlogFullWidth;
