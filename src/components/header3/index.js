import React from 'react';
import {Link} from 'react-router-dom'
import MobileMenu from '../MobileMenu'
import logo from '../../images/logo/logo.png'


const Header3 = ( props ) => {
   
    const SubmitHamdler = (e) =>{
        e.preventDefault()
    }

    return(
            <header>
                <div className="header-top-1" >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9 col-sm-12 col-12 col-lg-9">
                                <ul className="d-flex account_login-area">
                                    <li><i className="fa fa-clock-o" aria-hidden="true"></i>Mon - Tues : 6.00 am - 10.00 pm</li>
                                    <li><i className="fa fa-map-marker"></i>150 Street, London, USA</li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <div className="btn-style"><Link to="/">Free Consultation</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-style-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-10 col-sm-10 col-8 col-t">
                                <div className="logo">
                                    <Link to="/"><img src={logo} alt=""/></Link>
                                </div>
                            </div>
                            <div className="col-lg-8 d-none d-lg-block col-m">
                                <div className="main-menu">
                                    <nav className="nav_mobile_menu">
                                        <ul>
                                            <li className="active"><Link to="/">Home</Link>
                                                <ul className="submenu">
                                                    <li className="active"><Link to="/">Home One</Link></li>
                                                    <li><Link to="/home2">Home Two</Link></li>
                                                    <li><Link to="/home3">Home Three</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link to="/about">About Us</Link></li>
                                            <li><Link to="/practice">Practices</Link>
                                                <ul className="submenu">
                                                    <li><Link to="/practice">practice</Link></li>
                                                    <li><Link to="/practice-details">practice details</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link to="/">Cases</Link>
                                                <ul className="submenu">
                                                    <li><Link to="/case-stadies">Cases</Link></li>
                                                    <li><Link to="/case-stadies-details">Case single</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link to="/">Blog</Link>
                                                <ul className="submenu">
                                                    <li><Link to="/blog">Blog Grid</Link></li>
                                                    <li><Link to="/blog-list">Blog with sidebar</Link></li>
                                                    <li><Link to="/blog-fullwidth">Blog full width</Link></li>
                                                    <li><Link to="/blog-single">Blog single sidebar</Link></li>
                                                    <li><Link to="/blog-single-fullwidth">Blog single fullwidth</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link to="/">Pages</Link>
                                                <ul className="submenu">
                                                    <li><Link to="/Attorneys">Attorneys</Link></li>
                                                    <li><Link to="/Attorneys-single">Attorney Single</Link></li>
                                                    <li><Link to="/faq">FAQ</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link to="/contact">Contact</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-lg-1 col-md-1 col-sm-1 col-1 search">
                                <ul>
                                    <li><Link to="/"><i className="fa fa-search"></i></Link>
                                        <ul>
                                            <li>
                                                <form onSubmit={SubmitHamdler}>
                                                    <input type="text" placeholder="search here.."/>
                                                    <button type="btn"><i className="fa fa-search"></i></button>
                                                </form>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-1 col-sm-1 col-1">
                                <MobileMenu/>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
     )
        
}

export default Header3;
