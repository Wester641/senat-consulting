import React from "react";
import { Link, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import MobileMenu from "../../components/MobileMenu";
import logo from "../../images/logo/logo.png";

import "./style.css";

const Header = () => {
    const location = useLocation();

  return (
    <header>
      <div className="header-top-1 d-none d-lg-block">
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-sm-12 col-12 col-lg-9 d-flex align-items-center">
              <ul className="d-flex account_login-area">
                <li>
                  <i className="fa fa-clock-o" aria-hidden="true"></i>Пн - Пт :
                  9.00 - 19.00
                </li>
                <li>
                  <i className="fa fa-map-marker"></i>ул. Айни 85, Бишкек,
                  Кыргызстан
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 d-flex justify-content-center">
              <div className="btn-style">
                <NavLink to="/">Бесплатная консультация</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-style-1">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-between py-2">
            <div className="col-lg-3 col-md-10 col-sm-10 col-8 col-t ">
              <div className="logo">
                <NavLink to="/">
                  <img src={logo} alt="" />
                </NavLink>
              </div>
            </div>
            <div className="col-lg-8 d-none d-lg-block col-m">
              <div className="main-menu">
                <nav className="nav_mobile_menu">
                  <ul>
                    <li>
                      <NavLink to="/" exact activeClassName="active">
                        Главная
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/about"
                        className={({ isActive }) => (isActive ? "active" : "")}
                      >
                        О компании
                      </NavLink>
                    </li>
                    <li className="has-submenu">
                      <NavLink
                        to="/practice"
                        className={({ isActive }) => (isActive ? "active" : "")}
                      >
                        Наши услуги <i className="fa fa-angle-down"></i>
                      </NavLink>
                      <ul className="submenu">
                        <li>
                          <NavLink to="/practice-details/1">Суды и споры</NavLink>
                        </li>
                        <li>
                          <NavLink to="/practice-details/2">
                            Регистрация бизнеса
                           </NavLink>
                        </li>
                        <li>
                          <NavLink to="/practice-details/3">Договоры</NavLink>
                        </li>
                        <li>
                          <NavLink to="/practice-details/4">
                            Сопровождение бизнеса 
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/practice-details/5">
                            Организация проектов и фестивалей
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <NavLink
                        to="/case-stadies"
                        className={({ isActive }) => (isActive ? "active" : "")}
                      >
                        Отзывы
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/blog-fullwidth"
                        className={({ isActive }) => (isActive ? "active" : "")}
                      >
                        Новости
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/contact"
                        className={({ isActive }) => (isActive ? "active" : "")}
                      >
                        Контакты
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            {/* <div className="col-lg-1 col-md-1 col-sm-1 col-1 search">
                            <ul>
                                <li><Link to="/"><i className="fa fa-search"></i></Link>
                                    <ul>
                                        <li>
                                            <form onSubmit={SubmitHandler}>
                                                <input type="text" placeholder="search here.." />
                                                <button type="btn"><i className="fa fa-search"></i></button>
                                            </form>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div> */}

                        <div className="mr-3">
                            <MobileMenu />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
