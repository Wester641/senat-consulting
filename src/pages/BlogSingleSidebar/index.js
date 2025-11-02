import React from 'react';

// components
import Navbar from '../../components/Navbar'
import Breadcumb from '../../components/breadcumb'

import BlogDetailsSection from '../../components/BlogDetailsSection'
import FooterSection from '../../components/Footer'
import { useEffect } from 'react';


const BlogSingleSidebar = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Navbar />
            <Breadcumb bdtitle={'Latest News'} bdsub={'Blog Single'} />
            <BlogDetailsSection />
            <FooterSection />
        </div>
    )
}

export default BlogSingleSidebar;