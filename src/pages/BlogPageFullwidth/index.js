import React from 'react';
import { useTranslation } from 'react-i18next';

// components
import Navbar from '../../components/Navbar'
import Breadcumb from '../../components/breadcumb'

import BlogFullWidth from '../../components/BlogFullWidth'
import FooterSection from '../../components/Footer'
import { useEffect } from 'react';


const BlogPageFullwidth = () => {
    const { t } = useTranslation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Navbar />
            <Breadcumb bdtitle={t('pages.BlogPageTitle')} bdsub={t('pages.BlogPageSubTitle')} />
            <BlogFullWidth />
            <FooterSection />
        </div>
    )
}

export default BlogPageFullwidth;