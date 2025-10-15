import React, { Component } from 'react'
import { Collapse, CardBody, Card } from 'reactstrap';
import { Link } from 'react-router-dom'

import PerfectScrollbar from 'react-perfect-scrollbar'

import './style.css';

import 'react-perfect-scrollbar/dist/css/styles.css';
const menus = [
    {
        id: 1,
        title: 'Home +',
        link: '/home',
        submenu: [
            {
                id: 11,
                title: 'Home One',
                link: '/home'
            },
            {
                id: 12,
                title: 'Home One 2',
                link: '/home2'
            },
            {
                id: 13,
                title: 'Home One 3',
                link: '/'
            },
        ]
    },
    {
        id: 2,
        title: 'About Us',
        link: '/about',
    },
    {
        id: 3,
        title: 'Practices +',
        submenu: [
            {
                id: 31,
                title: 'practice',
                link: '/practice',
            },
            {
                id: 32,
                title: 'practice details',
                link: '/practice-details',
            },
        ]
    },
    {
        id: 4,
        title: 'Cases +',
        submenu: [
            {
                id: 41,
                title: 'Cases',
                link: '/case-stadies',
            },
            {
                id: 42,
                title: 'Case single',
                link: '/case-stadies-details',
            },
        ]
    },
  
    {
        id: 5,
        title: 'Blog +',
        link: '/blog',
        submenu: [
            {
                id: 51,
                title: 'Blog',
                link: '/blog'
            },
            {
                id: 52,
                title: 'Blog with sidebar',
                link: '/blog-list'
            },
            {
                id: 53,
                title: 'Blog full width',
                link: '/blog-fullwidth'
            },
            {
                id: 54,
                title: 'Blog single sidebar',
                link: '/blog-single'
            },
            {
                id: 55,
                title: 'Blog single fullwidth',
                link: '/blog-single-fullwidth'
            },
        ]
    },
    {
        id: 7,
        title: 'Pages +',
        submenu: [
            {
                id: 71,
                title: 'Attorneys',
                link: '/Attorneys',
            },
            {
                id: 72,
                title: 'Attorney Single',
                link: '/Attorneys-single',
            },
            {
                id: 73,
                title: 'FAQ',
                link: '/faq',
            },
        ]
    },
    {
        id: 6,
        title: 'Contact',
        link: '/contact',
    },
    
]


class MobileMenu extends Component {

    state = {
        isMenuShow: false,
        isOpen: 0,
    }

    menuHandler = () => {
        this.setState({
            isMenuShow: !this.state.isMenuShow
        })
    }

    setIsOpen = id => () => {
        this.setState({
            isOpen: id === this.state.isOpen ? 0 : id
        })
    }

    render() {

        const { isMenuShow, isOpen } = this.state;

        return (
            <div>
                <PerfectScrollbar >
                    <div className={`mobileMenu ${isMenuShow ? 'show' : ''}`}>
                        {/* <div className="clox" onClick={this.menuHandler}>Close Me</div> */}

                        <ul className="responsivemenu">
                            {menus.map(item => {
                                return (
                                    <li key={item.id}>
                                        {item.submenu ? <p onClick={this.setIsOpen(item.id)}>
                                            {item.title}
                                            {item.submenu ? <i className="fa fa-angle-right" aria-hidden="true"></i> : ''}
                                        </p> : <Link to={item.link}>{item.title}</Link>}
                                        {item.submenu ?
                                        <Collapse isOpen={item.id === isOpen}>
                                            <Card>
                                                <CardBody>
                                                    <ul>
                                                        {item.submenu.map(submenu => (
                                                            <li key={submenu.id}><Link className="active" to={submenu.link}>{submenu.title}</Link></li>
                                                        ))}
                                                    </ul>
                                                </CardBody>
                                            </Card>
                                        </Collapse>
                                        : ''}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    </PerfectScrollbar>
                <div className="showmenu" onClick={this.menuHandler}><i className="fa fa-bars" aria-hidden="true"></i></div>
            </div>
        )
    }
}

export default MobileMenu;