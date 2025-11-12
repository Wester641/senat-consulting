import React from 'react';
import { useTranslation } from 'react-i18next';

// components
import Navbar from '../../components/Navbar'
import Breadcumb from '../../components/breadcumb'

// import Porfolio from '../../components/case'
import FooterSection from '../../components/Footer'
import Testimonial from '../../components/testimonial/index';
import Testimonial2 from '../../components/testimonial/index2';
import { useEffect } from 'react';



const CaseStudiesPage = () => {
    const { t } = useTranslation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Navbar />
            <Breadcumb bdtitle={t('pages.CommentsPageTitle')} bdsub={t('pages.CommentsPageSubTitle')} />
            {/* <Porfolio/> */}
            <Testimonial />
            <Testimonial2 />
            <FooterSection />
        </div>
    )
}

export default CaseStudiesPage;