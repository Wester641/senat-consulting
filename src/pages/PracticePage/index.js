import React from 'react';
import { useTranslation } from 'react-i18next';

// components
import Navbar from '../../components/Navbar'
import Breadcumb from '../../components/breadcumb'

import Features from '../../components/features'
import PracticeArea from '../../components/PracticeArea'
import PricingSection from '../../components/Pricing'
import Testimonial from '../../components/testimonial'
import FooterSection from '../../components/Footer'
import { useEffect } from 'react';



const PracticePage = () => {
    const { t } = useTranslation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="practicepage">
            <Navbar />
            <Breadcumb bdtitle={t('pages.ServicesPageTitle')} bdsub={t('pages.ServicesPageTitle')} />
            <Features />
            <PracticeArea />
            {/* <PricingSection /> */}
            <Testimonial />
            <FooterSection />
        </div>
    )
}

export default PracticePage;