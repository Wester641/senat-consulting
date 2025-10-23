import React from 'react';
import VideoModal from '../ModalVideo'
import { Link } from 'react-router-dom'
import abimg1 from '../../images/about/img-2.png'
import abimg2 from '../../images/about/img-1.png'

import './style.css'

const AboutSection = () => {

    return (
        <div className="about-style-2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-12 col-m">
                        <div className="about-img">
                            <img src={abimg1} alt="" />
                            <VideoModal />
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="about-content">
                            <div className="section-title">
                                <h2>О нас</h2>
                            </div>
                            <p>
                                <h1 className="company-title">Senat Consulting — юридическая и консалтинговая компания </h1>
                                объединяющая опытных юристов и специалистов по организации проектов. Мы внимательно изучаем каждый кейс, разрабатываем стратегию и доводим дело до результата — от переговоров и подготовки документов до судебных решений.
                            </p>
                            <p>Мы работаем по принципу оплаты только за результат: никаких предоплат и скрытых сборов. Наши специалисты глубоко понимают юридические процессы, включая участие в подготовке и анализе нормативных актов, что позволяет находить оптимальные решения для клиентов.</p>
                            <div className="btns">
                                <div className="btn-style"><Link to={"/about"}  > Подробнее о нас…</Link></div>
                            </div>
                            <div className="signature">
                                <img src={abimg2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )

}

export default AboutSection;
