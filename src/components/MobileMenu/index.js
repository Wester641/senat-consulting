import React, { useState, useRef, useEffect } from "react";
import { Collapse, CardBody, Card } from "reactstrap";
import { Link } from "react-router-dom";

import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

import { useTranslation } from "react-i18next";

import "./style.css";
import address from "../../images/about/mobileaddress.jpg";

const MobileMenu = () => {
  const { i18n, t } = useTranslation();
  const [isMenuShow, setIsMenuShow] = useState(false);
  const [isOpenId, setIsOpenId] = useState(0);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langDropdownRef = useRef(null);

  const languages = [
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'kg', name: 'Кыргызча', flag: '🇰🇬' },
    { code: 'en', name: 'English', flag: '🇬🇧' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target)) {
        setIsLangOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code);
    setIsLangOpen(false);
  };

  const menuHandler = () => {
    setIsMenuShow(!isMenuShow);
  };

  const toggleOpen = (id) => {
    setIsOpenId(id === isOpenId ? 0 : id);
  };

  const menus = [
    {
      id: 1,
      title: t("navHome"),
      link: "/",
    },
    {
      id: 2,
      title: t("navAbout"),
      link: "/about",
    },
    {
      id: 3,
      title: t("navServices"),
      link: "/practice",
      submenu: [
        {
          id: 1,
          title: t("navSubServices1"),
          link: "/practice-details/1",
        },
        {
          id: 2,
          title: t("navSubServices2"),
          link: "/practice-details/2",
        },
        {
          id: 3,
          title: t("navSubServices3"),
          link: "/practice-details/3",
        },
        {
          id: 4,
          title: t("navSubServices4"),
          link: "/practice-details/4",
        },
        {
          id: 5,
          title: t("navSubServices5"),
          link: "/practice-details/5",
        },
      ],
    },
    {
      id: 4,
      title: t("navComments"),
      link: "/case-stadies",
    },

    {
      id: 5,
      title: t("navBlog"),
      link: "/blog-fullwidth",
    },
    {
      id: 6,
      title: t("navContact"),
      link: "/contact",
    },
  ];

  return (
    <div>
      <PerfectScrollbar>
        <div className={`mobileMenu ${isMenuShow ? "show" : ""}`}>
          <ul className="responsivemenu">
            <li className="mobile-language-switcher">
              <div className="language-switcher-modern mobile" ref={langDropdownRef}>
                <button 
                  className="lang-button-modern"
                  onClick={() => setIsLangOpen(!isLangOpen)}
                >
                  <span className="lang-flag">{currentLanguage.flag}</span>
                  <span className="lang-code-modern">{currentLanguage.code.toUpperCase()}</span>
                  <svg 
                    className={`lang-chevron ${isLangOpen ? 'open' : ''}`}
                    width="12" 
                    height="12" 
                    viewBox="0 0 12 12" 
                    fill="none"
                  >
                    <path 
                      d="M2 4L6 8L10 4" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {isLangOpen && (
                  <div className="lang-dropdown-modern mobile">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        className={`lang-option-modern ${i18n.language === lang.code ? 'active' : ''}`}
                        onClick={() => handleLanguageChange(lang.code)}
                      >
                        <span className="lang-flag">{lang.flag}</span>
                        <span className="lang-name-modern">{lang.name}</span>
                        {i18n.language === lang.code && (
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="lang-check-icon">
                            <path 
                              d="M13 4L6 11L3 8" 
                              stroke="#ff7b00" 
                              strokeWidth="2" 
                              strokeLinecap="round" 
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </li>

            {menus.map((item) => {
              return (
                <li key={item.id}>
                  {item.submenu ? (
                    <p onClick={() => toggleOpen(item.id)}>
                      {item.title}
                      {item.submenu ? (
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      ) : (
                        ""
                      )}
                    </p>
                  ) : (
                    <Link to={item.link}>{item.title}</Link>
                  )}
                  {item.submenu ? (
                    <Collapse isOpen={item.id === isOpenId}>
                      <Card>
                        <CardBody>
                          <ul>
                            {item.submenu.map((submenu) => (
                              <li key={submenu.id}>
                                <Link className="active" to={submenu.link}>
                                  {submenu.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </CardBody>
                      </Card>
                    </Collapse>
                  ) : (
                    ""
                  )}
                </li>
              );
            })}
            <div className="mobile-map-container">
              <h3 className="map-address-title">{t("contactHours.address")}</h3>
              <a
                href="https://2gis.kg/bishkek/geo/70030076493877457/74.618063%2C42.878776?m=74.618691%2C42.878209%2F18.24"
                target="_blank"
                rel="noopener noreferrer"
                className="map-link"
              >
                <img
                  src={address}
                  alt="Адрес компании - Улица Ибраимова, 103/1а, Бишкек"
                  className="map-image"
                />
              </a>
            </div>
          </ul>
        </div>
      </PerfectScrollbar>
      <div className="showmenu" onClick={menuHandler}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
    </div>
  );
};

export default MobileMenu;
