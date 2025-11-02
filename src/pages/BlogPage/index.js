import React from 'react';

// components
import Navbar from '../../components/Navbar'
import Breadcumb from '../../components/breadcumb'

import BlogGrid from '../../components/BlogGrid'
import FooterSection from '../../components/Footer'
import { useEffect } from 'react';


const BlogPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Navbar />
            <Breadcumb bdtitle={'Latest News'} bdsub={'Blog'} />
            <BlogGrid />
            <FooterSection />
        </div>
    )
}

export default BlogPage;