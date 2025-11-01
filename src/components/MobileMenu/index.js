import React, { useState } from "react";
import { Collapse, CardBody, Card } from "reactstrap";
import { Link } from "react-router-dom";

import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

import { useTranslation } from "react-i18next";

import "./style.css";
import address from "../../images/about/mobileaddress.jpg";

const menus = [
  {
    id: 1,
    title: "Главная",
    link: "/",
  },
  {
    id: 2,
    title: "О компании",
    link: "/about",
  },
  {
    id: 3,
    title: "Наши услуги",
    link: "/practice",
    submenu: [
      {
        id: 1,
        title: "Суды и споры",
        link: "/practice-details",
      },
      {
        id: 2,
        title: "Регистрация бизнеса",
        link: "/practice-details",
      },
      {
        id: 3,
        title: "Договоры",
        link: "/practice-details",
      },
      {
        id: 4,
        title: "Сопровождение бизнеса",
        link: "/practice-details",
      },
      {
        id: 5,
        title: "Организация проектов и фестивалей",
        link: "/practice-details",
      },
    ],
  },
  {
    id: 4,
    title: "Отзывы",
    link: "/case-stadies",
  },

  {
    id: 5,
    title: "Новости",
    link: "/blog-fullwidth",
  },
  {
    id: 6,
    title: "Контакты",
    link: "/contact",
  },
];

const MobileMenu = () => {
  const [isMenuShow, setIsMenuShow] = useState(false);
  const [isOpenId, setIsOpenId] = useState(0);

  const { i18n } = useTranslation();

  const menuHandler = () => {
    setIsMenuShow(!isMenuShow);
  };

  const toggleOpen = (id) => {
    setIsOpenId(id === isOpenId ? 0 : id);
  };

  return (
    <div>
      <PerfectScrollbar>
        <div className={`mobileMenu ${isMenuShow ? "show" : ""}`}>
          <ul className="responsivemenu">
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
              <h3 className="map-address-title">
                Улица Ибраимова, 103/1а, Бишкек
              </h3>
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
          <div className="language-switcher-mobile">
            <select
              value={i18n.language}
              onChange={(e) => i18n.changeLanguage(e.target.value)}
            >
              <option value="ru">RU</option>
              <option value="kg">KG</option>
              <option value="en">EN</option>
            </select>
          </div>
        </div>
      </PerfectScrollbar>
      <div className="showmenu" onClick={menuHandler}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
    </div>
  );
};

export default MobileMenu;
