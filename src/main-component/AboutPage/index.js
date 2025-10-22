import React from  'react';

// components
import Navbar from '../../components/Navbar'
import Breadcumb from '../../components/breadcumb'
import AboutSection from '../../components/about'
import PracticeArea from '../../components/PracticeArea'
import Testimonial from '../../components/testimonial'
import FooterSection from '../../components/Footer'


const AboutPage = () => {
    return(
       <div className="about-layout">
           <Navbar/>
           <Breadcumb bdtitle={'О нас'} bdsub={'О компании'}/>
           <AboutSection/>
           <PracticeArea/>
           <Testimonial/>
           <FooterSection/>
       </div>
    )
}

export default AboutPage;