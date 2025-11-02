import React from 'react';

// components
import Navbar from '../../components/Navbar'
import Breadcumb from '../../components/breadcumb'

// import Porfolio from '../../components/case'
import FooterSection from '../../components/Footer'
import Testimonial from '../../components/testimonial/index';
import Testimonial2 from '../../components/testimonial/index2';
import { useEffect } from 'react';



const CaseStudiesPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Navbar />
            <Breadcumb bdtitle={'Наши дела'} bdsub={'Отзывы'} />
            {/* <Porfolio/> */}
            <Testimonial />
            <Testimonial2 />
            <FooterSection />
        </div>
    )
}

export default CaseStudiesPage;