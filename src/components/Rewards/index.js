import React, { Component } from 'react';
import Slider from "react-slick";
import './style.css'
import img1 from "../../images/rewards/1.jpeg"
import img2 from "../../images/rewards/2.jpeg"
import img3 from "../../images/rewards/3.jpeg"
import img4 from "../../images/rewards/4.jpeg"
import img5 from "../../images/rewards/5.jpeg"
import img6 from "../../images/rewards/6.jpeg"
import img7 from "../../images/rewards/7.jpeg"
import img8 from "../../images/rewards/8.jpeg"
import img9 from "../../images/rewards/9.jpeg"
import img10 from "../../images/rewards/10.jpeg"
import img11 from "../../images/rewards/11.jpeg"
import img12 from "../../images/rewards/12.jpeg"

class Rewards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            currentImage: null
        };
    }

    openModal = (image) => {
        this.setState({
            isModalOpen: true,
            currentImage: image
        });
        document.body.style.overflow = 'hidden';
    }

    closeModal = () => {
        this.setState({
            isModalOpen: false,
            currentImage: null
        });
        document.body.style.overflow = 'auto';
    }

    handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            this.closeModal();
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
    }

    render() {
        const { isModalOpen, currentImage } = this.state;

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        };

        const rewards = [
            { id: 1, img: img1 },
            { id: 2, img: img2 },
            { id: 3, img: img3 },
            { id: 4, img: img4 },
            { id: 5, img: img5 },
            { id: 6, img: img6 },
            { id: 7, img: img7 },
            { id: 8, img: img8 },
            { id: 9, img: img9 },
            { id: 10, img: img10 },
            { id: 11, img: img11 },
            { id: 12, img: img12 },
        ];

        return (
            <div className="rewards-section">
                <div className="rewards-container">
                    <h2 className="rewards-title">Наши Награды</h2>
                    <Slider {...settings} className="rewards-slider">
                        {rewards.map((reward) => (
                            <div key={reward.id} className="reward-slide">
                                <div className="reward-card">
                                    <div className="reward-image-wrapper">
                                        <img 
                                            src={reward.img} 
                                            alt="Награда"
                                            className="reward-image"
                                            onClick={() => this.openModal(reward.img)}
                                            style={{ cursor: 'pointer' }}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>

                    {isModalOpen && (
                        <div className="modal-overlay" onClick={this.closeModal}>
                            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                <button 
                                    className="modal-close"
                                    onClick={this.closeModal}
                                    aria-label="Закрыть"
                                >
                                    ×
                                </button>
                                <img 
                                    src={currentImage} 
                                    alt="Награда"
                                    className="modal-image"
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Rewards;