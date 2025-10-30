import React from "react";

import pr1 from "../../images/icon/4.png";
import pr2 from "../../images/icon/5.png";
import pr3 from "../../images/icon/6.png";
import pr4 from "../../images/icon/7.png";
import pr5 from "../../images/icon/8.png";
import pr6 from "../../images/icon/9.png";

import { useTranslation } from "react-i18next";

import "./style.css";

const PracticeArea = (props) => {
  const { t } = useTranslation();

  return (
    <div className={`practice-area  ptb-100-70 ${props.subclass}`}>
      <div className="container">
        <div className="col-12">
          <div className="section-title-1 text-center">
            <span>{t("navServices")}</span>
            <h2>{t("practiceArea.sectionTitle")}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="practice-section">
              <div className="practices-wrapper">
                <div className="practices-icon-wrapper">
                  <div className="practice-dot">
                    <div className="dots"></div>
                  </div>
                  <i className="fi">
                    <img src={pr1} alt="" />
                  </i>
                </div>
                <div className="practice-content">
                  <h2>{t("practiceArea.legalTitle")}</h2>
                  <p>{t("practiceArea.legalText")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="practice-section">
              <div className="practices-wrapper">
                <div className="practices-icon-wrapper">
                  <div className="practice-dot">
                    <div className="dots dots-2"></div>
                  </div>
                  <i className="fi">
                    <img src={pr2} alt="" />
                  </i>
                </div>
                <div className="practice-content">
                  <h2>{t("practiceArea.personalInjuryTitle")}</h2>
                  <p>{t("practiceArea.personalInjuryText")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="practice-section">
              <div className="practices-wrapper">
                <div className="practices-icon-wrapper">
                  <div className="practice-dot">
                    <div className="dots"></div>
                  </div>
                  <i className="fi">
                    <img src={pr3} alt="" />
                  </i>
                </div>
                <div className="practice-content">
                  <h2>{t("navSubServices2")}</h2>
                  <p>{t("practiceArea.businessSetupText")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="practice-section">
              <div className="practices-wrapper">
                <div className="practices-icon-wrapper">
                  <div className="practice-dot">
                    <div className="dots"></div>
                  </div>
                  <i className="fi">
                    <img src={pr4} alt="" />
                  </i>
                </div>
                <div className="practice-content">
                  <h2>{t("navSubServices3")}</h2>
                  <p>{t("practiceArea.contractsText")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="practice-section">
              <div className="practices-wrapper">
                <div className="practices-icon-wrapper">
                  <div className="practice-dot">
                    <div className="dots"></div>
                  </div>
                  <i className="fi">
                    <img src={pr5} alt="" />
                  </i>
                </div>
                <div className="practice-content">
                  <h2>{t("navSubServices5")}</h2>
                  <p>{t("practiceArea.tendersText")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="practice-section">
              <div className="practices-wrapper">
                <div className="practices-icon-wrapper">
                  <div className="practice-dot">
                    <div className="dots"></div>
                  </div>
                  <i className="fi">
                    <img src={pr6} alt="" />
                  </i>
                </div>
                <div className="practice-content">
                  <h2>{t("navSubServices4")}</h2>
                  <p>{t("practiceArea.insuranceText")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeArea;
