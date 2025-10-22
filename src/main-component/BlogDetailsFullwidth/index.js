import React from  'react';

// components
import Navbar from '../../components/Navbar'
import Breadcumb from '../../components/breadcumb'

import BlogDetailFullwidth from '../../components/BlogDetailsFullwidth'
import FooterSection from '../../components/Footer'


const BlogDetailsFullwidth = () => {
    return(
       <div>
           <Navbar/>
           <Breadcumb bdtitle={'Подробности новости'} bdsub={'Новости'}/>
           <BlogDetailFullwidth/>
           <FooterSection/>
       </div>
    )
}

export default BlogDetailsFullwidth;