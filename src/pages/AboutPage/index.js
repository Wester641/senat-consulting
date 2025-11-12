import React from 'react';
import { useTranslation } from 'react-i18next';

// components
import Navbar from '../../components/Navbar'
import Breadcumb from '../../components/breadcumb'
import AboutSection from '../../components/about'
import PracticeArea from '../../components/PracticeArea'
import Testimonial from '../../components/testimonial'
import FooterSection from '../../components/Footer'
import { useEffect } from 'react';


const AboutPage = () => {
    const { t } = useTranslation();
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="about-layout">
            <Navbar />
            <Breadcumb bdtitle={t('pages.AboutPageTitle')} bdsub={t('pages.AboutPageSubTitle')} />
            <AboutSection />
            <PracticeArea />
            <Testimonial />
            <FooterSection />
        </div>
    )
}

export default AboutPage;