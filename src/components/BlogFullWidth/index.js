import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import { supabase } from '../../integrationSupabase/client';
import defaultImage from '../../images/da7ed7b0-5f66-4f97-a610-51100d3b9fd2.jpg'
import noPhoto from '../../images/blog-page/no-photo.png'
import video from '../../images/blog-page/video.mp4'

import './style.css';

const BlogFullWidth = () => {
    const { t } = useTranslation();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [modalOpen, setModalOpen] = useState(false);
    const itemsPerPage = 10;

    const videoRef = useRef(null);
    const modalVideoRef = useRef(null);

    useEffect(() => {
        fetchPosts();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (videoRef.current) {
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
    }, []);

    const fetchPosts = async () => {
        try {
            setLoading(true);
            const { data, error } = await supabase
                .from('posts')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) {
                throw error;
            }

            setPosts(data || []);
            setError(null);
            setCurrentPage(1);
        } catch (err) {
            console.error('Ошибка при загрузке новостей:', err);
            setError('Не удалось загрузить новости');
            setPosts([]);
        } finally {
            setLoading(false);
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('ru-RU', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    const truncateText = (text, maxLength = 200) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    };

    const openModal = () => {
        setModalOpen(true);
        if (videoRef.current) {
            videoRef.current.pause();
        }
        setTimeout(() => {
            if (modalVideoRef.current) {
                modalVideoRef.current.play();
            }
        }, 100);
    };

    const closeModal = () => {
        setModalOpen(false);
        if (modalVideoRef.current) {
            modalVideoRef.current.pause();
            modalVideoRef.current.currentTime = 0;
        }
    };

    const totalPages = Math.ceil(posts.length / itemsPerPage);
    const startIdx = (currentPage - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;
    const currentPosts = posts.slice(startIdx, endIdx);

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handlePageClick = (pageNum) => {
        setCurrentPage(pageNum);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (loading) {
        return (
            <div className="blog-page-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <p>{t("BlogPage.loading")}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="blog-page-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <p style={{ color: 'red' }}>{error}</p>
                            <button onClick={fetchPosts}>{t("BlogPage.error")}</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="blog-page-area section-padding">
            <div className="container">
                <div className="row events-section">
                    <div className="col-lg-12">
                        <div className="events-header">
                            <h2 className="events-title">
                                {t("BlogPage.pageTitle")}
                            </h2>
                            <div className="events-divider"></div>
                        </div>

                        <div className="events-video-wrapper">
                            <div className="events-video-container" onClick={openModal}>
                                <video
                                    ref={videoRef}
                                    src={video}
                                    muted
                                    loop
                                    playsInline
                                    className="events-video"
                                />
                                <div className="events-play-button">
                                    <div className="events-play-icon"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {modalOpen && (
                    <div className="events-modal" onClick={closeModal}>
                        <button className="events-modal-close">
                            ×
                        </button>
                        <video
                            ref={modalVideoRef}
                            src={video}
                            controls
                            autoPlay
                            className="events-modal-video"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                )}

                <div className="events-header">
                    <h2 className="events-title">
                        {t("BlogPage.pageSubTitle")}
                    </h2>
                    <div className="events-divider"></div>
                </div>

                <div className="row">
                    <div className="col-lg-12 col-md-12 col-12">
                        <div className="blog-left-bar">
                            {posts.length > 0 ? (
                                <>
                                    {currentPosts.map((post) => (
                                        <div
                                            key={post.id}
                                            className="blog-item"
                                            style={{ marginBottom: '40px' }}
                                        >
                                            <div className="blog-img">
                                                <div className="blog-s2">
                                                    <img
                                                        src={post.image_url || noPhoto}
                                                        alt={post.title}
                                                        style={{
                                                            width: '100%',
                                                            height: 'auto',
                                                            border: '2px solid #ddd',
                                                            borderRadius: '4px',
                                                            boxSizing: 'border-box'
                                                        }}
                                                    />
                                                </div>
                                                <ul className="post-meta">
                                                    <li className="post-meta-author">
                                                        <img
                                                            src={defaultImage}
                                                            alt="Senat Consulting"
                                                            className="post-meta-avatar"
                                                        />
                                                        <span>By Senat Consulting</span>
                                                    </li>
                                                    <li className="post-meta-date">
                                                        {formatDate(post.created_at)}
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="blog-content-2">
                                                <h2>
                                                    <Link to={`/blog-single-fullwidth/${post.id}`}>
                                                        {post.title}
                                                    </Link>
                                                </h2>
                                                <p>{truncateText(post.content)}</p>
                                            </div>
                                        </div>
                                    ))}

                                    <div className="pagination">
                                        <button
                                            onClick={handlePrevious}
                                            disabled={currentPage === 1}
                                            className="pagination-button"
                                        >
                                            ←
                                        </button>

                                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                                            <button
                                                key={pageNum}
                                                onClick={() => handlePageClick(pageNum)}
                                                className={`pagination-page ${currentPage === pageNum ? 'active' : ''}`}
                                            >
                                                {pageNum}
                                            </button>
                                        ))}

                                        <button
                                            onClick={handleNext}
                                            disabled={currentPage === totalPages}
                                            className="pagination-button"
                                        >
                                            →
                                        </button>
                                    </div>

                                    <div className="pagination-info">
                                        {t("BlogPage.Page")} {currentPage} {t("BlogPage.of")} {totalPages}
                                    </div>
                                </>
                            ) : (
                                <p>{t("BlogPage.noPosts")}</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogFullWidth;