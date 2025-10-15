import React from  'react';

// components
import Navbar from '../../components/Navbar'
import Breadcumb from '../../components/breadcumb'

import Features from '../../components/features'
import AboutSection from '../../components/about'
import PracticeArea from '../../components/PracticeArea'
import Testimonial from '../../components/testimonial'
import TeamSection from '../../components/Team'
import CounterSection from '../../components/CounterSection'
import BlogSection from '../../components/BlogSection'
import FooterSection from '../../components/Footer'


const AboutPage = () => {
    return(
       <div className="about-layout">
           <Navbar/>
           <Breadcumb bdtitle={'About Us'} bdsub={'About'}/>
           <Features/>
           <AboutSection/>
           <PracticeArea/>
           <Testimonial/>
           <TeamSection/>
           <CounterSection/>
           <BlogSection/>
           <FooterSection/>
       </div>
    )
}

export default AboutPage;