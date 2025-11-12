import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { supabase } from "../../integrationSupabase/client";
import blog4 from "../../images/da7ed7b0-5f66-4f97-a610-51100d3b9fd2.jpg";
import noPhoto from "../../images/blog-page/no-photo.png";

import "./style.css";

const BlogDetailFullwidth = () => {
    const { id } = useParams();
    const history = useHistory();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchPost();
    }, [id]);

    const fetchPost = async () => {
        try {
            setLoading(true);
            const { data, error } = await supabase
                .from("posts")
                .select("*")
                .eq("id", id)
                .single();

            if (error) {
                throw error;
            }

            if (!data) {
                throw new Error("Пост не найден");
            }

            setPost(data);
            setError(null);
        } catch (err) {
            console.error("Ошибка при загрузке поста:", err);
            setError("Не удалось загрузить пост");
            setPost(null);
        } finally {
            setLoading(false);
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("ru-RU", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    if (loading) {
        return (
            <div className="blog-page-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <p>Загрузка...</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (error || !post) {
        return (
            <div className="blog-page-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <p style={{ color: "red" }}>{error || "Пост не найден"}</p>
                            <button
                                onClick={() => history.push("/blog-fullwidth")}
                                style={{
                                    padding: "10px 20px",
                                    backgroundColor: "#333",
                                    color: "#fff",
                                    border: "none",
                                    borderRadius: "4px",
                                    cursor: "pointer",
                                    marginTop: "20px",
                                }}
                            >
                                Вернуться к новостям
                            </button>
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
                            <div className="blog-item">
                                <div style={{ marginBottom: "30px" }}>
                                    <Link
                                        to="/blog-fullwidth"
                                        style={{
                                            display: "inline-flex",
                                            alignItems: "center",
                                            color: "#333",
                                            textDecoration: "none",
                                            fontSize: "16px",
                                            padding: "8px 16px",
                                            border: "1px solid #ddd",
                                            borderRadius: "4px",
                                            transition: "all 0.3s ease",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.backgroundColor = "#f5f5f5";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.backgroundColor = "transparent";
                                        }}
                                    >
                                        ← Вернуться к новостям
                                    </Link>
                                </div>

                                <div className="blog-img" style={{ marginBottom: "30px" }}>
                                    <div
                                        className="blog-detail-img"
                                        style={{
                                            width: "100%",
                                            maxWidth: "800px",
                                            margin: "0 auto",
                                        }}
                                    >
                                        <img
                                            src={post.image_url || noPhoto}
                                            alt={post.title}
                                            style={{
                                                width: "100%",
                                                height: "auto",
                                                border: "2px solid #ddd",
                                                borderRadius: "4px",
                                                boxSizing: "border-box",
                                            }}
                                        />
                                    </div>
                                </div>

                                <div
                                    className="post-meta-container"
                                    style={{
                                        marginBottom: "30px",
                                        padding: "20px 0",
                                        borderBottom: "1px solid #eee",
                                    }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            flexWrap: "wrap",
                                            gap: "20px",
                                            justifyContent: "flex-start",
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                flexShrink: 0,
                                            }}
                                        >
                                            <img
                                                src={blog4}
                                                alt="Автор"
                                                style={{
                                                    width: "50px",
                                                    height: "50px",
                                                    borderRadius: "50%",
                                                    // border: '3px solid #c5a47e',
                                                    objectFit: "cover",
                                                    marginRight: "12px",
                                                }}
                                            />
                                            <span
                                                style={{
                                                    fontWeight: "600",
                                                    color: "#333",
                                                    fontSize: "16px",
                                                }}
                                            >
                                                By Senat Consulting
                                            </span>
                                        </div>

                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                color: "#666",
                                                fontSize: "14px",
                                            }}
                                        >
                                            {formatDate(post.created_at)}
                                        </div>
                                    </div>
                                </div>

                                <div className="blog-content-detail">
                                    <h1
                                        style={{
                                            fontSize: "32px",
                                            fontWeight: "bold",
                                            marginBottom: "30px",
                                            lineHeight: "1.3",
                                            color: "#333",
                                        }}
                                    >
                                        {post.title}
                                    </h1>

                                    <div
                                        style={{
                                            fontSize: "16px",
                                            lineHeight: "1.8",
                                            color: "#555",
                                            whiteSpace: "pre-wrap",
                                            wordWrap: "break-word",
                                        }}
                                    >
                                        {post.content}
                                    </div>
                                </div>

                                {post.additional_info && (
                                    <div
                                        style={{
                                            marginTop: "40px",
                                            padding: "20px",
                                            backgroundColor: "#f9f9f9",
                                            borderLeft: "4px solid #c5a47e",
                                            borderRadius: "4px",
                                        }}
                                    >
                                        <p
                                            style={{
                                                margin: 0,
                                                fontSize: "15px",
                                                lineHeight: "1.7",
                                                color: "#555",
                                            }}
                                        >
                                            {post.additional_info}
                                        </p>
                                    </div>
                                )}

                                <div style={{ marginTop: "50px", textAlign: "center" }}>
                                    <Link
                                        to="/blog-fullwidth"
                                        style={{
                                            display: "inline-block",
                                            padding: "12px 30px",
                                            backgroundColor: "#333",
                                            color: "#fff",
                                            textDecoration: "none",
                                            borderRadius: "4px",
                                            fontSize: "16px",
                                            transition: "all 0.3s ease",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.backgroundColor = "#c5a47e";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.backgroundColor = "#333";
                                        }}
                                    >
                                        Вернуться к списку новостей
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetailFullwidth;
