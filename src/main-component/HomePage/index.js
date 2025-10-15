import React from 'react';

// components
import Navbar from '../../components/Navbar'
import SimpleSlider from '../../components/hero'

import Features from '../../components/features'
import AboutSection from '../../components/about'
import PracticeArea from '../../components/PracticeArea'
import Porfolio from '../../components/case'
import Testimonial from '../../components/testimonial'
import ContactSection from '../../components/ContactSection'
import TeamSection from '../../components/Team'
import CounterSection from '../../components/CounterSection'
import BlogSection from '../../components/BlogSection'
import FooterSection from '../../components/Footer'


const Homepage = () => {
    return (
        <div>
            <Navbar />
            <SimpleSlider />
            <Features />
            <AboutSection />
            <PracticeArea />
            <Porfolio />
            <Testimonial />
            <ContactSection />
            <TeamSection />
            <CounterSection />
            <BlogSection />
            <FooterSection />
        </div>
    )
}

export default Homepage;