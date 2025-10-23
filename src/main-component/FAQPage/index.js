import React from 'react';

// components
import Navbar from '../../components/Navbar'
import Breadcumb from '../../components/breadcumb'

import FaqSection from '../../components/Fagpage'
import FooterSection from '../../components/Footer'
import { useEffect } from 'react';


const FAQPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Navbar />
            <Breadcumb bdtitle={'FAQ'} bdsub={'FAQ'} />
            <FaqSection />
            <FooterSection />
        </div>
    )
}

export default FAQPage;