import React, { useState, useEffect, useCallback } from 'react';
import Slider from "react-slick";
import './style.css';
import { motion } from "framer-motion";

import img1 from "../../images/rewards/1.jpeg";
import img2 from "../../images/rewards/2.jpeg";
import img3 from "../../images/rewards/3.jpeg";
import img4 from "../../images/rewards/4.jpeg";
import img5 from "../../images/rewards/5.jpeg";
import img6 from "../../images/rewards/6.jpeg";
import img7 from "../../images/rewards/7.jpeg";
import img8 from "../../images/rewards/8.jpeg";
import img9 from "../../images/rewards/9.jpeg";
import img10 from "../../images/rewards/10.jpeg";
import img11 from "../../images/rewards/11.jpeg";
import img12 from "../../images/rewards/12.jpeg";
import award from "../../images/award2.svg"
import { useTranslation } from 'react-i18next';

const Rewards = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);


    const { t } = useTranslation()

    const openModal = (image) => {
        setIsModalOpen(true);
        setCurrentImage(image);
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentImage(null);
        document.body.style.overflow = "auto";
    };

    const handleKeyDown = useCallback((event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    }, []);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    const settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
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
            <motion.div
                className="rewards-bg"
                style={{
                    backgroundImage: `url(${award})`,
                    backgroundRepeat: "repeat",
                    backgroundSize: "50px 50px",
                }}
                animate={{
                    backgroundPosition: ["0% 0%", "-200% 300%"],
                }}
                transition={{
                    duration: 800,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear",
                }}
            />


            <div className="rewards-container">
                <h2 className="rewards-title">{t("rewardsSection.title")}</h2>

                <Slider {...settings} className="rewards-slider">
                    {rewards.map((reward) => (
                        <div key={reward.id} className="reward-slide">
                            <div className="reward-card">
                                <div className="reward-image-wrapper">
                                    <img
                                        src={reward.img}
                                        alt="Награда"
                                        className="reward-image"
                                        onClick={() => openModal(reward.img)}
                                        style={{ cursor: 'pointer' }}
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

                {isModalOpen && (
                    <div className="modal-overlay" onClick={closeModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <button className="modal-close" onClick={closeModal} aria-label="Закрыть">
                                ×
                            </button>
                            <img src={currentImage} alt="Награда" className="modal-image" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Rewards;
