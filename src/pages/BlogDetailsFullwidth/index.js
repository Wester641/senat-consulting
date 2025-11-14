import React from 'react';
import { useTranslation } from 'react-i18next';

// components
import Navbar from '../../components/Navbar'
import Breadcumb from '../../components/breadcumb'

import BlogDetailFullwidth from '../../components/BlogDetailsFullwidth'
import FooterSection from '../../components/Footer'
import { useEffect } from 'react';


const BlogDetailsFullwidth = () => {
    const { t } = useTranslation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Navbar />
            <Breadcumb bdtitle={t('pages.BlogFullWidthPageTitle')} bdsub={t('pages.BlogPageSubTitle')} />
            <BlogDetailFullwidth />
            <FooterSection />
        </div>
    )
}

export default BlogDetailsFullwidth;