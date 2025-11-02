import React from 'react';

// components
import Navbar from '../../components/Navbar'
import Breadcumb from '../../components/breadcumb'

import BlogDetailFullwidth from '../../components/BlogDetailsFullwidth'
import FooterSection from '../../components/Footer'
import { useEffect } from 'react';


const BlogDetailsFullwidth = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Navbar />
            <Breadcumb bdtitle={'Подробности новости'} bdsub={'Новости'} />
            <BlogDetailFullwidth />
            <FooterSection />
        </div>
    )
}

export default BlogDetailsFullwidth;