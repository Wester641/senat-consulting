import React from 'react';
import { Link } from 'react-router-dom'
import blog1 from '../../images/blog-page/7.jpg'
import blog4 from '../../images/blog-page/6.jpg'
const BlogFullWidth = () => {
    return (
        <div className="blog-page-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-12">
                        <div className="blog-left-bar">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <div className="blog-s2">
                                        <img src={blog1} alt="" />
                                    </div>
                                    <ul className="post-meta">
                                        <li><img src={blog4} alt="" /></li>
                                        <li><Link to="/blog-single">By Aliza anne</Link></li>
                                        <li className="clr">Суды и споры</li>
                                        <li>Oct 12,2018</li>
                                    </ul>
                                </div>
                                <div className="blog-content-2">
                                    <h2>Что адвокат может сделать для вас</h2>
                                    <p>Профессиональный адвокат поможет вам разобраться в сложных юридических вопросах и защитить ваши права в суде. Опыт и знание законодательства позволяют специалисту предвидеть возможные проблемы и предложить наиболее эффективное решение. Многие люди боятся судебных процессов, но с помощью грамотного юриста вы сможете чувствовать себя защищённо и уверенно на протяжении всего разбирательства.</p>
                                    <Link to="#">читать далее..</Link>
                                </div>
                            </div>
                            <div className="blog-item blog-item-2">
                                <div className="blog-img blog-img-2">
                                    <div className="blog-s2">
                                        <div className="blog-content-3">
                                            <ul className="post-meta">
                                                <li><img src={blog4} alt="" /></li>
                                                <li><Link to="/blog-single">By Aliza anne</Link></li>
                                                <li className="clr">Суды и споры</li>
                                                <li>Oct 12,2018</li>
                                            </ul>
                                            <h2>Разрешение споров: ваши возможности</h2>
                                            <p>Судебный процесс требует специальных знаний и подготовки. Юридическая консультация поможет вам понять, какие действия предпринять при возникновении конфликта с другой стороной. Правильная подготовка документов и понимание процедуры судопроизводства могут существенно повлиять на результат вашего дела и защитить ваши интересы.</p>
                                            <Link to="#">читать далее..</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BlogFullWidth;