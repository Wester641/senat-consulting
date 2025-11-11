import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import MobileMenu from "../../components/MobileMenu";
import logo from "../../images/logo/logo.png";

import "./style.css";

const Header = () => {
  const { t, i18n } = useTranslation();

  return (
    <header>
      <div className="header-top-1 d-none d-lg-block">
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-sm-12 col-12 col-lg-9 d-flex align-items-center">
              <ul className="d-flex account_login-area">
                <li>
                  <i className="fa fa-clock-o" aria-hidden="true"></i>
                  {t("contactHours.hoursLabel")} {t("contactHours.hours")}
                </li>
                <li>
                  <i className="fa fa-map-marker"></i>
                  {t("contactHours.address")}
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 d-flex justify-content-center">
              <div className="btn-style">
                <Link to="/contact">{t("contactHours.title")}</Link>
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
                    <li className="language-switcher">
                      <select
                        value={i18n.language}
                        onChange={(e) => i18n.changeLanguage(e.target.value)}
                      >
                        <option value="ru">Ru</option>
                        <option value="kg">KG</option>
                        <option value="en">EN</option>
                      </select>
                    </li>
                    <li>
                      <NavLink to="/" exact activeClassName="active">
                        {t("navHome")}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/about"
                        className={({ isActive }) => (isActive ? "active" : "")}
                      >
                        {t("navAbout")}
                      </NavLink>
                    </li>
                    <li className="has-submenu">
                      <NavLink
                        to="/practice"
                        className={({ isActive }) => (isActive ? "active" : "")}
                      >
                        {t("navServices")} <i className="fa fa-angle-down"></i>
                      </NavLink>
                      <ul className="submenu">
                        <li>
                          <NavLink to="/practice-details/1">
                            {t("navSubServices1")}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/practice-details/2">
                            {t("navSubServices2")}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/practice-details/3">
                            {" "}
                            {t("navSubServices3")}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/practice-details/4">
                            {t("navSubServices4")}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/practice-details/5">
                            {t("navSubServices5")}
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <NavLink
                        to="/case-stadies"
                        className={({ isActive }) => (isActive ? "active" : "")}
                      >
                        {t("navComments")}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/blog-fullwidth"
                        className={({ isActive }) => (isActive ? "active" : "")}
                      >
                        {t("navBlog")}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/contact"
                        className={({ isActive }) => (isActive ? "active" : "")}
                      >
                        {t("navContact")}
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            {/* <nav>
                            <button onClick={() => i18n.changeLanguage('en')}>EN</button>
                            <button onClick={() => i18n.changeLanguage('ru')}>RU</button>
                            <button onClick={() => i18n.changeLanguage('kg')}>KG</button>

                            <h1>{t('welcome')}</h1>
                            <a href="/contact">{t('contact')}</a>
                        </nav> */}
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
