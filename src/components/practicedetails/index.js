import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import pr_1 from "../../images/practice/1.jpg";
import "./style.css";

const PracticDetails = ({
  bottomImage,
  details1,
  details2,
  mainImage,
  h1,
  h5,
}) => {
  const { t } = useTranslation();
  return (
    <div className="practice-details-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12 col-12 p-p">
            <div className="row">
              <div className="col-lg-12 col-md-6 col-12">
                <div className="field-section">
                  <div className="field-content">
                    <h3>
                      <span>8</span> {t("servicesPage.expire")}
                    </h3>
                    <div className="btns">
                      <div className="btn-style">
                        <Link to="/contact">{t("servicesPage.contactButton")}</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-6 col-12">
                <div className="practice-catagory-item">
                  <div className="widget-title">
                    <h3 className="text-left">{t("servicesPage.category")}</h3>
                  </div>
                  <div className="practice-section">
                    <ul>
                      <li>
                        <Link to="/practice-details/1">
                          {t("navSubServices1")}
                        </Link>
                      </li>
                      <li>
                        <Link to="/practice-details/2">
                          {t("navSubServices2")}
                        </Link>
                      </li>
                      <li>
                        <Link to="/practice-details/3">
                          {t("navSubServices3")}
                        </Link>
                      </li>
                      <li>
                        <Link to="/practice-details/4">
                          {t("navSubServices4")}
                        </Link>
                      </li>
                      <li>
                        <Link to="/practice-details/5">
                          {t("navSubServices5")}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8 col-12">
            <div className="practice-section-img">
              <img src={mainImage} alt="" />
            </div>
            <div className="practice-section-text">
              <h2>{h1}</h2>
              <h5>{h5}</h5>
              <p>{details1}</p>
              <p>{details2}</p>
            </div>

            <div className="organigation-area">
              <div className="organaigation-img">
                <img src={bottomImage} alt="" />
              </div>
              <div className="organigation-text">
                <h2>{t("servicesPage.subtitle")}</h2>
                <span>
                  <i className="fa fa-check-square-o" aria-hidden="true"></i>{" "}
                  {t("navSubServices1")}
                </span>
                <span>
                  <i className="fa fa-check-square-o" aria-hidden="true"></i>{" "}
                  {t("navSubServices2")}
                </span>
                <span>
                  <i className="fa fa-check-square-o" aria-hidden="true"></i>{" "}
                  {t("navSubServices3")}
                </span>
                <span>
                  <i className="fa fa-check-square-o" aria-hidden="true"></i>{" "}
                  {t("navSubServices4")}
                </span>
                <span>
                  <i className="fa fa-check-square-o" aria-hidden="true"></i>{" "}
                  {t("navSubServices5")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticDetails;
