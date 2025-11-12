import React from "react";
import { Link } from "react-router-dom";

import pr_1 from "../../images/practice/2.jpg";
const PracticDetails = ({
  bottomImage,
  details1,
  details2,
  mainImage,
  h1,
  h5,
}) => {
  // class PracticDetails extends Component {

  //   render() {
  // const { bottomImage, details1, details2, mainImage, h1, h5 } = this.props;
  return (
    <div className="practice-details-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12 col-12 p-p">
            <div className="row">
              <div className="col-lg-12 col-md-6 col-12">
                <div className="field-section">
                  <div className="field-img">
                    <img src={pr_1} alt="" />
                  </div>
                  <div className="field-content">
                    <h3>
                      <span>8</span> лет опыта в этой сфере
                    </h3>
                    <div className="btns">
                      <div className="btn-style">
                        <Link to="/contact">Связаться с нами</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-6 col-12">
                <div className="practice-catagory-item">
                  <div className="widget-title">
                    <h3 className="text-left">Категории</h3>
                  </div>
                  <div className="practice-section">
                    <ul>
                      <li>
                        <Link to="/practice-details/1">Суды и споры</Link>
                      </li>
                      <li>
                        <Link to="/practice-details/2">
                          Регистрация бизнеса
                        </Link>
                      </li>
                      <li>
                        <Link to="/practice-details/3">Договоры</Link>
                      </li>
                      <li>
                        <Link to="/practice-details/4">
                          Сопровождение бизнеса
                        </Link>
                      </li>
                      <li>
                        <Link to="/practice-details/5">
                          Организация проектов и фестивалей
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
                <h2>Наши направления работы</h2>
                <span>
                  <i className="fa fa-check-square-o" aria-hidden="true"></i>{" "}
                  Суды и споры
                </span>
                <span>
                  <i className="fa fa-check-square-o" aria-hidden="true"></i>{" "}
                  Регистрация бизнеса
                </span>
                <span>
                  <i className="fa fa-check-square-o" aria-hidden="true"></i>{" "}
                  Договоры
                </span>
                <span>
                  <i className="fa fa-check-square-o" aria-hidden="true"></i>{" "}
                  Сопровождение бизнеса
                </span>
                <span>
                  <i className="fa fa-check-square-o" aria-hidden="true"></i>{" "}
                  Организация проектов и фестивалей
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
