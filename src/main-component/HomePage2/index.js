import React from 'react';

// components
import Navbar2 from '../../components/Navbar2'
import SimpleSlider2 from '../../components/hero2'

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


const Homepage2 = () => {
    return (
        <div>
            <Navbar2 />
            <SimpleSlider2 />
            <Features />
            <AboutSection />
            <PracticeArea subclass={'practice-area-2'} />
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

export default Homepage2;