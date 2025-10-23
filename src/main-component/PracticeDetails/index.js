import React from 'react';

// components
import Navbar from '../../components/Navbar'
import Breadcumb from '../../components/breadcumb'

import PracticDetails from '../../components/practicedetails'
import FooterSection from '../../components/Footer'
import { useEffect } from 'react';


const PracticeDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Navbar />
            <Breadcumb bdtitle={'Услуги'} bdsub={'Детали услуг'} />
            <PracticDetails />
            <FooterSection />
        </div>
    )
}

export default PracticeDetails;