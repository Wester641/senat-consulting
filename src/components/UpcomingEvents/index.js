import React, { useState, useRef, useEffect } from 'react';
import video from '../../images/blog-page/video.webm';
import './style.css';

const UpcomingEvent = () => {
  const [showFloating, setShowFloating] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef(null);
  const modalVideoRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current && showFloating) {
        const rect = videoRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

        if (isVisible && videoRef.current.paused) {
          videoRef.current.play().catch(err => console.log('Autoplay prevented:', err));
        } else if (!isVisible && !videoRef.current.paused) {
          videoRef.current.pause();
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [showFloating]);

  const handleOpenModal = () => {
    setShowModal(true);
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setTimeout(() => {
      if (modalVideoRef.current) {
        modalVideoRef.current.muted = false;
        modalVideoRef.current.play();
      }
    }, 100);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
      modalVideoRef.current.currentTime = 0;
      modalVideoRef.current.muted = true;
    }
  };

  const handleCloseFloating = () => {
    setShowFloating(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <>
      {showFloating && (
        <div className={`floating-video ${isMobile ? 'floating-video-mobile' : ''}`}>
          <div className="floating-video-container">
            <video
              ref={videoRef}
              className="floating-video-player"
              muted
              loop
              playsInline
              autoplay
              preload="metadata"
              poster="/images/video-preview.jpg"
            >
              <source src={video} type="video/mp4" />
            </video>

            <button
              onClick={handleCloseFloating}
              className="floating-video-close"
              aria-label="Закрыть видео"
            >
              <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <button
              onClick={handleOpenModal}
              className="floating-video-expand"
              aria-label="Развернуть видео"
            >
              <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            </button>
          </div>
        </div >
      )}

      {
        showModal && (
          <div className="events-modal" onClick={handleCloseModal}>
            <button
              className="events-modal-close"
              onClick={handleCloseModal}
            >
              ×
            </button>
            <video
              ref={modalVideoRef}
              src={video}
              controls
              autoPlay
              muted={false}
              className="events-modal-video"
              onClick={(e) => e.stopPropagation()}
            />

          </div>
        )
      }
    </>
  );
};

export default UpcomingEvent;