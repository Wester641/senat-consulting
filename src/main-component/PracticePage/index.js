import React from 'react';

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
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="practicepage">
            <Navbar />
            <Breadcumb bdtitle={'Наши услуги'} bdsub={'Наши услуги'} />
            <Features />
            <PracticeArea />
            <PricingSection />
            <Testimonial />
            <FooterSection />
        </div>
    )
}

export default PracticePage;