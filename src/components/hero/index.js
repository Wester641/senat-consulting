import React, { Component } from "react";
import Slider from "react-slick";
import { withTranslation } from "react-i18next";
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './style.css'

class SimpleSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadedSlides: [0]
        };
    }

    handleBeforeChange = (current, next) => {
        this.setState(prevState => {
            const newLoaded = new Set(prevState.loadedSlides);
            newLoaded.add(next);
            if (next + 1 <= 2) newLoaded.add(next + 1);
            return { loadedSlides: Array.from(newLoaded) };
        });
    }

    render() {
        const { t, onClick } = this.props;
        const { loadedSlides } = this.state;
        
        const settings = {
          dots: true,
          arrows: true,
          speed: 3300,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2500,
          fade: true,
          beforeChange: this.handleBeforeChange,
          lazyLoad: 'progressive'
        };

        return (
            <section className="hero hero-slider-wrapper hero-style-1">
            <div className="hero-slider">
              <Slider {...settings}>
                <div className={`slide slide2 ${loadedSlides.includes(0) ? 'loaded' : ''}`}>
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
    
                <div className={`slide slide3 ${loadedSlides.includes(1) ? 'loaded' : ''}`}>
                  <div className="container">
                    <div className="row">
                      <div className="col col-lg-8 slide-caption">
                        <h2>{t("slide2.title")}</h2>
                        <p>{t("slide2.text")}</p>
                        <div className="btns">
                          <div className="btn-style">
                            <Link onClick={onClick}>{t("slide3.btn")}</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
    
                <div className={`slide slide1 ${loadedSlides.includes(2) ? 'loaded' : ''}`}>
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

export default withTranslation()(SimpleSlider);