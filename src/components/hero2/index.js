import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ScrollFunction = () => {
  window.scroll({
    top: 4800,
    left: 0,
    behavior: "smooth",
  });
};

class SimpleSlider2 extends Component {
  render() {
    const { t, onClick } = this.props;
    const settings = {
      dots: true,
      arrows: true,
      speed: 1200,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      fade: true,
    };

    return (
      <section className="hero hero-slider-wrapper hero-style-1">
        <div className="hero-slider">
          <Slider {...settings}>
            <div className="slide2 slide">
              <div className="container">
                <div className="row">
                  <div className="col col-lg-8 slide-caption">
                    <h2>{t("slide3.title")}</h2>
                    <p>{t("slide3.text")}</p>
                    <div className="btns">
                      <div className="btn-style">
                        <Link onClick={onClick}>{t("slide2.btn")}</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="slide3 slide">
              <div className="container">
                <div className="row">
                  <div className="col col-lg-8 slide-caption">
                    <h2>{t("slide3.title")}</h2>
                    <p>{t("slide3.text")}</p>
                    <div className="btns">
                      <div className="btn-style">
                        <Link onClick={onClick}>{t("slide3.btn")}</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="slide1 slide">
              <div className="container">
                <div className="row">
                  <div className="col col-lg-8 slide-caption">
                    <h2>{t("slide1.title")}</h2>
                    <p>{t("slide1.text")}</p>
                    <div className="btns">
                      <div className="btn-style">
                        <Link onClick={onClick}>{t("slide1.btn")}</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    );
  }
}

export default withTranslation()(SimpleSlider2);
