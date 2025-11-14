import React, { useState } from 'react'
import about from '../../images/blog-page/about.mp4'
import './style.css'

const VideoModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  const openModal = () => {
    setIsOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setIsOpen(false)
    setIsLoaded(false)
    document.body.style.overflow = 'auto'
  }

  return (
    <div>
      {isOpen && (
        <div className="video-modal-overlay" onClick={closeModal}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal-close" onClick={closeModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>

            {!isLoaded && (
              <div className="video-modal-loader">
                <div className="spinner"></div>
              </div>
            )}

            <div className="video-modal-wrapper">
              <video
                controls
                autoPlay
                preload="none"
                onLoadedData={() => setIsLoaded(true)}
                className={isLoaded ? 'video-loaded' : 'video-loading'}
              >
                <source src={about} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      )}

      <div className="video-btn">
        <ul>
          <li>
            <button className="wrap" onClick={openModal}>
              <i className="fa fa-play" aria-hidden="true"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default VideoModal