import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import Gallery_1 from '../../images/studies/1.jpg';
import Gallery_2 from '../../images/studies/2.jpg';
import Gallery_3 from '../../images/studies/3.jpg';
import Gallery_4 from '../../images/studies/4.jpg';
import Gallery_5 from '../../images/studies/5.jpg';
import Gallery_6 from '../../images/studies/6.jpg';

class Portfolio extends Component {
  state = {
    activeFilter: 'all',
  };

  setFilter = (filter, event) => {
    event.preventDefault();
    this.setState({ activeFilter: filter });
  };

  render() {
    const { activeFilter } = this.state;

    const isVisible = (filters) =>
      activeFilter === 'all' || filters.includes(activeFilter);

    return (
      <section id="portfolio" className="gallery-section studies-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12 sortable-gallery">
              <div className="gallery-filters">
                <div className="section-title-1 text-center">
                  <h2>Наши последние дела</h2>
                </div>
                <ul>
                  <li>
                    <Link
                      to="/"
                      className={activeFilter === 'all' ? 'current' : ''}
                      onClick={(e) => this.setFilter('all', e)}
                    >
                      Все
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className={activeFilter === 'family' ? 'current' : ''}
                      onClick={(e) => this.setFilter('family', e)}
                    >
                      Семейные дела
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className={activeFilter === 'real' ? 'current' : ''}
                      onClick={(e) => this.setFilter('real', e)}
                    >
                      Суды
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className={activeFilter === 'business' ? 'current' : ''}
                      onClick={(e) => this.setFilter('business', e)}
                    >
                      Бизнес
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="gallery-container gallery-fancybox masonry-gallery payra-masonary">

                {isVisible(['real']) && (
                  <div className="grid active">
                    <div className="studies-item">
                      <div className="studies-single">
                        <img src={Gallery_1} className="img img-responsive" alt="" />
                      </div>
                      <div className="overlay-text">
                        <div className="text-inner">
                          <p className="sub">«Не остановимся, пока не выиграем!»</p>
                          <h3>Суды и споры</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {isVisible(['business', ]) && (
                  <div className="grid active">
                    <div className="studies-item">
                      <div className="studies-single">
                        <img src={Gallery_2} className="img img-responsive" alt="" />
                      </div>
                      <div className="overlay-text">
                        <div className="text-inner">
                          <p className="sub">«Начните бизнес без головной боли!»</p>
                          <h3>Договоры</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {isVisible(['business']) && (
                  <div className="grid active">
                    <div className="studies-item">
                      <div className="studies-single">
                        <img src={Gallery_6} alt="" className="img img-responsive" />
                      </div>
                      <div className="overlay-text">
                        <div className="text-inner">
                          <p className="sub">«Создайте свой бизнес — мы поможем!»</p>
                          <h3>Регистрация компании</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {isVisible(['real', 'family']) && (
                  <div className="grid active">
                    <div className="studies-item">
                      <div className="studies-single">
                        <img src={Gallery_5} alt="" className="img img-responsive" />
                      </div>
                      <div className="overlay-text">
                        <div className="text-inner">
                          <p className="sub">«Ваше здоровье — наш приоритет.»</p>
                          <h3>Личная травма</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {isVisible(['business', 'real']) && (
                  <div className="grid active">
                    <div className="studies-item">
                      <div className="studies-single">
                        <img src={Gallery_3} alt="" className="img img-responsive" />
                      </div>
                      <div className="overlay-text">
                        <div className="text-inner">
                          <p className="sub">«Вы строите — мы страхуем риски.»</p>
                          <h3>Сопровождение бизнеса</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {isVisible(['business', 'family']) && (
                  <div className="grid active">
                    <div className="studies-item">
                      <div className="studies-single">
                        <img src={Gallery_4} alt="" className="img img-responsive" />
                      </div>
                      <div className="overlay-text">
                        <div className="text-inner">
                          <p className="sub">
                            Поможем выиграть тендер и провести мероприятие на высшем уровне.
                          </p>
                          <h3>Организация проектов и фестивалей</h3>
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
