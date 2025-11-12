import React from "react";
import VideoModal from "../ModalVideo";
import { Link } from "react-router-dom";
import abimg1 from "../../images/about/img-2.png";
import abimg2 from "../../images/about/img-1.png";
import { useTranslation } from "react-i18next";

import "./style.css";

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <div className="about-style-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12 col-m">
            <div className="about-img">
              <img src={abimg1} alt="" />
              <VideoModal />
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="about-content">
              <div className="section-title">
                <h2>{t("aboutSection.title")}</h2>
              </div>
              <p>
                <h1 className="company-title">
                  {t("aboutSection.companyName")}
                </h1>
                {t("aboutSection.companyDescription")}
              </p>
              <div className="btns">
                <div className="btn-style">
                  <Link to={"/personal-detail"}>
                    {t("aboutSection.learnMore")}
                  </Link>
                </div>
              </div>
              <div className="signature">
                <img src={abimg2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
