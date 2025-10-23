import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { supabase } from '../../integrationSupabase/client';
import defaultImage from '../../images/da7ed7b0-5f66-4f97-a610-51100d3b9fd2.jpg'
import noPhoto from '../../images/blog-page/no-photo.png'

import './style.css';

const BlogFullWidth = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        fetchPosts();
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
                            <p>Загрузка новостей...</p>
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
                            <button onClick={fetchPosts}>Повторить попытку</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="blog-page-area section-padding">
            <div className="container">
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
                                                <div className="blog-s2" style={{
                                                    width: "60%",
                                                }}>
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
                                                    <li>
                                                        <img
                                                            src={defaultImage}
                                                            alt=""
                                                            style={{
                                                                // border: '2px solid #ddd',
                                                                borderRadius: '4px'
                                                            }}
                                                        />
                                                    </li>
                                                    <li>By Senat Consulting</li>
                                                    <li>{formatDate(post.created_at)}</li>
                                                </ul>
                                            </div>
                                            <div className="blog-content-2">
                                                <h2>
                                                    <Link
                                                        to={`/blog-single-fullwidth/${post.id}`}
                                                        style={{
                                                            color: 'inherit',
                                                            textDecoration: 'none',
                                                            cursor: 'pointer'
                                                        }}
                                                    >
                                                        {post.title}
                                                    </Link>
                                                </h2>
                                                <p>{truncateText(post.content)}</p>
                                            </div>
                                        </div>
                                    ))}

                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        gap: '10px',
                                        marginTop: '40px',
                                        flexWrap: 'wrap'
                                    }}>
                                        <button
                                            onClick={handlePrevious}
                                            disabled={currentPage === 1}
                                            style={{
                                                padding: '8px 12px',
                                                cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                                                opacity: currentPage === 1 ? 0.5 : 1,
                                                border: '1px solid #ccc',
                                                borderRadius: '4px',
                                                backgroundColor: '#fff'
                                            }}
                                        >
                                            ← Назад
                                        </button>

                                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                                            <button
                                                key={pageNum}
                                                onClick={() => handlePageClick(pageNum)}
                                                style={{
                                                    padding: '8px 12px',
                                                    cursor: 'pointer',
                                                    border: currentPage === pageNum ? '2px solid #333' : '1px solid #ccc',
                                                    borderRadius: '4px',
                                                    backgroundColor: currentPage === pageNum ? '#333' : '#fff',
                                                    color: currentPage === pageNum ? '#fff' : '#000',
                                                    fontWeight: currentPage === pageNum ? 'bold' : 'normal'
                                                }}
                                            >
                                                {pageNum}
                                            </button>
                                        ))}

                                        <button
                                            onClick={handleNext}
                                            disabled={currentPage === totalPages}
                                            style={{
                                                padding: '8px 12px',
                                                cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                                                opacity: currentPage === totalPages ? 0.5 : 1,
                                                border: '1px solid #ccc',
                                                borderRadius: '4px',
                                                backgroundColor: '#fff'
                                            }}
                                        >
                                            Далее →
                                        </button>
                                    </div>

                                    <div style={{
                                        textAlign: 'center',
                                        marginTop: '20px',
                                        color: '#666',
                                        fontSize: '14px'
                                    }}>
                                        Страница {currentPage} из {totalPages}
                                    </div>
                                </>
                            ) : (
                                <p>Постов не найдено</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogFullWidth;