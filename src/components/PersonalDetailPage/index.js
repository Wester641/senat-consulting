import React from "react";
import { Link } from "react-router-dom";
import ContactForm from "../CommentForm";
import "./style.css";
import { useTranslation } from "react-i18next";

import cd_5 from "../../images/studies/1.jpg";
import cd_6 from "../../images/studies/2.jpg";
import cd_7 from "../../images/studies/3.jpg";

const PersonalDetailPage = () => {
  const { t } = useTranslation();
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
                        <h3>{t("PersonalDetailPage.name")}</h3>
                      </div>
                      <div className="info-outer">
                        <ul className="info">
                          <li>
                            <span>{t("PersonalDetailPage.positionLabel")}: </span> 
                            {t("PersonalDetailPage.position")}
                          </li>
                          <li>
                            <span>{t("PersonalDetailPage.practiceAreaLabel")}: </span>
                            {t("PersonalDetailPage.practiceArea")}
                          </li>
                          <li>
                            <span>{t("PersonalDetailPage.addressLabel")}: </span>
                            {t("PersonalDetailPage.address")}
                          </li>
                          <li>
                            <span>{t("PersonalDetailPage.phoneLabel")}: </span>
                            {t("PersonalDetailPage.phone")}
                          </li>
                          <li>
                            <span>{t("PersonalDetailPage.emailLabel")}: </span>
                            {t("PersonalDetailPage.email")}
                          </li>
                        </ul>
                        <ul className="social">
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
                alt={t("PersonalDetailPage.photoAlt")}
              />
            </div>
            <div className="exrienense-section">
              <h2>{t("PersonalDetailPage.professionalExperience")}</h2>
              <p>{t("PersonalDetailPage.experienceText1")}</p>
              <p>{t("PersonalDetailPage.experienceText2")}</p>
            </div>

            <div className="education-section">
              <h2>{t("PersonalDetailPage.education")}</h2>
              <span>
                <i className="fa fa-caret-right" aria-hidden="true"></i>
                {t("PersonalDetailPage.education1")}
              </span>
              <span>
                <i className="fa fa-caret-right" aria-hidden="true"></i>
                {t("PersonalDetailPage.education2")}
              </span>
              <span>
                <i className="fa fa-caret-right" aria-hidden="true"></i>
                {t("PersonalDetailPage.education3")}
              </span>
              <span>
                <i className="fa fa-caret-right" aria-hidden="true"></i>
                {t("PersonalDetailPage.education4")}
              </span>
            </div>

            <div className="language">
              <h2>{t("PersonalDetailPage.governmentExperience")}</h2>
              <p>{t("PersonalDetailPage.governmentText1")}</p>
              <p>{t("PersonalDetailPage.governmentText2")}</p>
            </div>

            <h2>{t("PersonalDetailPage.mainDirections")}</h2>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="studies-item">
                  <div className="studies-single">
                    <img src={cd_5} alt="" />
                  </div>
                  <div className="overlay-text">
                    <div className="text-inner">
                      <p className="sub">{t("PersonalDetailPage.service1Sub")}</p>
                      <h3>{t("PersonalDetailPage.service1Title")}</h3>
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
                      <p className="sub">{t("PersonalDetailPage.service2Sub")}</p>
                      <h3>{t("PersonalDetailPage.service2Title")}</h3>
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
                      <p className="sub">{t("PersonalDetailPage.service3Sub")}</p>
                      <h3>{t("PersonalDetailPage.service3Title")}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="contact-area contact-area-2">
                <h2>{t("PersonalDetailPage.contactUs")}</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetailPage;