import React, { Component } from 'react'
import { Collapse, CardBody, Card } from 'reactstrap';
import { Link } from 'react-router-dom'

import PerfectScrollbar from 'react-perfect-scrollbar'

import './style.css';

import 'react-perfect-scrollbar/dist/css/styles.css';
const menus = [
    {
        id: 1,
        title: 'Главная',
        link: '/',
    },
    {
        id: 2,
        title: 'О компании',
        link: '/about',
    },
    {
        id: 3,
        title: 'Наши услуги',
        link: '/practice',
        submenu: [
            {
                id: 1,
                title: 'Суды и споры',
                link: '/practice-details',
            },
            {
                id: 2,
                title: 'Регистрация бизнеса',
                link: '/practice-details',
            },
            {
                id: 3,
                title: 'Договоры',
                link: '/practice-details',
            },
            {
                id: 4,
                title: 'Сопровождение бизнеса',
                link: '/practice-details',
            },
            {
                id: 5,
                title: 'Организация проектов и фестивалей',
                link: '/practice-details',
            },
        ]
    },
    {
        id: 4,
        title: 'Отзывы',
        link: '/case-stadies',
    },

    {
        id: 5,
        title: 'Новости',
        link: '/blog-fullwidth',
    },
    {
        id: 6,
        title: 'Контакты',
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
                                            {item.submenu ? <i className="fa fa-angle-down" aria-hidden="true"></i> : ''}
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