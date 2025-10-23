import React from 'react';

// components
import Navbar from '../../components/Navbar'
import Breadcumb from '../../components/breadcumb'

import Contactpage from '../../components/Contactpage'
import FooterSection from '../../components/Footer'
import { useEffect } from 'react';


const ContactPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Navbar />
            <Breadcumb bdtitle={'Наши контакты'} bdsub={'Контакты'} />
            <Contactpage />
            <FooterSection />
        </div>
    )
}

export default ContactPage;