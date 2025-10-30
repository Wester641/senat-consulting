import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Gallery_1 from "../../images/studies/1.jpg";
import Gallery_2 from "../../images/studies/2.jpg";
import Gallery_3 from "../../images/studies/3.jpg";
import Gallery_4 from "../../images/studies/4.jpg";
import Gallery_5 from "../../images/studies/5.jpg";
import Gallery_6 from "../../images/studies/6.jpg";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isVisible = (filters) =>
    activeFilter === "all" || filters.includes(activeFilter);

  return (
    <section
      id="portfolio"
      className="gallery-section studies-area section-padding"
    >
      <div className="container">
        <div className="row">
          <div className="col col-xs-12 sortable-gallery">
            <div className="gallery-filters">
              <div className="section-title-1 text-center">
                <h2>{t("portfolio.title")}</h2>
              </div>
              <ul>
                <li>
                  <Link
                    to="/"
                    className={activeFilter === "all" ? "current" : ""}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveFilter("all");
                    }}
                  >
                    {t("portfolio.allTitle")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className={activeFilter === "family" ? "current" : ""}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveFilter("family");
                    }}
                  >
                    {t("portfolio.familyTitle")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className={activeFilter === "real" ? "current" : ""}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveFilter("real");
                    }}
                  >
                    {t("portfolio.courtTitle")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className={activeFilter === "business" ? "current" : ""}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveFilter("business");
                    }}
                  >
                    {t("portfolio.businessTitle")}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="gallery-container gallery-fancybox masonry-gallery payra-masonary">
              {isVisible(["real"]) && (
                <div className="grid active">
                  <div className="studies-item">
                    <div className="studies-single">
                      <img src={Gallery_1} className="img img-responsive" alt="" />
                    </div>
                    <div className="overlay-text">
                      <div className="text-inner">
                        <p className="sub">{t("portfolio.case1Title")}</p>
                        <h3>{t("portfolio.case1Subtitle")}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {isVisible(["business"]) && (
                <>
                  <div className="grid active">
                    <div className="studies-item">
                      <div className="studies-single">
                        <img src={Gallery_2} className="img img-responsive" alt="" />
                      </div>
                      <div className="overlay-text">
                        <div className="text-inner">
                          <p className="sub">{t("portfolio.case2Title")}</p>
                          <h3>{t("navSubServices3")}</h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid active">
                    <div className="studies-item">
                      <div className="studies-single">
                        <img src={Gallery_6} className="img img-responsive" alt="" />
                      </div>
                      <div className="overlay-text">
                        <div className="text-inner">
                          <p className="sub">{t("portfolio.case3Title")}</p>
                          <h3>{t("portfolio.case3Subtitle")}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {isVisible(["real", "family"]) && (
                <div className="grid active">
                  <div className="studies-item">
                    <div className="studies-single">
                      <img src={Gallery_5} className="img img-responsive" alt="" />
                    </div>
                    <div className="overlay-text">
                      <div className="text-inner">
                        <p className="sub">{t("portfolio.case4Title")}</p>
                        <h3>{t("practiceArea.personalInjuryTitle")}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {isVisible(["business", "real"]) && (
                <div className="grid active">
                  <div className="studies-item">
                    <div className="studies-single">
                      <img src={Gallery_3} className="img img-responsive" alt="" />
                    </div>
                    <div className="overlay-text">
                      <div className="text-inner">
                        <p className="sub">{t("portfolio.case5Title")}</p>
                        <h3>{t("navSubServices4")}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {isVisible(["business", "family"]) && (
                <div className="grid active">
                  <div className="studies-item">
                    <div className="studies-single">
                      <img src={Gallery_4} className="img img-responsive" alt="" />
                    </div>
                    <div className="overlay-text">
                      <div className="text-inner">
                        <p className="sub">{t("portfolio.case6Title")}</p>
                        <h3>{t("navSubServices5")}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
