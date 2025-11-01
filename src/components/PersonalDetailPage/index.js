import React from "react"; // Component больше не нужен
import { Link } from "react-router-dom";
import ContactForm2 from "../CommentForm2";
import "./style.css";

import cd_5 from "../../images/studies/1.jpg";
import cd_6 from "../../images/studies/2.jpg";
import cd_7 from "../../images/studies/3.jpg";

const PersonalDetailPage = () => {
  return (
    <div className="Attorneys-content-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="Attorneys-area">
              <div className="container att-s">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="Attorneys-info">
                      <div className="Attorneys-content">
                        <h3>Женишбек Жунусов</h3>
                      </div>
                      <div className="info-outer">
                        <ul className="info">
                          <li>
                            {/* Обновлено: Должность */}
                            <span>Positon: </span> Директор / Руководитель
                          </li>
                          <li>
                            {/* Обновлено: Сфера деятельности */}
                            <span>Practice Area: </span>Юриспруденция,
                            Международные отношения, Государственное управление
                          </li>

                          <li>
                            <span>Address: </span>Ибраимова 103/1 а, Бишкек,
                            Кыргызстан
                          </li>
                          <li>
                            <span>Phone: </span>+996 (707) 967-711
                          </li>
                          <li>
                            <span>Email: </span>guljamal.muni@gmail.com
                          </li>
                        </ul>
                        <ul className="social">
                          <li>
                            <Link to="/">
                              <i className="fa fa-facebook"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <i className="fa fa-instagram"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <i className="fa fa-whatsapp"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <i
                                className="fa fa-google-plus"
                                aria-hidden="true"
                              ></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="exrienense-img">
              <img
                src="https://res.cloudinary.com/dgi7dckle/image/upload/v1761908516/premium-frame-mockup-with-an-interior-in-the-style-2024-11-26-19-09-45-utc_%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F_ypkpl9.jpg"
                alt="Фото руководителя"
              />
            </div>
            <div className="exrienense-section">
              <h2>Профессиональный Опыт</h2>
              <p>
                Профессиональный путь Женишбека Жунусова охватывает ключевые
                направления государственной службы, дипломатии и правовой сферы.
                Он является директором юридической компании «Сенат Консалтинг»,
                предоставляющей квалифицированные юридические, бизнес- и
                консалтинговые услуги.
              </p>
              <p>
                Опыт работы в сфере международных отношений, государственного
                управления и юриспруденции позволил ему глубоко понимать
                правовые и организационные процессы как внутри страны, так и на
                международной арене. За высокий профессионализм удостоен звания
                “Отличник государственной службы Кыргызской Республики”.
              </p>
            </div>

            <div className="education-section">
              <h2>Образование</h2>

              <span>
                <i className="fa fa-caret-right" aria-hidden="true"></i>
                Магистр юриспруденции (Кыргызская государственная юридическая
                академия)
              </span>
              <span>
                <i className="fa fa-caret-right" aria-hidden="true"></i>
                Магистр международных отношений (Дипломатическая академия МИД
                РФ)
              </span>

              <span>
                <i className="fa fa-caret-right" aria-hidden="true"></i>
                Международные отношения (Кыргызско-Российский Славянский
                университет)
              </span>

              <span>
                <i className="fa fa-caret-right" aria-hidden="true"></i>
                Алма-Атинское высшее общевойсковое командное училище им. Маршала
                И.С. Конева
              </span>
            </div>

            <div className="language">
              <h2>Опыт Государственной Службы</h2>
              {/* Обновлено: Секретарь Посольства */}
              <p>
                Министерство иностранных дел Кыргызской Республики: Первый
                секретарь Посольства КР в Монголии.
              </p>
              {/* Обновлено: Эксперт Жогорку Кенеша */}
              <p>
                Жогорку Кенеш Кыргызской Республики: Эксперт комитетов по
                международным делам, обороне, безопасности и миграции, а также
                эксперт отдела обработки и выпуска нормативно-правовых актов.
              </p>
            </div>

            <h2>Основные направления «Сенат Консалтинг»</h2>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="studies-item">
                  <div className="studies-single">
                    <img src={cd_5} alt="" />
                  </div>
                  <div className="overlay-text">
                    <div className="text-inner">
                      <p className="sub">Консалтинг</p>
                      <h3>Бизнес-услуги</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="studies-item">
                  <div className="studies-single">
                    <img src={cd_6} alt="" />
                  </div>
                  <div className="overlay-text">
                    <div className="text-inner">
                      <p className="sub">Юриспруденция</p>
                      <h3>Правовые услуги</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="studies-item">
                  <div className="studies-single">
                    <img src={cd_7} alt="" />
                  </div>
                  <div className="overlay-text">
                    <div className="text-inner">
                      <p className="sub">Стратегия</p>
                      <h3>Организационные процессы</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="contact-area contact-area-2">
                <h2>Связаться с нами</h2>
                <ContactForm2 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetailPage;
