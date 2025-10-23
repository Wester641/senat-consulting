import React from 'react';

// components
import Navbar from '../../components/Navbar'
import Breadcumb from '../../components/breadcumb'

import BlogFullWidth from '../../components/BlogFullWidth'
import FooterSection from '../../components/Footer'
import { useEffect } from 'react';


const BlogPageFullwidth = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Navbar />
            <Breadcumb bdtitle={'Последние новости'} bdsub={'Новости'} />
            <BlogFullWidth />
            <FooterSection />
        </div>
    )
}

export default BlogPageFullwidth;