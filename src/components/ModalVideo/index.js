import React, { useState, useEffect, useRef } from 'react'
import about from '../../images/blog-page/about.mp4'
import './style.css'

const VideoModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [preloadProgress, setPreloadProgress] = useState(0)
  const videoRef = useRef(null)
  const preloadVideoRef = useRef(null)

  useEffect(() => {
    const preloadVideo = document.createElement('video')
    preloadVideo.preload = 'auto'
    preloadVideo.src = about
    preloadVideo.muted = true
    preloadVideo.playsInline = true
    preloadVideoRef.current = preloadVideo

    preloadVideo.addEventListener('progress', () => {
      if (preloadVideo.buffered.length > 0) {
        const percent = (preloadVideo.buffered.end(0) / preloadVideo.duration) * 100
        setPreloadProgress(percent)
      }
    })

    preloadVideo.addEventListener('loadeddata', () => {
      setIsLoaded(true)
    })

    preloadVideo.load()

    return () => {
      if (preloadVideoRef.current) {
        preloadVideoRef.current.src = ''
        preloadVideoRef.current = null
      }
    }
  }, [])

  const openModal = () => {
    setIsOpen(true)
    document.body.style.overflow = 'hidden'
    
    if (videoRef.current && isLoaded) {
      videoRef.current.currentTime = 0
      videoRef.current.play().catch(err => console.log('Autoplay prevented:', err))
    }
  }

  const closeModal = () => {
    setIsOpen(false)
    document.body.style.overflow = 'auto'
    
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
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
                <p>Загрузка {Math.round(preloadProgress)}%</p>
              </div>
            )}

            <div className="video-modal-wrapper">
              <video
                ref={videoRef}
                controls
                preload="auto"
                playsInline
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