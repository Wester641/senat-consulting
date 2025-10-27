import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Gallery_1 from "../../images/studies/1.jpg";
import Gallery_2 from "../../images/studies/2.jpg";
import Gallery_3 from "../../images/studies/3.jpg";
import Gallery_4 from "../../images/studies/4.jpg";
import Gallery_5 from "../../images/studies/5.jpg";
import Gallery_6 from "../../images/studies/6.jpg";

import { portfolioProps } from "../../utils/Props";

const galleryImages = {
  Gallery_1,
  Gallery_2,
  Gallery_3,
  Gallery_4,
  Gallery_5,
  Gallery_6,
};

class Portfolio extends Component {
  state = {
    activeFilter: "all",
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  setFilter = (filter, event) => {
    event.preventDefault();
    this.setState({ activeFilter: filter });
  };

  render() {
    const { activeFilter } = this.state;
    const { sectionTitle, filters, items } = portfolioProps;

    const isVisible = (itemFilters) =>
      activeFilter === "all" || itemFilters.includes(activeFilter);

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
                  <h2>{sectionTitle}</h2>
                </div>
                <ul>
                  <li>
                    <Link
                      to="/"
                      className={activeFilter === "all" ? "current" : ""}
                      onClick={(e) => this.setFilter("all", e)}
                    >
                      {filters.all}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className={activeFilter === "family" ? "current" : ""}
                      onClick={(e) => this.setFilter("family", e)}
                    >
                      {filters.family}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className={activeFilter === "real" ? "current" : ""}
                      onClick={(e) => this.setFilter("real", e)}
                    >
                      {filters.real}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className={activeFilter === "business" ? "current" : ""}
                      onClick={(e) => this.setFilter("business", e)}
                    >
                      {filters.business}
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="gallery-container gallery-fancybox masonry-gallery payra-masonary">

                {isVisible(items[0].filters) && (
                  <div className="grid active">
                    <div className="studies-item">
                      <div className="studies-single">
                        <img src={galleryImages[items[0].image]} alt="" className="img img-responsive"/>
                      </div>
                      <div className="overlay-text">
                        <div className="text-inner">
                          <p className="sub">{items[0].subtitle}</p>
                          <h3>{items[0].title}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {isVisible(items[1].filters) && (
                  <div className="grid active">
                    <div className="studies-item">
                      <div className="studies-single">
                        <img src={galleryImages[items[1].image]} alt="" className="img img-responsive"/>
                      </div>
                      <div className="overlay-text">
                        <div className="text-inner">
                          <p className="sub">{items[1].subtitle}</p>
                          <h3>{items[1].title}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {isVisible(items[2].filters) && (
                  <div className="grid active">
                    <div className="studies-item">
                      <div className="studies-single">
                        <img src={galleryImages[items[2].image]} alt="" className="img img-responsive"/>
                      </div>
                      <div className="overlay-text">
                        <div className="text-inner">
                          <p className="sub">{items[2].subtitle}</p>
                          <h3>{items[2].title}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {isVisible(items[3].filters) && (
                  <div className="grid active">
                    <div className="studies-item">
                      <div className="studies-single">
                        <img src={galleryImages[items[3].image]} alt="" className="img img-responsive"/>
                      </div>
                      <div className="overlay-text">
                        <div className="text-inner">
                          <p className="sub">{items[3].subtitle}</p>
                          <h3>{items[3].title}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {isVisible(items[4].filters) && (
                  <div className="grid active">
                    <div className="studies-item">
                      <div className="studies-single">
                        <img src={galleryImages[items[4].image]} alt="" className="img img-responsive"/>
                      </div>
                      <div className="overlay-text">
                        <div className="text-inner">
                          <p className="sub">{items[4].subtitle}</p>
                          <h3>{items[4].title}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {isVisible(items[5].filters) && (
                  <div className="grid active">
                    <div className="studies-item">
                      <div className="studies-single">
                        <img src={galleryImages[items[5].image]} alt="" className="img img-responsive"/>
                      </div>
                      <div className="overlay-text">
                        <div className="text-inner">
                          <p className="sub">{items[5].subtitle}</p>
                          <h3>{items[5].title}</h3>
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
  }
}

export default Portfolio;
