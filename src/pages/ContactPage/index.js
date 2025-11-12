import React from 'react';
import { useTranslation } from 'react-i18next';

// components
import Navbar from '../../components/Navbar'
import Breadcumb from '../../components/breadcumb'

import Contactpage from '../../components/Contactpage'
import FooterSection from '../../components/Footer'
import { useEffect } from 'react';


const ContactPage = () => {
    const { t } = useTranslation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Navbar />
            <Breadcumb bdtitle={t('pages.ContactPageTitle')} bdsub={t('pages.ContactPageSubTitle')} />
            <Contactpage />
            <FooterSection />
        </div>
    )
}

export default ContactPage;